import { getOwnNames, createSandBox, globalObj, assign } from './share/util'
import { version } from '../package.json'
import { Options, Parser } from 'acorn'
import { Node, Program } from 'estree'
import Scope, { OperatorHandle } from './scope'

import { hoist } from './evaluate_n/helper'
import evaluate from './evaluate_n'

export { OperatorHandle }

export enum TYPE {
  ANY,
  STRING,
  NUMBER,
  BOOLEAN,
  DATETIME,
}

export interface FunctionType {
  name: string;
  returnType: TYPE;
  argsType: (index: number) => TYPE;
}

export interface FunctionTypeMap {
  [name: string]: FunctionType
}

export interface SvalOptions {
  ecmaVer?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019
  sandBox?: boolean
  operatorHandle?: { name: string, handle: OperatorHandle }[]
  nullSafe?: boolean
}

export interface RunOption {
  null2Zero?: boolean;
  funcTypeMap?: FunctionTypeMap;

  null2ZeroOnAssignment?: boolean;
}

function customParser(BaseParser: typeof Parser):typeof Parser {
  // @ts-ignore
  BaseParser.acorn.tokTypes.bitwiseXOR.binop = 11
  return BaseParser;
}

class Sval {
  static version: string = version

  private options: Options = {}
  private scope = new Scope(null, true)

  exports: { [name: string]: any } = {}

  parser:typeof Parser;

  constructor(options: SvalOptions = {}) {
    let { ecmaVer = 9, sandBox = true, operatorHandle = [], nullSafe = false } = options

    ecmaVer -= ecmaVer < 2015 ? 0 : 2009 // format ecma edition

    if ([3, 5, 6, 7, 8, 9, 10].indexOf(ecmaVer) === -1) {
      throw new Error(`unsupported ecmaVer`)
    }

    this.options.ecmaVersion = ecmaVer as Options['ecmaVersion']

    if (sandBox) {
      // Shallow clone to create a sandbox
      const win = createSandBox()
      this.scope.let('window', win)
      this.scope.let('this', win)
    } else {
      this.scope.let('window', globalObj)
      this.scope.let('this', globalObj)
    }

    this.scope.const('exports', this.exports = {})

    operatorHandle.forEach(item => this.scope.addOperator(item.name, item.handle))
    this.scope.nullSafe = nullSafe;
    this.parser = Parser.extend(customParser);
  }

  import(nameOrModules: string | { [name: string]: any }, mod?: any) {
    if (typeof nameOrModules === 'string') {
      nameOrModules = { [nameOrModules]: mod }
    }

    if (typeof nameOrModules !== 'object') return

    const names = getOwnNames(nameOrModules)

    for (let i = 0; i < names.length; i++) {
      const name = names[i]
      this.scope.var(name, nameOrModules[name])
    }
  }

  parse(code: string, parser?: (code: string, options: SvalOptions) => Node) {
    if (typeof parser === 'function') {
      return parser(code, assign({}, this.options))
    }
    return this.parser.parse(code, this.options)
  }

  run(code: string | Node, { null2Zero = false, funcTypeMap, null2ZeroOnAssignment = false }: RunOption = {}) {
    this.scope.null2Zero = null2Zero;
    this.scope.funcTypeMap = funcTypeMap;
    this.scope.null2ZeroOnAssignment = null2ZeroOnAssignment;
    const ast = typeof code === 'string' ? this.parser.parse(code, this.options) as Node : code
    hoist(ast as Program, this.scope)
    evaluate(ast, this.scope)
  }
}

export default Sval
