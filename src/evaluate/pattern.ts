import * as estree from 'estree'
import Scope from '../scope'
import evaluate from '.'
import { VarKind, Var } from '../scope/variable'
import { Identifier } from './identifier'
import { pattern } from '../share/helper'

export interface PatternOptions {
  kind?: VarKind
  hoist?: boolean
  feed?: any
}

export function* ObjectPattern(node: estree.ObjectPattern, scope: Scope, options: PatternOptions = {}) {
  for (const property of node.properties) {
    yield* AssignmentProperty(property, scope, options)
  }
}

export function* AssignmentProperty(node: estree.AssignmentProperty, scope: Scope, options: PatternOptions = {}): IterableIterator<any> {
  const { kind = 'let', hoist = false, feed = {} } = options
  const value = node.value
  if (hoist) {
    if (kind === 'var') {
      if (value.type === 'Identifier') {
        const name = yield* Identifier(value, scope, { getName: true })
        scope.var(name, undefined)
      } else {
        yield* pattern(value, scope, { kind, hoist })
      }
    }
  } else {
    let key: string
    if (node.computed) {
      key = yield* evaluate(node.key, scope)
    } else if (node.key.type === 'Identifier') {
      key = yield* Identifier(node.key, scope, { getName: true })
    } else {
      throw new SyntaxError('Unexpected token')
    }
    
    if (value.type === 'Identifier') {
      const name = yield* Identifier(value, scope, { getName: true })
      if (!scope[kind](name, feed[key])) {
        throw new SyntaxError(`Identifier '${name}' has already been declared`)
      }
    } else {
      yield* pattern(value, scope, { kind, feed: feed[key] })
    }
  }
}

export function* ArrayPattern(node: estree.ArrayPattern, scope: Scope, options: PatternOptions = {}) {
  const { kind, hoist = false, feed = [] } = options
  const result = []
  for (let i = 0; i < node.elements.length; i++) {
    const element = node.elements[i]
    if (hoist) {
      if (kind === 'var') {
        if (element.type === 'Identifier') {
          const name = yield* Identifier(element, scope, { getName: true })
          scope.var(name, undefined)
        } else {
          yield* pattern(element, scope, { kind, hoist })
        }
      }
    } else {
      if (kind && element.type === 'Identifier') {
        // If kind isn't undefined, it's a declaration
        const name = yield* Identifier(element, scope, { getName: true })
        if (!scope[kind](name, feed[i])) {
          throw new SyntaxError(`Identifier '${name}' has already been declared`)
        }
      } else if (element.type === 'Identifier') {
        // If kind is undefined, it's a statement
        const variable: Var = yield* Identifier(element, scope, { getVar: true })
        variable.set(feed[i])
        result.push(variable.get())
      } else {
        yield* pattern(element, scope, { kind, feed: feed[i] })
      }
    }
  }
  if (result.length) {
    return result
  }
}

export function* RestElement(node: estree.RestElement, scope: Scope, options: PatternOptions = {}) {
  const { kind = 'let', hoist = false, feed = [] } = options
  const arg = node.argument
  if (hoist) {
    if (kind === 'var') {
      if (arg.type === 'Identifier') {
        const name = yield* Identifier(arg, scope, { getName: true })
        scope.var(name, undefined)
      } else {
        yield* pattern(arg, scope, { kind, hoist })
      }
    }
  } else {
    if (arg.type === 'Identifier') {
      const name = yield* Identifier(arg, scope, { getName: true })
      if (!scope[kind](name, feed)) {
        throw new SyntaxError(`Identifier '${name}' has already been declared`)
      }
    } else {
      yield* pattern(arg, scope, { kind, feed })
    }
  }
}

export function* AssignmentPattern(node: estree.AssignmentPattern, scope: Scope) {
  const feed = yield* evaluate(node.right, scope)
  if (node.left.type === 'Identifier') {
    const name = yield* Identifier(node.left, scope, { getName: true })
    scope.let(name, feed)
  } else {
    yield* pattern(node.left, scope, { feed })
  }
}