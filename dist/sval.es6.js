(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('acorn')) :
  typeof define === 'function' && define.amd ? define(['exports', 'acorn'], factory) :
  (global = global || self, factory(global.Sval = {}, global.acorn));
}(this, (function (exports, acorn) { 'use strict';

  var declaration = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get FunctionDeclaration () { return FunctionDeclaration; },
    get VariableDeclaration () { return VariableDeclaration; },
    get VariableDeclarator () { return VariableDeclarator; },
    get ClassDeclaration () { return ClassDeclaration; },
    get ClassBody () { return ClassBody; },
    get MethodDefinition () { return MethodDefinition; }
  });

  const freeze = Object.freeze;
  const define = Object.defineProperty;
  const getDptor = Object.getOwnPropertyDescriptor;
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
  }
  const getOwnNames = Object.getOwnPropertyNames;
  const setPrototypeOf = Object.setPrototypeOf;
  function setProto(obj, proto) {
      setPrototypeOf ? setPrototypeOf(obj, proto) : obj.__proto__ = proto;
  }
  const getPrototypeOf = Object.getPrototypeOf;
  function getProto(obj) {
      return getPrototypeOf ? getPrototypeOf(obj) : obj.__proto__;
  }
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  function getGetterOrSetter(method, obj, key) {
      while (obj) {
          const descriptor = getOwnPropertyDescriptor(obj, key);
          const value = typeof descriptor !== 'undefined'
              && typeof descriptor.writable === 'undefined'
              && typeof descriptor[method] === 'function'
              && descriptor[method];
          if (value) {
              return value;
          }
          else {
              obj = getProto(obj);
          }
      }
  }
  function getGetter(obj, key) {
      return getGetterOrSetter('get', obj, key);
  }
  function getSetter(obj, key) {
      return getGetterOrSetter('set', obj, key);
  }
  const create = Object.create;
  function inherits(subClass, superClass) {
      setProto(subClass, superClass);
      subClass.prototype = create(superClass.prototype, {
          constructor: {
              value: subClass,
              writable: true,
          }
      });
  }
  function _assign(target) {
      for (let i = 1; i < arguments.length; ++i) {
          const source = arguments[i];
          for (const key in source) {
              if (hasOwn(source, key)) {
                  target[key] = source[key];
              }
          }
      }
      return target;
  }
  const assign = Object.assign || _assign;
  let names = [];
  let globalObj = create(null);
  try {
      if (!window.Object)
          throw 0;
      names = getOwnNames(globalObj = window).filter(n => n !== 'webkitStorageInfo');
  }
  catch (err) {
      try {
          if (!global.Object)
              throw 0;
          names = getOwnNames(globalObj = global).filter(n => n !== 'GLOBAL' && n !== 'root');
      }
      catch (err) {
          try {
              globalObj.Object = Object;
          }
          catch (err) { }
          try {
              globalObj.Function = Function;
          }
          catch (err) { }
          try {
              globalObj.Array = Array;
          }
          catch (err) { }
          try {
              globalObj.Number = Number;
          }
          catch (err) { }
          try {
              globalObj.parseFloat = parseFloat;
          }
          catch (err) { }
          try {
              globalObj.parseInt = parseInt;
          }
          catch (err) { }
          try {
              globalObj.Infinity = Infinity;
          }
          catch (err) { }
          try {
              globalObj.NaN = NaN;
          }
          catch (err) { }
          try {
              globalObj.undefined = undefined;
          }
          catch (err) { }
          try {
              globalObj.Boolean = Boolean;
          }
          catch (err) { }
          try {
              globalObj.String = String;
          }
          catch (err) { }
          try {
              globalObj.Symbol = Symbol;
          }
          catch (err) { }
          try {
              globalObj.Date = Date;
          }
          catch (err) { }
          try {
              globalObj.Promise = Promise;
          }
          catch (err) { }
          try {
              globalObj.RegExp = RegExp;
          }
          catch (err) { }
          try {
              globalObj.Error = Error;
          }
          catch (err) { }
          try {
              globalObj.EvalError = EvalError;
          }
          catch (err) { }
          try {
              globalObj.RangeError = RangeError;
          }
          catch (err) { }
          try {
              globalObj.ReferenceError = ReferenceError;
          }
          catch (err) { }
          try {
              globalObj.SyntaxError = SyntaxError;
          }
          catch (err) { }
          try {
              globalObj.TypeError = TypeError;
          }
          catch (err) { }
          try {
              globalObj.URIError = URIError;
          }
          catch (err) { }
          try {
              globalObj.JSON = JSON;
          }
          catch (err) { }
          try {
              globalObj.Math = Math;
          }
          catch (err) { }
          try {
              globalObj.console = console;
          }
          catch (err) { }
          try {
              globalObj.Intl = Intl;
          }
          catch (err) { }
          try {
              globalObj.ArrayBuffer = ArrayBuffer;
          }
          catch (err) { }
          try {
              globalObj.Uint8Array = Uint8Array;
          }
          catch (err) { }
          try {
              globalObj.Int8Array = Int8Array;
          }
          catch (err) { }
          try {
              globalObj.Uint16Array = Uint16Array;
          }
          catch (err) { }
          try {
              globalObj.Int16Array = Int16Array;
          }
          catch (err) { }
          try {
              globalObj.Uint32Array = Uint32Array;
          }
          catch (err) { }
          try {
              globalObj.Int32Array = Int32Array;
          }
          catch (err) { }
          try {
              globalObj.Float32Array = Float32Array;
          }
          catch (err) { }
          try {
              globalObj.Float64Array = Float64Array;
          }
          catch (err) { }
          try {
              globalObj.Uint8ClampedArray = Uint8ClampedArray;
          }
          catch (err) { }
          try {
              globalObj.DataView = DataView;
          }
          catch (err) { }
          try {
              globalObj.Map = Map;
          }
          catch (err) { }
          try {
              globalObj.Set = Set;
          }
          catch (err) { }
          try {
              globalObj.WeakMap = WeakMap;
          }
          catch (err) { }
          try {
              globalObj.WeakSet = WeakSet;
          }
          catch (err) { }
          try {
              globalObj.Proxy = Proxy;
          }
          catch (err) { }
          try {
              globalObj.Reflect = Reflect;
          }
          catch (err) { }
          try {
              globalObj.decodeURI = decodeURI;
          }
          catch (err) { }
          try {
              globalObj.decodeURIComponent = decodeURIComponent;
          }
          catch (err) { }
          try {
              globalObj.encodeURI = encodeURI;
          }
          catch (err) { }
          try {
              globalObj.encodeURIComponent = encodeURIComponent;
          }
          catch (err) { }
          try {
              globalObj.escape = escape;
          }
          catch (err) { }
          try {
              globalObj.unescape = unescape;
          }
          catch (err) { }
          try {
              globalObj.eval = eval;
          }
          catch (err) { }
          try {
              globalObj.isFinite = isFinite;
          }
          catch (err) { }
          try {
              globalObj.isNaN = isNaN;
          }
          catch (err) { }
          try {
              globalObj.SharedArrayBuffer = SharedArrayBuffer;
          }
          catch (err) { }
          try {
              globalObj.Atomics = Atomics;
          }
          catch (err) { }
          try {
              globalObj.WebAssembly = WebAssembly;
          }
          catch (err) { }
          try {
              globalObj.clearInterval = clearInterval;
          }
          catch (err) { }
          try {
              globalObj.clearTimeout = clearTimeout;
          }
          catch (err) { }
          try {
              globalObj.setInterval = setInterval;
          }
          catch (err) { }
          try {
              globalObj.setTimeout = setTimeout;
          }
          catch (err) { }
          try {
              globalObj.crypto = crypto;
          }
          catch (err) { }
          names = getOwnNames(globalObj);
      }
  }
  if (globalObj.Symbol) {
      !globalObj.Symbol.iterator && (globalObj.Symbol.iterator = createSymbol('iterator'));
      !globalObj.Symbol.asyncIterator && (globalObj.Symbol.asyncIterator = createSymbol('asynciterator'));
  }
  const win = create({});
  for (let i = 0; i < names.length; i++) {
      const name = names[i];
      try {
          win[name] = globalObj[name];
      }
      catch (err) { }
  }
  const WINDOW = createSymbol('window');
  function createSandBox() {
      return assign(create({ [WINDOW]: globalObj }), win);
  }
  function createSymbol(key) {
      return key + Math.random().toString(36).substring(2);
  }

  var version = "0.4.8";

  const RETURN = { RES: undefined };
  const CONTINUE = createSymbol('continue');
  const BREAK = createSymbol('break');
  const SUPER = createSymbol('super');
  const SUPERCALL = createSymbol('supercall');
  const NOCTOR = createSymbol('noctor');
  const CLSCTOR = createSymbol('clsctor');
  const NEWTARGET = createSymbol('newtarget');
  const NOINIT = createSymbol('noinit');
  const DEADZONE = createSymbol('deadzone');

  class Var {
      constructor(kind, value) {
          this.kind = kind;
          this.value = value;
      }
      get() {
          return this.value;
      }
      set(value) {
          if (this.kind === 'const') {
              throw new TypeError('Assignment to constant variable');
          }
          else {
              return this.value = value;
          }
      }
  }
  class Prop {
      constructor(object, property) {
          this.object = object;
          this.property = property;
      }
      get() {
          return this.object[this.property];
      }
      set(value) {
          this.object[this.property] = value;
          return true;
      }
      del() {
          return delete this.object[this.property];
      }
  }

  class Scope {
      constructor(parent = null, isolated = false) {
          this.context = create(null);
          this.operator = create(null);
          this.nullSafe = false;
          this.null2Zero = false;
          this.parent = parent;
          this.isolated = isolated;
      }
      global() {
          let scope = this;
          while (scope.parent) {
              scope = scope.parent;
          }
          return scope;
      }
      clone() {
          const cloneScope = new Scope(this.parent, this.isolated);
          for (const name in this.context) {
              const variable = this.context[name];
              cloneScope[variable.kind](name, variable.get());
          }
          return cloneScope;
      }
      addOperator(operator, handle) {
          const handleFunc = this.operator[operator];
          if (!handleFunc) {
              this.operator[operator] = handle;
          }
          else {
              throw new SyntaxError(`Operator '${operator}' has already been overloaded`);
          }
      }
      findOperator(operator) {
          if (this.operator[operator]) {
              return this.operator[operator];
          }
          else if (this.parent) {
              return this.parent.findOperator(operator);
          }
      }
      find(name) {
          if (this.context[name]) {
              return this.context[name];
          }
          else if (this.parent) {
              return this.parent.find(name);
          }
          else {
              const win = this.global().find('window').get();
              if (name in win) {
                  return new Prop(win, name);
              }
              else {
                  return null;
              }
          }
      }
      var(name, value) {
          let scope = this;
          while (scope.parent && !scope.isolated) {
              scope = scope.parent;
          }
          const variable = scope.context[name];
          if (!variable) {
              scope.context[name] = new Var('var', value === NOINIT ? undefined : value);
          }
          else {
              if (variable.kind === 'var') {
                  if (value !== NOINIT) {
                      variable.set(value);
                  }
              }
              else {
                  throw new SyntaxError(`Identifier '${name}' has already been declared`);
              }
          }
          if (!scope.parent) {
              const win = scope.find('window').get();
              if (value !== NOINIT) {
                  define(win, name, { value, writable: true, enumerable: true });
              }
          }
      }
      let(name, value) {
          const variable = this.context[name];
          if (!variable || variable.get() === DEADZONE) {
              this.context[name] = new Var('let', value);
          }
          else {
              throw new SyntaxError(`Identifier '${name}' has already been declared`);
          }
      }
      const(name, value) {
          const variable = this.context[name];
          if (!variable || variable.get() === DEADZONE) {
              this.context[name] = new Var('const', value);
          }
          else {
              throw new SyntaxError(`Identifier '${name}' has already been declared`);
          }
      }
      func(name, value) {
          const variable = this.context[name];
          if (!variable || variable.kind === 'var') {
              this.context[name] = new Var('var', value);
          }
          else {
              throw new SyntaxError(`Identifier '${name}' has already been declared`);
          }
      }
  }

  function Identifier(node, scope, options = {}) {
      const { getVar = false, throwErr = true } = options;
      if (node.name === 'undefined') {
          return undefined;
      }
      const variable = scope.find(node.name);
      if (variable) {
          if (getVar) {
              return variable;
          }
          else {
              const value = variable.get();
              if (value === DEADZONE) {
                  throw new ReferenceError(`${node.name} is not defined`);
              }
              else {
                  return value;
              }
          }
      }
      else if (throwErr) {
          throw new ReferenceError(`${node.name} is not defined`);
      }
      else {
          return undefined;
      }
  }

  var identifier = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Identifier: Identifier
  });

  function Literal(node, scope) {
      return node.value;
  }

  var literal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Literal: Literal
  });

  function ThisExpression(node, scope) {
      const superCall = scope.find(SUPERCALL);
      if (superCall && !superCall.get()) {
          throw new ReferenceError('Must call super constructor in derived class '
              + 'before accessing \'this\' or returning from derived constructor');
      }
      else {
          return scope.find('this').get();
      }
  }
  function ArrayExpression(node, scope) {
      let results = [];
      for (let i = 0; i < node.elements.length; i++) {
          const item = node.elements[i];
          if (item.type === 'SpreadElement') {
              results = results.concat(SpreadElement(item, scope));
          }
          else {
              results.push(evaluate(item, scope));
          }
      }
      return results;
  }
  function ObjectExpression(node, scope) {
      const object = {};
      for (let i = 0; i < node.properties.length; i++) {
          const property = node.properties[i];
          if (property.type === 'SpreadElement') {
              assign(object, SpreadElement(property, scope));
          }
          else {
              let key;
              const propKey = property.key;
              if (property.computed) {
                  key = evaluate(propKey, scope);
              }
              else {
                  if (propKey.type === 'Identifier') {
                      key = propKey.name;
                  }
                  else {
                      key = '' + (Literal(propKey));
                  }
              }
              const value = evaluate(property.value, scope);
              const propKind = property.kind;
              if (propKind === 'init') {
                  object[key] = value;
              }
              else if (propKind === 'get') {
                  const oriDptor = getDptor(object, key);
                  define(object, key, {
                      get: value,
                      set: oriDptor && oriDptor.set,
                      enumerable: true,
                      configurable: true
                  });
              }
              else {
                  const oriDptor = getDptor(object, key);
                  define(object, key, {
                      get: oriDptor && oriDptor.get,
                      set: value,
                      enumerable: true,
                      configurable: true
                  });
              }
          }
      }
      return object;
  }
  function FunctionExpression(node, scope) {
      if (node.id && node.id.name) {
          const tmpScope = new Scope(scope);
          const func = createFunc(node, tmpScope);
          tmpScope.const(node.id.name, func);
          return func;
      }
      else {
          return createFunc(node, scope);
      }
  }
  function UnaryExpression(node, scope) {
      const arg = node.argument;
      switch (node.operator) {
          case '+':
              return +(evaluate(arg, scope));
          case '-':
              return -(evaluate(arg, scope));
          case '!':
              return !(evaluate(arg, scope));
          case '~':
              return ~(evaluate(arg, scope));
          case 'void':
              return void (evaluate(arg, scope));
          case 'typeof':
              if (arg.type === 'Identifier') {
                  return typeof (Identifier(arg, scope, { throwErr: false }));
              }
              else {
                  return typeof (evaluate(arg, scope));
              }
          case 'delete':
              if (arg.type === 'MemberExpression') {
                  const variable = MemberExpression(arg, scope, { getVar: true });
                  return variable.del();
              }
              else if (arg.type === 'Identifier') {
                  throw new SyntaxError('Delete of an unqualified identifier in strict mode');
              }
              else {
                  evaluate(arg, scope);
                  return true;
              }
          default:
              throw new SyntaxError(`Unexpected token ${node.operator}`);
      }
  }
  function UpdateExpression(node, scope) {
      const arg = node.argument;
      let variable;
      if (arg.type === 'Identifier') {
          variable = Identifier(arg, scope, { getVar: true });
      }
      else if (arg.type === 'MemberExpression') {
          variable = MemberExpression(arg, scope, { getVar: true });
      }
      else {
          throw new SyntaxError('Unexpected token');
      }
      const value = variable.get();
      if (node.operator === '++') {
          variable.set(value + 1);
          return node.prefix ? variable.get() : value;
      }
      else if (node.operator === '--') {
          variable.set(value - 1);
          return node.prefix ? variable.get() : value;
      }
      else {
          throw new SyntaxError(`Unexpected token ${node.operator}`);
      }
  }
  function BinaryExpression(node, scope) {
      let left = evaluate(node.left, scope);
      let right = evaluate(node.right, scope);
      if (scope.null2Zero) {
          if (needNull2Zero(node.left, scope)) {
              left = left !== null && left !== void 0 ? left : 0;
          }
          if (needNull2Zero(node.right, scope)) {
              right = right !== null && right !== void 0 ? right : 0;
          }
      }
      left = left === null ? undefined : left;
      right = right === null ? undefined : right;
      const handle = scope.findOperator(node.operator);
      if (handle) {
          return handle(left, right, node, scope);
      }
      switch (node.operator) {
          case '==':
              return left == right;
          case '!=':
              return left != right;
          case '===':
              return left === right;
          case '!==':
              return left !== right;
          case '<':
              return left < right;
          case '<=':
              return left <= right;
          case '>':
              return left > right;
          case '>=':
              return left >= right;
          case '<<':
              return left << right;
          case '>>':
              return left >> right;
          case '>>>':
              return left >>> right;
          case '+':
              return left + right;
          case '-':
              return left - right;
          case '*':
              return left * right;
          case '**':
              return Math.pow(left, right);
          case '/':
              return left / right;
          case '%':
              return left % right;
          case '|':
              return left | right;
          case '^':
              return left ^ right;
          case '&':
              return left & right;
          case 'in':
              return left in right;
          case 'instanceof':
              return left instanceof right;
          default:
              throw new SyntaxError(`Unexpected token ${node.operator}`);
      }
  }
  function AssignmentExpression(node, scope) {
      let value = evaluate(node.right, scope);
      if (needNull2Zero(node.right, scope)) {
          value = value !== null && value !== void 0 ? value : 0;
      }
      value = value !== value ? null : value;
      const left = node.left;
      let variable;
      if (left.type === 'Identifier') {
          variable = Identifier(left, scope, { getVar: true, throwErr: false });
          if (!variable) {
              const win = scope.global().find('window').get();
              variable = new Prop(win, left.name);
          }
      }
      else if (left.type === 'MemberExpression') {
          variable = MemberExpression(left, scope, { getVar: true });
      }
      else {
          return pattern$1(left, scope, { feed: value });
      }
      switch (node.operator) {
          case '=':
              variable.set(value);
              return variable.get();
          case '+=':
              variable.set(variable.get() + value);
              return variable.get();
          case '-=':
              variable.set(variable.get() - value);
              return variable.get();
          case '*=':
              variable.set(variable.get() * value);
              return variable.get();
          case '/=':
              variable.set(variable.get() / value);
              return variable.get();
          case '%=':
              variable.set(variable.get() % value);
              return variable.get();
          case '**=':
              variable.set(Math.pow(variable.get(), value));
              return variable.get();
          case '<<=':
              variable.set(variable.get() << value);
              return variable.get();
          case '>>=':
              variable.set(variable.get() >> value);
              return variable.get();
          case '>>>=':
              variable.set(variable.get() >>> value);
              return variable.get();
          case '|=':
              variable.set(variable.get() | value);
              return variable.get();
          case '^=':
              variable.set(variable.get() ^ value);
              return variable.get();
          case '&=':
              variable.set(variable.get() & value);
              return variable.get();
          default:
              throw new SyntaxError(`Unexpected token ${node.operator}`);
      }
  }
  function LogicalExpression(node, scope) {
      switch (node.operator) {
          case '||':
              return (evaluate(node.left, scope)) || (evaluate(node.right, scope));
          case '&&':
              return (evaluate(node.left, scope)) && (evaluate(node.right, scope));
          default:
              throw new SyntaxError(`Unexpected token ${node.operator}`);
      }
  }
  function MemberExpression(node, scope, options = {}) {
      const { getObj = false, getVar = false } = options;
      let object;
      if (node.object.type === 'Super') {
          object = Super(node.object, scope, { getProto: true });
      }
      else {
          object = evaluate(node.object, scope);
      }
      if (getObj)
          return object;
      let key;
      if (node.computed) {
          key = evaluate(node.property, scope);
      }
      else {
          key = node.property.name;
      }
      if (getVar) {
          const setter = getSetter(object, key);
          if (node.object.type === 'Super' && setter) {
              const thisObject = scope.find('this').get();
              const privateKey = createSymbol(key);
              define(thisObject, privateKey, { set: setter });
              return new Prop(thisObject, privateKey);
          }
          else {
              return new Prop(object, key);
          }
      }
      else {
          const getter = getGetter(object, key);
          if (node.object.type === 'Super' && getter) {
              const thisObject = scope.find('this').get();
              return getter.call(thisObject);
          }
          else {
              if (scope.nullSafe && (object === null || object === undefined)) {
                  return object;
              }
              return object[key];
          }
      }
  }
  function ConditionalExpression(node, scope) {
      return (evaluate(node.test, scope))
          ? (evaluate(node.consequent, scope))
          : (evaluate(node.alternate, scope));
  }
  function CallExpression(node, scope) {
      let func;
      let object;
      if (node.callee.type === 'MemberExpression') {
          object = MemberExpression(node.callee, scope, { getObj: true });
          let key;
          if (node.callee.computed) {
              key = evaluate(node.callee.property, scope);
          }
          else {
              key = node.callee.property.name;
          }
          if (node.callee.object.type === 'Super') {
              const thisObject = scope.find('this').get();
              func = object[key].bind(thisObject);
          }
          else {
              func = object[key];
          }
          if (typeof func !== 'function') {
              throw new TypeError(`${key} is not a function`);
          }
          else if (func[CLSCTOR]) {
              throw new TypeError(`Class constructor ${key} cannot be invoked without 'new'`);
          }
      }
      else {
          object = scope.find('this').get();
          func = evaluate(node.callee, scope);
          if (typeof func !== 'function' || node.callee.type !== 'Super' && func[CLSCTOR]) {
              let name;
              if (node.callee.type === 'Identifier') {
                  name = node.callee.name;
              }
              else {
                  try {
                      name = JSON.stringify(func);
                  }
                  catch (err) {
                      name = '' + func;
                  }
              }
              if (typeof func !== 'function') {
                  throw new TypeError(`${name} is not a function`);
              }
              else {
                  throw new TypeError(`Class constructor ${name} cannot be invoked without 'new'`);
              }
          }
      }
      let args = [];
      for (let i = 0; i < node.arguments.length; i++) {
          const arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              args = args.concat(SpreadElement(arg, scope));
          }
          else {
              let param = evaluate(arg, scope);
              if (needNull2Zero(arg, scope) && FunctionArgType(func.name, i, scope)) {
                  param = param !== null && param !== void 0 ? param : 0;
              }
              args.push(param);
          }
      }
      if (node.callee.type === 'Super') {
          const superCall = scope.find(SUPERCALL);
          if (superCall.get()) {
              throw new ReferenceError('Super constructor may only be called once');
          }
          else {
              scope.find(SUPERCALL).set(true);
          }
      }
      if (object && object[WINDOW] && func.toString().indexOf('[native code]') !== -1) {
          return func.apply(object[WINDOW], args);
      }
      return func.apply(object, args);
  }
  function NewExpression(node, scope) {
      const constructor = evaluate(node.callee, scope);
      if (typeof constructor !== 'function') {
          let name;
          if (node.callee.type === 'Identifier') {
              name = node.callee.name;
          }
          else {
              try {
                  name = JSON.stringify(constructor);
              }
              catch (err) {
                  name = '' + constructor;
              }
          }
          throw new TypeError(`${name} is not a constructor`);
      }
      else if (constructor[NOCTOR]) {
          throw new TypeError(`${constructor.name || '(intermediate value)'} is not a constructor`);
      }
      let args = [];
      for (let i = 0; i < node.arguments.length; i++) {
          const arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              args = args.concat(SpreadElement(arg, scope));
          }
          else {
              args.push(evaluate(arg, scope));
          }
      }
      return new constructor(...args);
  }
  function MetaProperty(node, scope) {
      return scope.find(NEWTARGET).get();
  }
  function SequenceExpression(node, scope) {
      let result;
      for (let i = 0; i < node.expressions.length; i++) {
          result = evaluate(node.expressions[i], scope);
      }
      return result;
  }
  function ArrowFunctionExpression(node, scope) {
      return createFunc(node, scope);
  }
  function TemplateLiteral(node, scope) {
      const quasis = node.quasis.slice();
      const expressions = node.expressions.slice();
      let result = '';
      let temEl;
      let expr;
      while (temEl = quasis.shift()) {
          result += TemplateElement(temEl);
          expr = expressions.shift();
          if (expr) {
              result += evaluate(expr, scope);
          }
      }
      return result;
  }
  function TaggedTemplateExpression(node, scope) {
      const tagFunc = evaluate(node.tag, scope);
      const quasis = node.quasi.quasis;
      const str = quasis.map(v => v.value.cooked);
      const raw = quasis.map(v => v.value.raw);
      define(str, 'raw', {
          value: freeze(raw)
      });
      const expressions = node.quasi.expressions;
      const args = [];
      if (expressions) {
          for (let i = 0; i < expressions.length; i++) {
              args.push(evaluate(expressions[i], scope));
          }
      }
      return tagFunc(freeze(str), ...args);
  }
  function TemplateElement(node, scope) {
      return node.value.raw;
  }
  function ClassExpression(node, scope) {
      if (node.id && node.id.name) {
          const tmpScope = new Scope(scope);
          const klass = createClass(node, tmpScope);
          tmpScope.const(node.id.name, klass);
          return klass;
      }
      else {
          return createClass(node, scope);
      }
  }
  function Super(node, scope, options = {}) {
      const { getProto = false } = options;
      const superClass = scope.find(SUPER).get();
      return getProto ? superClass.prototype : superClass;
  }
  function SpreadElement(node, scope) {
      return evaluate(node.argument, scope);
  }

  var expression = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ThisExpression: ThisExpression,
    ArrayExpression: ArrayExpression,
    ObjectExpression: ObjectExpression,
    FunctionExpression: FunctionExpression,
    UnaryExpression: UnaryExpression,
    UpdateExpression: UpdateExpression,
    BinaryExpression: BinaryExpression,
    AssignmentExpression: AssignmentExpression,
    LogicalExpression: LogicalExpression,
    MemberExpression: MemberExpression,
    ConditionalExpression: ConditionalExpression,
    CallExpression: CallExpression,
    NewExpression: NewExpression,
    MetaProperty: MetaProperty,
    SequenceExpression: SequenceExpression,
    ArrowFunctionExpression: ArrowFunctionExpression,
    TemplateLiteral: TemplateLiteral,
    TaggedTemplateExpression: TaggedTemplateExpression,
    TemplateElement: TemplateElement,
    ClassExpression: ClassExpression,
    Super: Super,
    SpreadElement: SpreadElement
  });

  function ExpressionStatement(node, scope) {
      evaluate(node.expression, scope);
  }
  function BlockStatement(block, scope, options = {}) {
      const { invasived = false, hoisted = false, } = options;
      const subScope = invasived ? scope : new Scope(scope);
      if (!hoisted) {
          hoist(block, subScope, { onlyBlock: true });
      }
      for (let i = 0; i < block.body.length; i++) {
          const result = evaluate(block.body[i], subScope);
          if (result === BREAK || result === CONTINUE || result === RETURN) {
              return result;
          }
      }
  }
  function EmptyStatement() {
  }
  function DebuggerStatement() {
      debugger;
  }
  function ReturnStatement(node, scope) {
      RETURN.RES = node.argument ? (evaluate(node.argument, scope)) : undefined;
      return RETURN;
  }
  function BreakStatement() {
      return BREAK;
  }
  function ContinueStatement() {
      return CONTINUE;
  }
  function IfStatement(node, scope) {
      if (evaluate(node.test, scope)) {
          return evaluate(node.consequent, scope);
      }
      else {
          return evaluate(node.alternate, scope);
      }
  }
  function SwitchStatement(node, scope) {
      const discriminant = evaluate(node.discriminant, scope);
      let matched = false;
      for (let i = 0; i < node.cases.length; i++) {
          const eachCase = node.cases[i];
          if (!matched
              && (!eachCase.test
                  || (evaluate(eachCase.test, scope)) === discriminant)) {
              matched = true;
          }
          if (matched) {
              const result = SwitchCase(eachCase, scope);
              if (result === BREAK) {
                  break;
              }
              if (result === CONTINUE || result === RETURN) {
                  return result;
              }
          }
      }
  }
  function SwitchCase(node, scope) {
      for (let i = 0; i < node.consequent.length; i++) {
          const result = evaluate(node.consequent[i], scope);
          if (result === BREAK || result === CONTINUE || result === RETURN) {
              return result;
          }
      }
  }
  function ThrowStatement(node, scope) {
      throw evaluate(node.argument, scope);
  }
  function TryStatement(node, scope) {
      try {
          return BlockStatement(node.block, scope);
      }
      catch (err) {
          if (node.handler) {
              const subScope = new Scope(scope);
              const param = node.handler.param;
              if (param) {
                  if (param.type === 'Identifier') {
                      const name = param.name;
                      subScope.var(name, err);
                  }
                  else {
                      pattern$1(param, scope, { feed: err });
                  }
              }
              return CatchClause(node.handler, subScope);
          }
          else {
              throw err;
          }
      }
      finally {
          if (node.finalizer) {
              const result = BlockStatement(node.finalizer, scope);
              if (result === BREAK || result === CONTINUE || result === RETURN) {
                  return result;
              }
          }
      }
  }
  function CatchClause(node, scope) {
      return BlockStatement(node.body, scope, { invasived: true });
  }
  function WhileStatement(node, scope) {
      while (evaluate(node.test, scope)) {
          const result = evaluate(node.body, scope);
          if (result === BREAK) {
              break;
          }
          else if (result === CONTINUE) {
              continue;
          }
          else if (result === RETURN) {
              return result;
          }
      }
  }
  function DoWhileStatement(node, scope) {
      do {
          const result = evaluate(node.body, scope);
          if (result === BREAK) {
              break;
          }
          else if (result === CONTINUE) {
              continue;
          }
          else if (result === RETURN) {
              return result;
          }
      } while (evaluate(node.test, scope));
  }
  function ForStatement(node, scope) {
      const forScope = new Scope(scope);
      for (evaluate(node.init, forScope); node.test ? (evaluate(node.test, forScope)) : true; evaluate(node.update, forScope)) {
          const subScope = new Scope(forScope);
          let result;
          if (node.body.type === 'BlockStatement') {
              result = BlockStatement(node.body, subScope, { invasived: true });
          }
          else {
              result = evaluate(node.body, subScope);
          }
          if (result === BREAK) {
              break;
          }
          else if (result === CONTINUE) {
              continue;
          }
          else if (result === RETURN) {
              return result;
          }
      }
  }
  function ForInStatement(node, scope) {
      for (const value in evaluate(node.right, scope)) {
          const result = ForXHandler(node, scope, { value });
          if (result === BREAK) {
              break;
          }
          else if (result === CONTINUE) {
              continue;
          }
          else if (result === RETURN) {
              return result;
          }
      }
  }
  function ForOfStatement(node, scope) {
      const right = evaluate(node.right, scope);
      for (const value of right) {
          const result = ForXHandler(node, scope, { value });
          if (result === BREAK) {
              break;
          }
          else if (result === CONTINUE) {
              continue;
          }
          else if (result === RETURN) {
              return result;
          }
      }
  }

  var statement = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ExpressionStatement: ExpressionStatement,
    BlockStatement: BlockStatement,
    EmptyStatement: EmptyStatement,
    DebuggerStatement: DebuggerStatement,
    ReturnStatement: ReturnStatement,
    BreakStatement: BreakStatement,
    ContinueStatement: ContinueStatement,
    IfStatement: IfStatement,
    SwitchStatement: SwitchStatement,
    SwitchCase: SwitchCase,
    ThrowStatement: ThrowStatement,
    TryStatement: TryStatement,
    CatchClause: CatchClause,
    WhileStatement: WhileStatement,
    DoWhileStatement: DoWhileStatement,
    ForStatement: ForStatement,
    ForInStatement: ForInStatement,
    ForOfStatement: ForOfStatement
  });

  function ObjectPattern(node, scope, options = {}) {
      const { kind = 'var', hoist = false, onlyBlock = false, feed = {} } = options;
      const fedKeys = [];
      for (let i = 0; i < node.properties.length; i++) {
          const property = node.properties[i];
          if (hoist) {
              if (onlyBlock || kind === 'var') {
                  if (property.type === 'Property') {
                      const value = property.value;
                      if (value.type === 'Identifier') {
                          scope[kind](value.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
                      }
                      else {
                          pattern$1(value, scope, { kind, hoist, onlyBlock });
                      }
                  }
                  else {
                      RestElement(property, scope, { kind, hoist, onlyBlock });
                  }
              }
          }
          else if (property.type === 'Property') {
              let key;
              if (property.computed) {
                  key = evaluate(property.key, scope);
              }
              else {
                  key = property.key.name;
              }
              fedKeys.push(key);
              const value = property.value;
              if (value.type === 'Identifier') {
                  scope[kind](value.name, feed[key]);
              }
              else {
                  pattern$1(value, scope, { kind, feed: feed[key] });
              }
          }
          else {
              const rest = assign({}, feed);
              for (let i = 0; i < fedKeys.length; i++)
                  delete rest[fedKeys[i]];
              RestElement(property, scope, { kind, feed: rest });
          }
      }
  }
  function ArrayPattern(node, scope, options = {}) {
      const { kind, hoist = false, onlyBlock = false, feed = [] } = options;
      const result = [];
      for (let i = 0; i < node.elements.length; i++) {
          const element = node.elements[i];
          if (!element)
              continue;
          if (hoist) {
              if (onlyBlock || kind === 'var') {
                  if (element.type === 'Identifier') {
                      scope[kind](element.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
                  }
                  else {
                      pattern$1(element, scope, { kind, hoist, onlyBlock });
                  }
              }
          }
          else if (element.type === 'Identifier') {
              if (kind) {
                  scope[kind](element.name, feed[i]);
              }
              else {
                  const variable = Identifier(element, scope, { getVar: true });
                  variable.set(feed[i]);
                  result.push(variable.get());
              }
          }
          else if (element.type === 'RestElement') {
              RestElement(element, scope, { kind, feed: feed.slice(i) });
          }
          else {
              pattern$1(element, scope, { kind, feed: feed[i] });
          }
      }
      if (result.length) {
          return result;
      }
  }
  function RestElement(node, scope, options = {}) {
      const { kind, hoist = false, onlyBlock = false, feed = [] } = options;
      const arg = node.argument;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (arg.type === 'Identifier') {
                  scope[kind](arg.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(arg, scope, { kind, hoist, onlyBlock });
              }
          }
      }
      else if (arg.type === 'Identifier') {
          if (kind) {
              scope[kind](arg.name, feed);
          }
          else {
              const variable = Identifier(arg, scope, { getVar: true });
              variable.set(feed);
          }
      }
      else {
          pattern$1(arg, scope, { kind, feed });
      }
  }
  function AssignmentPattern(node, scope, options = {}) {
      const { kind = 'var', hoist = false, onlyBlock = false, feed = evaluate(node.right, scope) } = options;
      const left = node.left;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (left.type === 'Identifier') {
                  scope[kind](left.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(left, scope, { kind, hoist, onlyBlock });
              }
          }
      }
      else if (left.type === 'Identifier') {
          scope[kind](left.name, feed);
      }
      else {
          pattern$1(left, scope, { kind, feed });
      }
  }

  var pattern = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ObjectPattern: ObjectPattern,
    ArrayPattern: ArrayPattern,
    RestElement: RestElement,
    AssignmentPattern: AssignmentPattern
  });

  function Program(program, scope) {
      for (let i = 0; i < program.body.length; i++) {
          evaluate(program.body[i], scope);
      }
  }

  var program = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Program: Program
  });

  let evaluateOps;
  function evaluate(node, scope) {
      if (!node)
          return;
      if (!evaluateOps) {
          evaluateOps = assign({}, declaration, expression, identifier, statement, literal, pattern, program);
      }
      const handler = evaluateOps[node.type];
      if (handler) {
          return handler(node, scope);
      }
      else {
          throw new Error(`${node.type} isn't implemented`);
      }
  }

  function FunctionDeclaration(node, scope) {
      scope.func(node.id.name, createFunc(node, scope));
  }
  function VariableDeclaration(node, scope, options = {}) {
      for (let i = 0; i < node.declarations.length; i++) {
          VariableDeclarator(node.declarations[i], scope, assign({ kind: node.kind }, options));
      }
  }
  function VariableDeclarator(node, scope, options = {}) {
      const { kind = 'var', hoist = false, onlyBlock = false, feed } = options;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (node.id.type === 'Identifier') {
                  scope[kind](node.id.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(node.id, scope, { kind, hoist, onlyBlock });
              }
          }
      }
      else {
          const hasFeed = 'feed' in options;
          const value = hasFeed ? feed : evaluate(node.init, scope);
          if (node.id.type === 'Identifier') {
              const name = node.id.name;
              if (kind === 'var' && !node.init && !hasFeed) {
                  scope.var(name, NOINIT);
              }
              else {
                  scope[kind](name, value);
              }
              if (node.init
                  && ['ClassExpression', 'FunctionExpression', 'ArrowFunctionExpression']
                      .indexOf(node.init.type) !== -1
                  && !value.name) {
                  define(value, 'name', {
                      value: name,
                      configurable: true
                  });
              }
          }
          else {
              pattern$1(node.id, scope, { kind, feed: value });
          }
      }
  }
  function ClassDeclaration(node, scope) {
      scope.func(node.id.name, createClass(node, scope));
  }
  function ClassBody(node, scope, options = {}) {
      const { klass, superClass } = options;
      for (let i = 0; i < node.body.length; i++) {
          MethodDefinition(node.body[i], scope, { klass, superClass });
      }
  }
  function MethodDefinition(node, scope, options = {}) {
      const { klass, superClass } = options;
      let key;
      if (node.computed) {
          key = evaluate(node.key, scope);
      }
      else if (node.key.type === 'Identifier') {
          key = node.key.name;
      }
      else {
          throw new SyntaxError('Unexpected token');
      }
      const obj = node.static ? klass : klass.prototype;
      const value = createFunc(node.value, scope, { superClass });
      switch (node.kind) {
          case 'constructor':
              break;
          case 'method':
              define(obj, key, {
                  value,
                  writable: true,
                  configurable: true,
              });
              break;
          case 'get': {
              const oriDptor = getDptor(obj, key);
              define(obj, key, {
                  get: value,
                  set: oriDptor && oriDptor.set,
                  configurable: true,
              });
              break;
          }
          case 'set': {
              const oriDptor = getDptor(obj, key);
              define(obj, key, {
                  get: oriDptor && oriDptor.get,
                  set: value,
                  configurable: true,
              });
              break;
          }
          default:
              throw new SyntaxError('Unexpected token');
      }
  }

  function hoist(block, scope, options = {}) {
      const { onlyBlock = false } = options;
      const funcDclrList = [];
      const funcDclrIdxs = [];
      for (let i = 0; i < block.body.length; i++) {
          const statement = block.body[i];
          if (statement.type === 'FunctionDeclaration') {
              funcDclrList.push(statement);
              funcDclrIdxs.push(i);
          }
          else if (statement.type === 'VariableDeclaration'
              && ['const', 'let'].indexOf(statement.kind) !== -1) {
              VariableDeclaration(statement, scope, { hoist: true, onlyBlock: true });
          }
          else if (!onlyBlock) {
              hoistVarRecursion(statement, scope);
          }
      }
      if (funcDclrIdxs.length) {
          for (let i = funcDclrIdxs.length - 1; i > -1; i--) {
              block.body.splice(funcDclrIdxs[i], 1);
          }
          block.body = funcDclrList.concat(block.body);
      }
  }
  function hoistVarRecursion(statement, scope) {
      switch (statement.type) {
          case 'VariableDeclaration':
              VariableDeclaration(statement, scope, { hoist: true });
              break;
          case 'ForInStatement':
          case 'ForOfStatement':
              if (statement.left.type === 'VariableDeclaration') {
                  VariableDeclaration(statement.left, scope, { hoist: true });
              }
          case 'ForStatement':
              if (statement.type === 'ForStatement' && statement.init.type === 'VariableDeclaration') {
                  VariableDeclaration(statement.init, scope, { hoist: true });
              }
          case 'WhileStatement':
          case 'DoWhileStatement':
              hoistVarRecursion(statement.body, scope);
              break;
          case 'IfStatement':
              hoistVarRecursion(statement.consequent, scope);
              if (statement.alternate) {
                  hoistVarRecursion(statement.alternate, scope);
              }
              break;
          case 'BlockStatement':
              for (let i = 0; i < statement.body.length; i++) {
                  hoistVarRecursion(statement.body[i], scope);
              }
              break;
          case 'SwitchStatement':
              for (let i = 0; i < statement.cases.length; i++) {
                  for (let j = 0; j < statement.cases[i].consequent.length; j++) {
                      hoistVarRecursion(statement.cases[i].consequent[j], scope);
                  }
              }
              break;
          case 'TryStatement': {
              const tryBlock = statement.block.body;
              for (let i = 0; i < tryBlock.length; i++) {
                  hoistVarRecursion(tryBlock[i], scope);
              }
              const catchBlock = statement.handler && statement.handler.body.body;
              if (catchBlock) {
                  for (let i = 0; i < catchBlock.length; i++) {
                      hoistVarRecursion(catchBlock[i], scope);
                  }
              }
              const finalBlock = statement.finalizer && statement.finalizer.body;
              if (finalBlock) {
                  for (let i = 0; i < finalBlock.length; i++) {
                      hoistVarRecursion(finalBlock[i], scope);
                  }
              }
              break;
          }
      }
  }
  function pattern$1(node, scope, options = {}) {
      switch (node.type) {
          case 'ObjectPattern':
              return ObjectPattern(node, scope, options);
          case 'ArrayPattern':
              return ArrayPattern(node, scope, options);
          case 'RestElement':
              return RestElement(node, scope, options);
          case 'AssignmentPattern':
              return AssignmentPattern(node, scope, options);
          default:
              throw new SyntaxError('Unexpected token');
      }
  }
  function createFunc(node, scope, options = {}) {
      if (!node.generator && !node.async) {
          return createFunc(node, scope, options);
      }
      const { superClass, isCtor } = options;
      const params = node.params;
      const tmpFunc = function (...args) {
          const subScope = new Scope(scope, true);
          if (node.type !== 'ArrowFunctionExpression') {
              subScope.const('this', this);
              subScope.let('arguments', arguments);
              subScope.const(NEWTARGET, new.target);
              if (superClass) {
                  subScope.const(SUPER, superClass);
                  if (isCtor)
                      subScope.let(SUPERCALL, false);
              }
          }
          for (let i = 0; i < params.length; i++) {
              const param = params[i];
              if (param.type === 'Identifier') {
                  subScope.var(param.name, args[i]);
              }
              else if (param.type === 'RestElement') {
                  RestElement(param, subScope, { kind: 'var', feed: args.slice(i) });
              }
              else {
                  pattern$1(param, subScope, { feed: args[i] });
              }
          }
          let result;
          if (node.body.type === 'BlockStatement') {
              hoist(node.body, subScope);
              result = BlockStatement(node.body, subScope, {
                  invasived: true,
                  hoisted: true
              });
          }
          else {
              result = evaluate(node.body, subScope);
              if (node.type === 'ArrowFunctionExpression') {
                  RETURN.RES = result;
                  result = RETURN;
              }
          }
          if (result === RETURN) {
              return result.RES;
          }
      };
      let func = tmpFunc;
      if (node.type === 'ArrowFunctionExpression') {
          define(func, NOCTOR, { value: true });
      }
      define(func, 'name', {
          value: node.id
              && node.id.name
              || '',
          configurable: true
      });
      define(func, 'length', {
          value: params.length,
          configurable: true
      });
      return func;
  }
  function createClass(node, scope) {
      const superClass = evaluate(node.superClass, scope);
      let klass = function () {
          if (superClass) {
              superClass.apply(this);
          }
      };
      const methodBody = node.body.body;
      for (let i = 0; i < methodBody.length; i++) {
          const method = methodBody[i];
          if (method.kind === 'constructor') {
              klass = createFunc(method.value, scope, { superClass, isCtor: true });
              break;
          }
      }
      if (superClass) {
          inherits(klass, superClass);
      }
      ClassBody(node.body, scope, { klass, superClass });
      define(klass, CLSCTOR, { value: true });
      define(klass, 'name', {
          value: node.id && node.id.name || '',
          configurable: true
      });
      return klass;
  }
  function ForXHandler(node, scope, options) {
      const { value } = options;
      const left = node.left;
      const subScope = new Scope(scope);
      if (left.type === 'VariableDeclaration') {
          VariableDeclaration(left, subScope, { feed: value });
      }
      else if (left.type === 'Identifier') {
          const variable = Identifier(left, scope, { getVar: true });
          variable.set(value);
      }
      else {
          pattern$1(left, scope, { feed: value });
      }
      let result;
      if (node.body.type === 'BlockStatement') {
          result = BlockStatement(node.body, subScope, { invasived: true });
      }
      else {
          result = evaluate(node.body, subScope);
      }
      return result;
  }
  function needNull2Zero(node, scope) {
      return scope.null2Zero && node.type === 'MemberExpression' && MemberExpressionResultType(node, scope) == exports.TYPE.NUMBER;
  }
  function MemberExpressionResultType(node, scope) {
      const objectType = scope.objectType;
      const properties = [node.property];
      let curNode = node;
      while (curNode.object.type === 'MemberExpression') {
          curNode = curNode.object;
          properties.unshift(curNode.property);
      }
      return properties.reduce((pre, cur, index) => {
          return pre && pre[cur.name];
      }, objectType);
  }
  function FunctionArgType(name, argIndex, scope) {
      var _a, _b;
      const funcTypeMap = scope.funcTypeMap;
      return (_b = (_a = funcTypeMap[name]) === null || _a === void 0 ? void 0 : _a.argsType(argIndex)) !== null && _b !== void 0 ? _b : exports.TYPE.ANY;
  }

  (function (TYPE) {
      TYPE[TYPE["ANY"] = 0] = "ANY";
      TYPE[TYPE["STRING"] = 1] = "STRING";
      TYPE[TYPE["NUMBER"] = 2] = "NUMBER";
      TYPE[TYPE["BOOLEAN"] = 3] = "BOOLEAN";
      TYPE[TYPE["DATETIME"] = 4] = "DATETIME";
  })(exports.TYPE || (exports.TYPE = {}));
  class Sval {
      constructor(options = {}) {
          this.options = {};
          this.scope = new Scope(null, true);
          this.exports = {};
          let { ecmaVer = 9, sandBox = true, operatorHandle = [], nullSafe = false } = options;
          ecmaVer -= ecmaVer < 2015 ? 0 : 2009;
          if ([3, 5, 6, 7, 8, 9, 10].indexOf(ecmaVer) === -1) {
              throw new Error(`unsupported ecmaVer`);
          }
          this.options.ecmaVersion = ecmaVer;
          if (sandBox) {
              const win = createSandBox();
              this.scope.let('window', win);
              this.scope.let('this', win);
          }
          else {
              this.scope.let('window', globalObj);
              this.scope.let('this', globalObj);
          }
          this.scope.const('exports', this.exports = {});
          operatorHandle.forEach(item => this.scope.addOperator(item.name, item.handle));
          this.scope.nullSafe = nullSafe;
      }
      import(nameOrModules, mod) {
          if (typeof nameOrModules === 'string') {
              nameOrModules = { [nameOrModules]: mod };
          }
          if (typeof nameOrModules !== 'object')
              return;
          const names = getOwnNames(nameOrModules);
          for (let i = 0; i < names.length; i++) {
              const name = names[i];
              this.scope.var(name, nameOrModules[name]);
          }
      }
      parse(code, parser) {
          if (typeof parser === 'function') {
              return parser(code, assign({}, this.options));
          }
          return acorn.parse(code, this.options);
      }
      run(code, { null2Zero = false, funcTypeMap, objectType } = {}) {
          this.scope.null2Zero = null2Zero;
          this.scope.funcTypeMap = funcTypeMap;
          this.scope.objectType = objectType;
          const ast = typeof code === 'string' ? acorn.parse(code, this.options) : code;
          hoist(ast, this.scope);
          evaluate(ast, this.scope);
      }
  }
  Sval.version = version;

  exports.default = Sval;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
