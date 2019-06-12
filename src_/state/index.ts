import { OpCode } from '../share/const'
import SymbolTable from './symbols'

export default class State {
  readonly stack: any[] = []

  readonly symbols: SymbolTable = new SymbolTable()

  readonly opCodes: OpCode[] = []

  context: { store: any }[] = [] // context item must be a ref type to maintain a lexical scope

  pc: number = 0
}