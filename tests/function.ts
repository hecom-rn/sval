import { FunctionTypeMap, TYPE } from "../src";

function FirstNotNull(...args: any[]) {
  if (Array.isArray(args) && args.length === 0) {
    return null
  }
  for (let i = 0; i < args.length; i++) {
    if (ISNOTNULL(args[i])) {
      return args[i];
    }
  }
  return null;
}

function isNotNULL(value: any) {
  return ISNOTNULL(value)
}

function ISNOTNULL(value: any) {
  return !ISNULL(value);
}

function isNULL(value: any) {
  return ISNULL(value)
}

function ISNULL(value: any) {
  return value == null || false || typeof value === 'number' && isNaN(value) || value && value.toString() === '' || Array.isArray(value) && value.length === 0;
}

function ABS(number: number) {
  if (number == null || isNaN(number)) {
    return null;
  }
  return Math.abs(number);
}

function IF(logicalTest: boolean, valueIfTrue: any, valueIfFalse: any) {
  if (logicalTest != null && typeof logicalTest != "boolean") {
    return null;
  }
  return logicalTest ? valueIfTrue : valueIfFalse;
}

export default {
  FirstNotNull, isNotNULL, ISNOTNULL, isNULL, ISNULL, ABS, IF
}

export const FuncTypeMap: FunctionTypeMap = {
  IF: { name: 'IF', returnType: TYPE.ANY, argsType: (index) => index == 1 ? TYPE.BOOLEAN : TYPE.ANY },
  ABS: { name: 'ABS', returnType: TYPE.NUMBER, argsType: () => TYPE.NUMBER },
  FirstNotNull: { name: 'FirstNotNull', returnType: TYPE.ANY, argsType: () => TYPE.ANY },
  isNotNULL: { name: 'isNotNULL', returnType: TYPE.BOOLEAN, argsType: () => TYPE.ANY },
  ISNOTNULL: { name: 'ISNOTNULL', returnType: TYPE.BOOLEAN, argsType: () => TYPE.ANY },
  isNULL: { name: 'isNULL', returnType: TYPE.BOOLEAN, argsType: () => TYPE.ANY },
  ISNULL: { name: 'ISNULL', returnType: TYPE.BOOLEAN, argsType: () => TYPE.ANY },
}
