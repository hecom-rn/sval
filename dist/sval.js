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

  var freeze = Object.freeze;
  var define = Object.defineProperty;
  var getDptor = Object.getOwnPropertyDescriptor;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
  }
  var getOwnNames = Object.getOwnPropertyNames;
  var setPrototypeOf = Object.setPrototypeOf;
  function setProto(obj, proto) {
      setPrototypeOf ? setPrototypeOf(obj, proto) : obj.__proto__ = proto;
  }
  var getPrototypeOf = Object.getPrototypeOf;
  function getProto(obj) {
      return getPrototypeOf ? getPrototypeOf(obj) : obj.__proto__;
  }
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  function getGetterOrSetter(method, obj, key) {
      while (obj) {
          var descriptor = getOwnPropertyDescriptor(obj, key);
          var value = typeof descriptor !== 'undefined'
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
  var create = Object.create;
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
      for (var i = 1; i < arguments.length; ++i) {
          var source = arguments[i];
          for (var key in source) {
              if (hasOwn(source, key)) {
                  target[key] = source[key];
              }
          }
      }
      return target;
  }
  var assign = Object.assign || _assign;
  var names = [];
  var globalObj = create(null);
  try {
      if (!window.Object)
          throw 0;
      names = getOwnNames(globalObj = window).filter(function (n) { return n !== 'webkitStorageInfo'; });
  }
  catch (err) {
      try {
          if (!global.Object)
              throw 0;
          names = getOwnNames(globalObj = global).filter(function (n) { return n !== 'GLOBAL' && n !== 'root'; });
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
  var win = create({});
  for (var i = 0; i < names.length; i++) {
      var name_1 = names[i];
      try {
          win[name_1] = globalObj[name_1];
      }
      catch (err) { }
  }
  var WINDOW = createSymbol('window');
  function createSandBox() {
      var _a;
      return assign(create((_a = {}, _a[WINDOW] = globalObj, _a)), win);
  }
  function createSymbol(key) {
      return key + Math.random().toString(36).substring(2);
  }

  var version = "0.4.8";

  var RETURN = { RES: undefined };
  var CONTINUE = createSymbol('continue');
  var BREAK = createSymbol('break');
  var SUPER = createSymbol('super');
  var SUPERCALL = createSymbol('supercall');
  var NOCTOR = createSymbol('noctor');
  var CLSCTOR = createSymbol('clsctor');
  var NEWTARGET = createSymbol('newtarget');
  var NOINIT = createSymbol('noinit');
  var DEADZONE = createSymbol('deadzone');

  var Var = (function () {
      function Var(kind, value) {
          this.kind = kind;
          this.value = value;
      }
      Var.prototype.get = function () {
          return this.value;
      };
      Var.prototype.set = function (value) {
          if (this.kind === 'const') {
              throw new TypeError('Assignment to constant variable');
          }
          else {
              return this.value = value;
          }
      };
      return Var;
  }());
  var Prop = (function () {
      function Prop(object, property) {
          this.object = object;
          this.property = property;
      }
      Prop.prototype.get = function () {
          return this.object[this.property];
      };
      Prop.prototype.set = function (value) {
          this.object[this.property] = value;
          return true;
      };
      Prop.prototype.del = function () {
          return delete this.object[this.property];
      };
      return Prop;
  }());

  var Scope = (function () {
      function Scope(parent, isolated) {
          if (parent === void 0) { parent = null; }
          if (isolated === void 0) { isolated = false; }
          this.context = create(null);
          this.operator = create(null);
          this.nullSafe = false;
          this.null2Zero = false;
          this.parent = parent;
          this.isolated = isolated;
      }
      Scope.prototype.global = function () {
          var scope = this;
          while (scope.parent) {
              scope = scope.parent;
          }
          return scope;
      };
      Scope.prototype.clone = function () {
          var cloneScope = new Scope(this.parent, this.isolated);
          for (var name_1 in this.context) {
              var variable = this.context[name_1];
              cloneScope[variable.kind](name_1, variable.get());
          }
          return cloneScope;
      };
      Scope.prototype.addOperator = function (operator, handle) {
          var handleFunc = this.operator[operator];
          if (!handleFunc) {
              this.operator[operator] = handle;
          }
          else {
              throw new SyntaxError("Operator '" + operator + "' has already been overloaded");
          }
      };
      Scope.prototype.findOperator = function (operator) {
          if (this.operator[operator]) {
              return this.operator[operator];
          }
          else if (this.parent) {
              return this.parent.findOperator(operator);
          }
      };
      Scope.prototype.find = function (name) {
          if (this.context[name]) {
              return this.context[name];
          }
          else if (this.parent) {
              return this.parent.find(name);
          }
          else {
              var win = this.global().find('window').get();
              if (name in win) {
                  return new Prop(win, name);
              }
              else {
                  return null;
              }
          }
      };
      Scope.prototype.var = function (name, value) {
          var scope = this;
          while (scope.parent && !scope.isolated) {
              scope = scope.parent;
          }
          var variable = scope.context[name];
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
                  throw new SyntaxError("Identifier '" + name + "' has already been declared");
              }
          }
          if (!scope.parent) {
              var win = scope.find('window').get();
              if (value !== NOINIT) {
                  define(win, name, { value: value, writable: true, enumerable: true });
              }
          }
      };
      Scope.prototype.let = function (name, value) {
          var variable = this.context[name];
          if (!variable || variable.get() === DEADZONE) {
              this.context[name] = new Var('let', value);
          }
          else {
              throw new SyntaxError("Identifier '" + name + "' has already been declared");
          }
      };
      Scope.prototype.const = function (name, value) {
          var variable = this.context[name];
          if (!variable || variable.get() === DEADZONE) {
              this.context[name] = new Var('const', value);
          }
          else {
              throw new SyntaxError("Identifier '" + name + "' has already been declared");
          }
      };
      Scope.prototype.func = function (name, value) {
          var variable = this.context[name];
          if (!variable || variable.kind === 'var') {
              this.context[name] = new Var('var', value);
          }
          else {
              throw new SyntaxError("Identifier '" + name + "' has already been declared");
          }
      };
      return Scope;
  }());

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
      if (m) return m.call(o);
      return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }

  function Identifier(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.getVar, getVar = _a === void 0 ? false : _a, _b = options.throwErr, throwErr = _b === void 0 ? true : _b;
      if (node.name === 'undefined') {
          return undefined;
      }
      var variable = scope.find(node.name);
      if (variable) {
          if (getVar) {
              return variable;
          }
          else {
              var value = variable.get();
              if (value === DEADZONE) {
                  throw new ReferenceError(node.name + " is not defined");
              }
              else {
                  return value;
              }
          }
      }
      else if (throwErr) {
          throw new ReferenceError(node.name + " is not defined");
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
      var superCall = scope.find(SUPERCALL);
      if (superCall && !superCall.get()) {
          throw new ReferenceError('Must call super constructor in derived class '
              + 'before accessing \'this\' or returning from derived constructor');
      }
      else {
          return scope.find('this').get();
      }
  }
  function ArrayExpression(node, scope) {
      var results = [];
      for (var i = 0; i < node.elements.length; i++) {
          var item = node.elements[i];
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
      var object = {};
      for (var i = 0; i < node.properties.length; i++) {
          var property = node.properties[i];
          if (property.type === 'SpreadElement') {
              assign(object, SpreadElement(property, scope));
          }
          else {
              var key = void 0;
              var propKey = property.key;
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
              var value = evaluate(property.value, scope);
              var propKind = property.kind;
              if (propKind === 'init') {
                  object[key] = value;
              }
              else if (propKind === 'get') {
                  var oriDptor = getDptor(object, key);
                  define(object, key, {
                      get: value,
                      set: oriDptor && oriDptor.set,
                      enumerable: true,
                      configurable: true
                  });
              }
              else {
                  var oriDptor = getDptor(object, key);
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
          var tmpScope = new Scope(scope);
          var func = createFunc(node, tmpScope);
          tmpScope.const(node.id.name, func);
          return func;
      }
      else {
          return createFunc(node, scope);
      }
  }
  function UnaryExpression(node, scope) {
      var arg = node.argument;
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
                  var variable = MemberExpression(arg, scope, { getVar: true });
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
              throw new SyntaxError("Unexpected token " + node.operator);
      }
  }
  function UpdateExpression(node, scope) {
      var arg = node.argument;
      var variable;
      if (arg.type === 'Identifier') {
          variable = Identifier(arg, scope, { getVar: true });
      }
      else if (arg.type === 'MemberExpression') {
          variable = MemberExpression(arg, scope, { getVar: true });
      }
      else {
          throw new SyntaxError('Unexpected token');
      }
      var value = variable.get();
      if (node.operator === '++') {
          variable.set(value + 1);
          return node.prefix ? variable.get() : value;
      }
      else if (node.operator === '--') {
          variable.set(value - 1);
          return node.prefix ? variable.get() : value;
      }
      else {
          throw new SyntaxError("Unexpected token " + node.operator);
      }
  }
  function BinaryExpression(node, scope) {
      var left = evaluate(node.left, scope);
      var right = evaluate(node.right, scope);
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
      var handle = scope.findOperator(node.operator);
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
              throw new SyntaxError("Unexpected token " + node.operator);
      }
  }
  function AssignmentExpression(node, scope) {
      var value = evaluate(node.right, scope);
      if (needNull2Zero(node.right, scope)) {
          value = value !== null && value !== void 0 ? value : 0;
      }
      value = value !== value ? null : value;
      var left = node.left;
      var variable;
      if (left.type === 'Identifier') {
          variable = Identifier(left, scope, { getVar: true, throwErr: false });
          if (!variable) {
              var win = scope.global().find('window').get();
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
              throw new SyntaxError("Unexpected token " + node.operator);
      }
  }
  function LogicalExpression(node, scope) {
      switch (node.operator) {
          case '||':
              return (evaluate(node.left, scope)) || (evaluate(node.right, scope));
          case '&&':
              return (evaluate(node.left, scope)) && (evaluate(node.right, scope));
          default:
              throw new SyntaxError("Unexpected token " + node.operator);
      }
  }
  function MemberExpression(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.getObj, getObj = _a === void 0 ? false : _a, _b = options.getVar, getVar = _b === void 0 ? false : _b;
      var object;
      if (node.object.type === 'Super') {
          object = Super(node.object, scope, { getProto: true });
      }
      else {
          object = evaluate(node.object, scope);
      }
      if (getObj)
          return object;
      var key;
      if (node.computed) {
          key = evaluate(node.property, scope);
      }
      else {
          key = node.property.name;
      }
      if (getVar) {
          var setter = getSetter(object, key);
          if (node.object.type === 'Super' && setter) {
              var thisObject = scope.find('this').get();
              var privateKey = createSymbol(key);
              define(thisObject, privateKey, { set: setter });
              return new Prop(thisObject, privateKey);
          }
          else {
              return new Prop(object, key);
          }
      }
      else {
          var getter = getGetter(object, key);
          if (node.object.type === 'Super' && getter) {
              var thisObject = scope.find('this').get();
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
      var func;
      var object;
      if (node.callee.type === 'MemberExpression') {
          object = MemberExpression(node.callee, scope, { getObj: true });
          var key = void 0;
          if (node.callee.computed) {
              key = evaluate(node.callee.property, scope);
          }
          else {
              key = node.callee.property.name;
          }
          if (node.callee.object.type === 'Super') {
              var thisObject = scope.find('this').get();
              func = object[key].bind(thisObject);
          }
          else {
              func = object[key];
          }
          if (typeof func !== 'function') {
              throw new TypeError(key + " is not a function");
          }
          else if (func[CLSCTOR]) {
              throw new TypeError("Class constructor " + key + " cannot be invoked without 'new'");
          }
      }
      else {
          object = scope.find('this').get();
          func = evaluate(node.callee, scope);
          if (typeof func !== 'function' || node.callee.type !== 'Super' && func[CLSCTOR]) {
              var name_1;
              if (node.callee.type === 'Identifier') {
                  name_1 = node.callee.name;
              }
              else {
                  try {
                      name_1 = JSON.stringify(func);
                  }
                  catch (err) {
                      name_1 = '' + func;
                  }
              }
              if (typeof func !== 'function') {
                  throw new TypeError(name_1 + " is not a function");
              }
              else {
                  throw new TypeError("Class constructor " + name_1 + " cannot be invoked without 'new'");
              }
          }
      }
      var args = [];
      for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              args = args.concat(SpreadElement(arg, scope));
          }
          else {
              var param = evaluate(arg, scope);
              if (needNull2Zero(arg, scope) && FunctionArgType(func.name, i, scope)) {
                  param = param !== null && param !== void 0 ? param : 0;
              }
              args.push(param);
          }
      }
      if (node.callee.type === 'Super') {
          var superCall = scope.find(SUPERCALL);
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
      var constructor = evaluate(node.callee, scope);
      if (typeof constructor !== 'function') {
          var name_2;
          if (node.callee.type === 'Identifier') {
              name_2 = node.callee.name;
          }
          else {
              try {
                  name_2 = JSON.stringify(constructor);
              }
              catch (err) {
                  name_2 = '' + constructor;
              }
          }
          throw new TypeError(name_2 + " is not a constructor");
      }
      else if (constructor[NOCTOR]) {
          throw new TypeError((constructor.name || '(intermediate value)') + " is not a constructor");
      }
      var args = [];
      for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              args = args.concat(SpreadElement(arg, scope));
          }
          else {
              args.push(evaluate(arg, scope));
          }
      }
      return new (constructor.bind.apply(constructor, __spread([void 0], args)))();
  }
  function MetaProperty(node, scope) {
      return scope.find(NEWTARGET).get();
  }
  function SequenceExpression(node, scope) {
      var result;
      for (var i = 0; i < node.expressions.length; i++) {
          result = evaluate(node.expressions[i], scope);
      }
      return result;
  }
  function ArrowFunctionExpression(node, scope) {
      return createFunc(node, scope);
  }
  function TemplateLiteral(node, scope) {
      var quasis = node.quasis.slice();
      var expressions = node.expressions.slice();
      var result = '';
      var temEl;
      var expr;
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
      var tagFunc = evaluate(node.tag, scope);
      var quasis = node.quasi.quasis;
      var str = quasis.map(function (v) { return v.value.cooked; });
      var raw = quasis.map(function (v) { return v.value.raw; });
      define(str, 'raw', {
          value: freeze(raw)
      });
      var expressions = node.quasi.expressions;
      var args = [];
      if (expressions) {
          for (var i = 0; i < expressions.length; i++) {
              args.push(evaluate(expressions[i], scope));
          }
      }
      return tagFunc.apply(void 0, __spread([freeze(str)], args));
  }
  function TemplateElement(node, scope) {
      return node.value.raw;
  }
  function ClassExpression(node, scope) {
      if (node.id && node.id.name) {
          var tmpScope = new Scope(scope);
          var klass = createClass(node, tmpScope);
          tmpScope.const(node.id.name, klass);
          return klass;
      }
      else {
          return createClass(node, scope);
      }
  }
  function Super(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.getProto, getProto = _a === void 0 ? false : _a;
      var superClass = scope.find(SUPER).get();
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
  function BlockStatement(block, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.invasived, invasived = _a === void 0 ? false : _a, _b = options.hoisted, hoisted = _b === void 0 ? false : _b;
      var subScope = invasived ? scope : new Scope(scope);
      if (!hoisted) {
          hoist(block, subScope, { onlyBlock: true });
      }
      for (var i = 0; i < block.body.length; i++) {
          var result = evaluate(block.body[i], subScope);
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
      var discriminant = evaluate(node.discriminant, scope);
      var matched = false;
      for (var i = 0; i < node.cases.length; i++) {
          var eachCase = node.cases[i];
          if (!matched
              && (!eachCase.test
                  || (evaluate(eachCase.test, scope)) === discriminant)) {
              matched = true;
          }
          if (matched) {
              var result = SwitchCase(eachCase, scope);
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
      for (var i = 0; i < node.consequent.length; i++) {
          var result = evaluate(node.consequent[i], scope);
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
              var subScope = new Scope(scope);
              var param = node.handler.param;
              if (param) {
                  if (param.type === 'Identifier') {
                      var name_1 = param.name;
                      subScope.var(name_1, err);
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
              var result = BlockStatement(node.finalizer, scope);
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
          var result = evaluate(node.body, scope);
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
          var result = evaluate(node.body, scope);
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
      var forScope = new Scope(scope);
      for (evaluate(node.init, forScope); node.test ? (evaluate(node.test, forScope)) : true; evaluate(node.update, forScope)) {
          var subScope = new Scope(forScope);
          var result = void 0;
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
      for (var value in evaluate(node.right, scope)) {
          var result = ForXHandler(node, scope, { value: value });
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
      var e_1, _a;
      var right = evaluate(node.right, scope);
      try {
          for (var right_1 = __values(right), right_1_1 = right_1.next(); !right_1_1.done; right_1_1 = right_1.next()) {
              var value = right_1_1.value;
              var result = ForXHandler(node, scope, { value: value });
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
      catch (e_1_1) { e_1 = { error: e_1_1 }; }
      finally {
          try {
              if (right_1_1 && !right_1_1.done && (_a = right_1.return)) _a.call(right_1);
          }
          finally { if (e_1) throw e_1.error; }
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

  function ObjectPattern(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.kind, kind = _a === void 0 ? 'var' : _a, _b = options.hoist, hoist = _b === void 0 ? false : _b, _c = options.onlyBlock, onlyBlock = _c === void 0 ? false : _c, _d = options.feed, feed = _d === void 0 ? {} : _d;
      var fedKeys = [];
      for (var i = 0; i < node.properties.length; i++) {
          var property = node.properties[i];
          if (hoist) {
              if (onlyBlock || kind === 'var') {
                  if (property.type === 'Property') {
                      var value = property.value;
                      if (value.type === 'Identifier') {
                          scope[kind](value.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
                      }
                      else {
                          pattern$1(value, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
                      }
                  }
                  else {
                      RestElement(property, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
                  }
              }
          }
          else if (property.type === 'Property') {
              var key = void 0;
              if (property.computed) {
                  key = evaluate(property.key, scope);
              }
              else {
                  key = property.key.name;
              }
              fedKeys.push(key);
              var value = property.value;
              if (value.type === 'Identifier') {
                  scope[kind](value.name, feed[key]);
              }
              else {
                  pattern$1(value, scope, { kind: kind, feed: feed[key] });
              }
          }
          else {
              var rest = assign({}, feed);
              for (var i_1 = 0; i_1 < fedKeys.length; i_1++)
                  delete rest[fedKeys[i_1]];
              RestElement(property, scope, { kind: kind, feed: rest });
          }
      }
  }
  function ArrayPattern(node, scope, options) {
      if (options === void 0) { options = {}; }
      var kind = options.kind, _a = options.hoist, hoist = _a === void 0 ? false : _a, _b = options.onlyBlock, onlyBlock = _b === void 0 ? false : _b, _c = options.feed, feed = _c === void 0 ? [] : _c;
      var result = [];
      for (var i = 0; i < node.elements.length; i++) {
          var element = node.elements[i];
          if (!element)
              continue;
          if (hoist) {
              if (onlyBlock || kind === 'var') {
                  if (element.type === 'Identifier') {
                      scope[kind](element.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
                  }
                  else {
                      pattern$1(element, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
                  }
              }
          }
          else if (element.type === 'Identifier') {
              if (kind) {
                  scope[kind](element.name, feed[i]);
              }
              else {
                  var variable = Identifier(element, scope, { getVar: true });
                  variable.set(feed[i]);
                  result.push(variable.get());
              }
          }
          else if (element.type === 'RestElement') {
              RestElement(element, scope, { kind: kind, feed: feed.slice(i) });
          }
          else {
              pattern$1(element, scope, { kind: kind, feed: feed[i] });
          }
      }
      if (result.length) {
          return result;
      }
  }
  function RestElement(node, scope, options) {
      if (options === void 0) { options = {}; }
      var kind = options.kind, _a = options.hoist, hoist = _a === void 0 ? false : _a, _b = options.onlyBlock, onlyBlock = _b === void 0 ? false : _b, _c = options.feed, feed = _c === void 0 ? [] : _c;
      var arg = node.argument;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (arg.type === 'Identifier') {
                  scope[kind](arg.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(arg, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
              }
          }
      }
      else if (arg.type === 'Identifier') {
          if (kind) {
              scope[kind](arg.name, feed);
          }
          else {
              var variable = Identifier(arg, scope, { getVar: true });
              variable.set(feed);
          }
      }
      else {
          pattern$1(arg, scope, { kind: kind, feed: feed });
      }
  }
  function AssignmentPattern(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.kind, kind = _a === void 0 ? 'var' : _a, _b = options.hoist, hoist = _b === void 0 ? false : _b, _c = options.onlyBlock, onlyBlock = _c === void 0 ? false : _c, _d = options.feed, feed = _d === void 0 ? evaluate(node.right, scope) : _d;
      var left = node.left;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (left.type === 'Identifier') {
                  scope[kind](left.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(left, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
              }
          }
      }
      else if (left.type === 'Identifier') {
          scope[kind](left.name, feed);
      }
      else {
          pattern$1(left, scope, { kind: kind, feed: feed });
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
      for (var i = 0; i < program.body.length; i++) {
          evaluate(program.body[i], scope);
      }
  }

  var program = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Program: Program
  });

  var evaluateOps;
  function evaluate(node, scope) {
      if (!node)
          return;
      if (!evaluateOps) {
          evaluateOps = assign({}, declaration, expression, identifier, statement, literal, pattern, program);
      }
      var handler = evaluateOps[node.type];
      if (handler) {
          return handler(node, scope);
      }
      else {
          throw new Error(node.type + " isn't implemented");
      }
  }

  function FunctionDeclaration(node, scope) {
      scope.func(node.id.name, createFunc(node, scope));
  }
  function VariableDeclaration(node, scope, options) {
      if (options === void 0) { options = {}; }
      for (var i = 0; i < node.declarations.length; i++) {
          VariableDeclarator(node.declarations[i], scope, assign({ kind: node.kind }, options));
      }
  }
  function VariableDeclarator(node, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.kind, kind = _a === void 0 ? 'var' : _a, _b = options.hoist, hoist = _b === void 0 ? false : _b, _c = options.onlyBlock, onlyBlock = _c === void 0 ? false : _c, feed = options.feed;
      if (hoist) {
          if (onlyBlock || kind === 'var') {
              if (node.id.type === 'Identifier') {
                  scope[kind](node.id.name, onlyBlock ? DEADZONE : kind === 'var' ? NOINIT : undefined);
              }
              else {
                  pattern$1(node.id, scope, { kind: kind, hoist: hoist, onlyBlock: onlyBlock });
              }
          }
      }
      else {
          var hasFeed = 'feed' in options;
          var value = hasFeed ? feed : evaluate(node.init, scope);
          if (node.id.type === 'Identifier') {
              var name_1 = node.id.name;
              if (kind === 'var' && !node.init && !hasFeed) {
                  scope.var(name_1, NOINIT);
              }
              else {
                  scope[kind](name_1, value);
              }
              if (node.init
                  && ['ClassExpression', 'FunctionExpression', 'ArrowFunctionExpression']
                      .indexOf(node.init.type) !== -1
                  && !value.name) {
                  define(value, 'name', {
                      value: name_1,
                      configurable: true
                  });
              }
          }
          else {
              pattern$1(node.id, scope, { kind: kind, feed: value });
          }
      }
  }
  function ClassDeclaration(node, scope) {
      scope.func(node.id.name, createClass(node, scope));
  }
  function ClassBody(node, scope, options) {
      if (options === void 0) { options = {}; }
      var klass = options.klass, superClass = options.superClass;
      for (var i = 0; i < node.body.length; i++) {
          MethodDefinition(node.body[i], scope, { klass: klass, superClass: superClass });
      }
  }
  function MethodDefinition(node, scope, options) {
      if (options === void 0) { options = {}; }
      var klass = options.klass, superClass = options.superClass;
      var key;
      if (node.computed) {
          key = evaluate(node.key, scope);
      }
      else if (node.key.type === 'Identifier') {
          key = node.key.name;
      }
      else {
          throw new SyntaxError('Unexpected token');
      }
      var obj = node.static ? klass : klass.prototype;
      var value = createFunc(node.value, scope, { superClass: superClass });
      switch (node.kind) {
          case 'constructor':
              break;
          case 'method':
              define(obj, key, {
                  value: value,
                  writable: true,
                  configurable: true,
              });
              break;
          case 'get': {
              var oriDptor = getDptor(obj, key);
              define(obj, key, {
                  get: value,
                  set: oriDptor && oriDptor.set,
                  configurable: true,
              });
              break;
          }
          case 'set': {
              var oriDptor = getDptor(obj, key);
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

  function hoist(block, scope, options) {
      if (options === void 0) { options = {}; }
      var _a = options.onlyBlock, onlyBlock = _a === void 0 ? false : _a;
      var funcDclrList = [];
      var funcDclrIdxs = [];
      for (var i = 0; i < block.body.length; i++) {
          var statement = block.body[i];
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
          for (var i = funcDclrIdxs.length - 1; i > -1; i--) {
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
              for (var i = 0; i < statement.body.length; i++) {
                  hoistVarRecursion(statement.body[i], scope);
              }
              break;
          case 'SwitchStatement':
              for (var i = 0; i < statement.cases.length; i++) {
                  for (var j = 0; j < statement.cases[i].consequent.length; j++) {
                      hoistVarRecursion(statement.cases[i].consequent[j], scope);
                  }
              }
              break;
          case 'TryStatement': {
              var tryBlock = statement.block.body;
              for (var i = 0; i < tryBlock.length; i++) {
                  hoistVarRecursion(tryBlock[i], scope);
              }
              var catchBlock = statement.handler && statement.handler.body.body;
              if (catchBlock) {
                  for (var i = 0; i < catchBlock.length; i++) {
                      hoistVarRecursion(catchBlock[i], scope);
                  }
              }
              var finalBlock = statement.finalizer && statement.finalizer.body;
              if (finalBlock) {
                  for (var i = 0; i < finalBlock.length; i++) {
                      hoistVarRecursion(finalBlock[i], scope);
                  }
              }
              break;
          }
      }
  }
  function pattern$1(node, scope, options) {
      if (options === void 0) { options = {}; }
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
  function createFunc(node, scope, options) {
      if (options === void 0) { options = {}; }
      if (!node.generator && !node.async) {
          return createFunc(node, scope, options);
      }
      var superClass = options.superClass, isCtor = options.isCtor;
      var params = node.params;
      var tmpFunc = function _a() {
          var _newTarget = this && this instanceof _a ? this.constructor : void 0;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var subScope = new Scope(scope, true);
          if (node.type !== 'ArrowFunctionExpression') {
              subScope.const('this', this);
              subScope.let('arguments', arguments);
              subScope.const(NEWTARGET, _newTarget);
              if (superClass) {
                  subScope.const(SUPER, superClass);
                  if (isCtor)
                      subScope.let(SUPERCALL, false);
              }
          }
          for (var i = 0; i < params.length; i++) {
              var param = params[i];
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
          var result;
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
      var func = tmpFunc;
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
      var superClass = evaluate(node.superClass, scope);
      var klass = function () {
          if (superClass) {
              superClass.apply(this);
          }
      };
      var methodBody = node.body.body;
      for (var i = 0; i < methodBody.length; i++) {
          var method = methodBody[i];
          if (method.kind === 'constructor') {
              klass = createFunc(method.value, scope, { superClass: superClass, isCtor: true });
              break;
          }
      }
      if (superClass) {
          inherits(klass, superClass);
      }
      ClassBody(node.body, scope, { klass: klass, superClass: superClass });
      define(klass, CLSCTOR, { value: true });
      define(klass, 'name', {
          value: node.id && node.id.name || '',
          configurable: true
      });
      return klass;
  }
  function ForXHandler(node, scope, options) {
      var value = options.value;
      var left = node.left;
      var subScope = new Scope(scope);
      if (left.type === 'VariableDeclaration') {
          VariableDeclaration(left, subScope, { feed: value });
      }
      else if (left.type === 'Identifier') {
          var variable = Identifier(left, scope, { getVar: true });
          variable.set(value);
      }
      else {
          pattern$1(left, scope, { feed: value });
      }
      var result;
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
      var objectType = scope.objectType;
      var properties = [node.property];
      var curNode = node;
      while (curNode.object.type === 'MemberExpression') {
          curNode = curNode.object;
          properties.unshift(curNode.property);
      }
      return properties.reduce(function (pre, cur, index) {
          return pre && pre[cur.name];
      }, objectType);
  }
  function FunctionArgType(name, argIndex, scope) {
      var _a, _b;
      var funcTypeMap = scope.funcTypeMap;
      return (_b = (_a = funcTypeMap[name]) === null || _a === void 0 ? void 0 : _a.argsType(argIndex)) !== null && _b !== void 0 ? _b : exports.TYPE.ANY;
  }

  (function (TYPE) {
      TYPE[TYPE["ANY"] = 0] = "ANY";
      TYPE[TYPE["STRING"] = 1] = "STRING";
      TYPE[TYPE["NUMBER"] = 2] = "NUMBER";
      TYPE[TYPE["BOOLEAN"] = 3] = "BOOLEAN";
      TYPE[TYPE["DATETIME"] = 4] = "DATETIME";
  })(exports.TYPE || (exports.TYPE = {}));
  var Sval = (function () {
      function Sval(options) {
          var _this = this;
          if (options === void 0) { options = {}; }
          this.options = {};
          this.scope = new Scope(null, true);
          this.exports = {};
          var _a = options.ecmaVer, ecmaVer = _a === void 0 ? 9 : _a, _b = options.sandBox, sandBox = _b === void 0 ? true : _b, _c = options.operatorHandle, operatorHandle = _c === void 0 ? [] : _c, _d = options.nullSafe, nullSafe = _d === void 0 ? false : _d;
          ecmaVer -= ecmaVer < 2015 ? 0 : 2009;
          if ([3, 5, 6, 7, 8, 9, 10].indexOf(ecmaVer) === -1) {
              throw new Error("unsupported ecmaVer");
          }
          this.options.ecmaVersion = ecmaVer;
          if (sandBox) {
              var win = createSandBox();
              this.scope.let('window', win);
              this.scope.let('this', win);
          }
          else {
              this.scope.let('window', globalObj);
              this.scope.let('this', globalObj);
          }
          this.scope.const('exports', this.exports = {});
          operatorHandle.forEach(function (item) { return _this.scope.addOperator(item.name, item.handle); });
          this.scope.nullSafe = nullSafe;
      }
      Sval.prototype.import = function (nameOrModules, mod) {
          var _a;
          if (typeof nameOrModules === 'string') {
              nameOrModules = (_a = {}, _a[nameOrModules] = mod, _a);
          }
          if (typeof nameOrModules !== 'object')
              return;
          var names = getOwnNames(nameOrModules);
          for (var i = 0; i < names.length; i++) {
              var name_1 = names[i];
              this.scope.var(name_1, nameOrModules[name_1]);
          }
      };
      Sval.prototype.parse = function (code, parser) {
          if (typeof parser === 'function') {
              return parser(code, assign({}, this.options));
          }
          return acorn.parse(code, this.options);
      };
      Sval.prototype.run = function (code, _a) {
          var _b = _a === void 0 ? {} : _a, _c = _b.null2Zero, null2Zero = _c === void 0 ? false : _c, funcTypeMap = _b.funcTypeMap, objectType = _b.objectType;
          this.scope.null2Zero = null2Zero;
          this.scope.funcTypeMap = funcTypeMap;
          this.scope.objectType = objectType;
          var ast = typeof code === 'string' ? acorn.parse(code, this.options) : code;
          hoist(ast, this.scope);
          evaluate(ast, this.scope);
      };
      Sval.version = version;
      return Sval;
  }());

  exports.default = Sval;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
