import Sval, { FunctionTypeMap, TYPE } from '../src'
import funcMap, { FuncTypeMap } from './function';
import { Identifier, MemberExpression } from "estree";

describe('testing src/expression.ts', () => {
  it('operator overload: +', () => {
    const interpreter = new Sval({
      nullSafe: true, operatorHandle: [{
        name: '+', handle(left, right) {
          if (typeof left !== 'number' && typeof right !== 'number') {
            if (left === null || left === undefined) {
              left = ''
            }
            if (right === null || right === undefined) {
              right = ''
            }
          }
          return left + right
        }
      }]
    })

    const bizData: any = { field2: { field3: 3, field1: null }, field3: '123', field1: undefined }

    interpreter.import({ bizData })
    interpreter.run(`
      exports.a = bizData.field1 + bizData.field3 + bizData.field2.field3
      exports.b = bizData.field3 + bizData.field2.field1
    `)

    expect(interpreter.exports.a).toBe('1233')
    expect(interpreter.exports.b).toBe('123')
  })

  it('null safe', () => {
    const interpreter = new Sval({ nullSafe: true })

    const bizData: any = { field3: '123', field1: null }

    interpreter.import({ bizData })
    interpreter.run(`
      exports.a = bizData.field2.field3
      exports.b = bizData.field1.field3
    `)

    expect(interpreter.exports.a).toBe(undefined)
    expect(interpreter.exports.b).toBe(null)
  })

  it('null2Zero in BinaryExpression', () => {
    const interpreter = new Sval({ nullSafe: true })

    const bizData: any = { field3: {}, field1: null, field2: null };
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field3.field3 + 5
      exports.b = bizData.field1 + 5
      exports.c = bizData.field1
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(5);
    expect(interpreter.exports.b).toEqual(5);
    expect(interpreter.exports.c).toEqual(null);

    interpreter.run(`
      exports.a = bizData.field3.field3 + 5
      exports.b = bizData.field1 + 5
      exports.c = bizData.field1
    `, { null2Zero: true, null2ZeroOnAssignment: true });
    expect(interpreter.exports.a).toEqual(5);
    expect(interpreter.exports.b).toEqual(5);
    expect(interpreter.exports.c).toEqual(0);

    interpreter.run(`
      exports.a = bizData.field3.field3 + 5
      exports.b = bizData.field1 + 5
      exports.c = bizData.field1
    `);
    expect(interpreter.exports.a).toEqual(null);
    expect(interpreter.exports.b).toEqual(null);
    expect(interpreter.exports.c).toEqual(null);
  })
  it('null2Zero in /0', () => {
    const interpreter = new Sval({ nullSafe: true })

    const bizData: any = { field1: 2, field2: 2 };
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field1 * 2 / (bizData.field2 / bizData.field3) + 1
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(null)
  })

  it('null2Zero in Function', () => {
    const interpreter = new Sval({ nullSafe: true, funcTypeMap: FuncTypeMap })

    const bizData: any = { field1: null, field2: true }
    interpreter.import({ bizData })
    interpreter.import(funcMap);
    interpreter.run(`
      exports.a = ABS(bizData.field1);
      exports.b = ABS(bizData.field1) + 1;
      exports.c = ABS(FirstNotNull(bizData.field1));
      exports.d = ABS(IF(bizData.field2, bizData.field3, bizData.field3 + 1));
    `, { null2Zero: true })

    expect(interpreter.exports.a).toEqual(0)
    expect(interpreter.exports.b).toEqual(1)
    expect(interpreter.exports.c).toEqual(null)
    expect(interpreter.exports.d).toEqual(null)
    interpreter.run(`
      exports.a = ABS(bizData.field1);
      exports.b = ABS(bizData.field1) + 1;
      exports.c = ABS(FirstNotNull(bizData.field1));
      exports.d = ABS(IF(bizData.field2, bizData.field3, bizData.field3 + 1));
    `)

    expect(interpreter.exports.a).toEqual(null)
    expect(interpreter.exports.b).toEqual(null)
    expect(interpreter.exports.c).toEqual(null)
    expect(interpreter.exports.d).toEqual(null)
  })

  it('^ 改为幂运算符', () => {
    const interpreter = new Sval({ nullSafe: true })
    const bizData: any = {};
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field1 ^ bizData.field2 + 1
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(2);
    bizData.field1 = 2;
    bizData.field2 = 2
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field1 ^ bizData.field2 + 1
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(5);
    interpreter.run(`
      exports.a = 2 * 3 ^ 2 / 3
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(6);
  })

  it('区分字符串拼接与数值加法', () => {
    const isNumberField = (fieldNames: string[]) => {
      return ['field1', 'field2'].some(f => f === fieldNames[1]);
    }
    const interpreter = new Sval({
      nullSafe: true, ecmaVer: 6,
      sandBox: true,
    })
    const bizData: any = {};
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field1 + bizData.field2
      exports.b = bizData.field1 + bizData.field3
      exports.c = bizData.field1 + 5
      exports.d = bizData.field1 + "5"
      exports.e = bizData.field1 + null
    `, { null2Zero: true, isNumberField });
    expect(interpreter.exports.a).toEqual(0);
    expect(interpreter.exports.b).toEqual('');
    expect(interpreter.exports.c).toEqual(5);
    expect(interpreter.exports.d).toEqual('5');
    expect(interpreter.exports.e).toEqual(null);
    bizData.field1 = 1;
    interpreter.import({ bizData });
    interpreter.run(`
      exports.a = bizData.field1 + bizData.field2
      exports.b = bizData.field1 + bizData.field3
      exports.c = bizData.field1 + 5
      exports.d = bizData.field1 + "5"
      exports.e = bizData.field1 + null
    `, { null2Zero: true });
    expect(interpreter.exports.a).toEqual(1);
    expect(interpreter.exports.b).toEqual('1');
    expect(interpreter.exports.c).toEqual(6);
    expect(interpreter.exports.d).toEqual('15');
    expect(interpreter.exports.e).toEqual(null);
  })

  it('should call expression run normally', () => {
    const interpreter = new Sval()

    class A {
      a = 1

      then() {
        this.a++
        return this
      }
    }

    interpreter.import({ A })
    interpreter.run('exports.inst = new A().then()')

    expect(interpreter.exports.inst.a).toBe(2)
  })
  it('should unary expression run normally', () => {
    const interpreter = new Sval()

    const code = `
      exports.a = !(~(+(-1)))
      exports.b = void 0
      exports.c = typeof x // shouldn't throw err
      exports.d = 1
      exports.e = delete exports.d
      exports.f = typeof exports.e
    `
    interpreter.run(`!async function(){${ code }}()`) // also test for generator env
    interpreter.run(code)

    expect(interpreter.exports.a).toBeTruthy()
    expect(interpreter.exports.b).toBeUndefined()
    expect(interpreter.exports.c).toBe('undefined')
    expect(interpreter.exports.d).toBeUndefined()
    expect(interpreter.exports.e).toBeTruthy()
    expect(interpreter.exports.f).toBe('boolean')
  })
  it('should binary expression run normally', () => {
    const interpreter = new Sval()

    const code = `
      // comparison
      exports.a = 1 == '1'
      exports.b = 1 != '1'
      exports.c = 1 === '1'
      exports.d = 1 !== '1'
      exports.e = 1 < 1
      exports.f = 1 <= 1
      exports.g = 1 > 1
      exports.h = 1 >= 1
      // bitwise offset
      exports.i = 1 << 1
      exports.j = 1 >> 1
      exports.k = 1 >>> 1
      exports.l = 1 | 2 // 01 | 10 = 11
      exports.m = 1 & 2 // 01 & 10 = 00
      exports.n = 1 ^ 1 // 01 ^ 01 = 00
      // calculate
      exports.o = 1 + 1
      exports.p = 1 - 1
      exports.q = 1 * 2
      exports.r = 2 / 2
      exports.s = 2 ** 2
      exports.t = 3 % 2
      // others
      const a = { b: 1 }
      exports.u = 'b' in a
      function b() {}
      const c = new b
      exports.v = c instanceof b
    `
    interpreter.run(`!async function(){${ code }}()`) // also test for generator env
    interpreter.run(code)
    // comparison
    expect(interpreter.exports.a).toBeTruthy()
    expect(interpreter.exports.b).toBeFalsy()
    expect(interpreter.exports.c).toBeFalsy()
    expect(interpreter.exports.d).toBeTruthy()
    expect(interpreter.exports.e).toBeFalsy()
    expect(interpreter.exports.f).toBeTruthy()
    expect(interpreter.exports.g).toBeFalsy()
    expect(interpreter.exports.h).toBeTruthy()
    // bitwise offset
    expect(interpreter.exports.i).toBe(2)
    expect(interpreter.exports.j).toBe(0)
    expect(interpreter.exports.k).toBe(0)
    expect(interpreter.exports.l).toBe(3)
    expect(interpreter.exports.m).toBe(0)
    // ^ 改为幂运算符
    expect(interpreter.exports.n).toBe(1)
    // calculate
    expect(interpreter.exports.o).toBe(2)
    expect(interpreter.exports.p).toBe(0)
    expect(interpreter.exports.q).toBe(2)
    expect(interpreter.exports.r).toBe(1)
    expect(interpreter.exports.s).toBe(4)
    expect(interpreter.exports.t).toBe(1)
    // others
    expect(interpreter.exports.u).toBeTruthy()
    expect(interpreter.exports.v).toBeTruthy()
  })
  it('should assignment expression run normally', () => {
    const interpreter = new Sval()
    const code = `
      exports.a = 2
      expect(exports.a).toBe(2)
      exports.a -= 1
      expect(exports.a).toBe(1)
      exports.a *= 2
      expect(exports.a).toBe(2)
      exports.a **= 2
      expect(exports.a).toBe(4)
      exports.a /= 2
      expect(exports.a).toBe(2)
      exports.a %= 1
      expect(exports.a).toBe(0)
      exports.a += 1
      expect(exports.a).toBe(1)
      exports.a <<= 2
      expect(exports.a).toBe(4)
      exports.a >>= 1
      expect(exports.a).toBe(2)
      exports.a >>>= 1
      expect(exports.a).toBe(1)
      exports.a |= 1
      expect(exports.a).toBe(1)
      exports.a &= 1
      expect(exports.a).toBe(1)
      exports.a ^= 1
      expect(exports.a).toBe(0)
    `
    interpreter.import({ expect })
    interpreter.run(`!async function(){${ code }}()`) // also test for generator env
    interpreter.run(code)
  })

  it('should throw TypeError when assigning to constant', () => {
    const interpreter = new Sval()
    let error = null
    try {
      interpreter.run(`
        const x = 5
        x = 6
      `)
    } catch (ex) {
      error = ex
    }

    expect(error).toBeInstanceOf(TypeError)
  })

  it('should parse spread element normally', () => {
    const interpreter = new Sval()

    interpreter.run(`
      const arr = [1, 2]
      exports.a = [...arr]
      exports.b = [...[1, 2, 3]]
      
      f(...arr)
      function f(m, n) {
        exports.c = m
        exports.d = n
      }
    `)

    expect(interpreter.exports.a).toEqual([1, 2])
    expect(interpreter.exports.b).toEqual([1, 2, 3])
    expect(interpreter.exports.c).toBe(1)
    expect(interpreter.exports.d).toBe(2)
  })
  it('should parse regular expression normally', () => {
    const interpreter = new Sval()
    interpreter.import({ expect })
    interpreter.run(`
      const re = /\\/\\*<([^>]+?)>\\*\\/([\\s\\S]*?)\\/\\*<\\/([^>]+?)>\\*\\//g
      exports.a = '/*<add>*//*hello*//*</add>*/ /*<add>*//*world*//*</add>*/'
        .replace(re, (_, start, content, end) => {
          expect(start).toBe('add')
          expect(end).toBe('add')
          return content.match(/\\/\\*([\\s\\S]*)\\*\\//)[1]
        })
    `)
    expect(interpreter.exports.a).toBe('hello world')
  })

  it('should support object expression', () => {
    const interpreter = new Sval()
    interpreter.import({ expect })
    interpreter.run(`
      const name = 'y'
      const values = { a: 1, b: 2 }
      const a = {
        x: 5,
        [name]: 6,
        ...values
      }

      expect(a).toEqual(result = {
        x: 5,
        y: 6,
        a: 1,
        b: 2
      })

      // object with getter+setter
      const b = {
        _t: 1,
        get t() {
          return this._t
        },
        set t(v) {
          this._t = v
        }
      }

      b.t = 2

      exports.b = b
    `)

    const b = {
      _t: 1,
      get t() {
        return this._t
      },
      set t(v) {
        this._t = v
      }
    }

    b.t = 2

    expect(interpreter.exports.b).toEqual(b)
  })

  it('should support object expression with correct property descriptor', () => {
    const interpreter = new Sval()
    interpreter.run(`
      const a = {
        x: 5,
        get y() {
          return this.x + 1
        },
        set y(v) {
          this.x = v - 1
        }
      }

      exports.a = a
    `)

    const a = interpreter.exports.a;
    expect(Object.keys(a)).toEqual(['x', 'y'])

    const xPD = Object.getOwnPropertyDescriptor(a, 'x')
    expect(xPD).toEqual({
      configurable: true,
      enumerable: true,
      value: 5,
      writable: true
    })

    const yPD = Object.getOwnPropertyDescriptor(a, 'y')
    expect({
      configurable: yPD.configurable,
      enumerable: yPD.enumerable,
    }).toEqual({
      configurable: true,
      enumerable: true,
    })
  })

  it('should support logic expression', () => {
    const interpreter = new Sval()
    interpreter.import({ expect })
    interpreter.run(`
      const x = 0
      const y = true

      expect(x && y).toBe(0)
      expect(x || y).toBe(true)
    `)
  })

  it('should support method call with super + getter', () => {
    const interpreter = new Sval()
    interpreter.run(`
      class X {
        get say() {
          return function() { return 1}
        }
      }

      class Y extends X {
        say() {
          return super.say()
        }
      }

      exports.result = new Y().say()
    `)

    expect(interpreter.exports.result).toEqual(1);
  })

  it('should support method call with computed name', () => {
    const interpreter = new Sval()
    interpreter.run(`
      var x = {
        say() {
          return 1
        }
      }

      exports.result = x['say']()
    `)

    expect(interpreter.exports.result).toEqual(1);
  })
  // + 不进行类型转换
  // it('should support method call with computed name', () => {
  //   const interpreter = new Sval()
  //   interpreter.run(`
  //     exports.result = 1+!!2
  //   `)
  //   expect(interpreter.exports.result).toEqual(2);
  // })

  it('should support all kinds of delete actions', () => {
    const interpreter = new Sval()
    interpreter.run(`
      var x = {}

      // normal behavior for 'delete' in strict mode
      delete x.x

      // delete any literal except undefined, undefined is an identifier in js
      let result = true
      result &= delete 1
      result &= '1'
      result &= delete true
      result &= delete Symbol('xx')
      result &= delete null
      result &= delete {}
      result &= delete function () {}
      result &= delete /x/

      exports.result = result
    `)

    expect(interpreter.exports.result).toBeTruthy()

    let error = null;
    try {
      interpreter.run(`
        // trying to delete a regular identifier in strict mode
        var y = {}
        delete y
      `)
    } catch (ex) {
      error = ex
    }

    expect(error).toBeInstanceOf(SyntaxError);
  })
  it('isNumberField', () => {
    const interpreter = new Sval({
      nullSafe: true,
    })
    interpreter.import({ bizData: {}, bizData1: {} })
    interpreter.run(`bizData.f1 + bizData1.f2.f3.f4.f5`, {
      isNumberField(fieldNames: string[]) {
        if (fieldNames[0] === 'bizData') {
          expect(fieldNames).toStrictEqual(['bizData', 'f1'])
        } else if (fieldNames[0] === 'bizData1') {
          expect(fieldNames).toStrictEqual(['bizData1', 'f2', 'f3', 'f4', 'f5'])
        }
        return true;
      }
    })
  })
})
