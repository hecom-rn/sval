import { Parser } from 'acorn';
import { MemberExpression, Node, Program } from 'estree';
import { OperatorHandle } from './scope';
export { OperatorHandle };
export declare enum TYPE {
    ANY = 0,
    STRING = 1,
    NUMBER = 2,
    BOOLEAN = 3,
    DATETIME = 4
}
export interface FunctionType {
    name: string;
    returnType: TYPE;
    argsType: (index: number) => TYPE;
}
export interface FunctionTypeMap {
    [name: string]: FunctionType;
}
export interface SvalOptions {
    ecmaVer?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019;
    sandBox?: boolean;
    operatorHandle?: {
        name: string;
        handle: OperatorHandle;
    }[];
    nullSafe?: boolean;
    funcTypeMap?: FunctionTypeMap;
}
export interface RunOption {
    null2Zero?: boolean;
    funcTypeMap?: FunctionTypeMap;
    isNumberField?: (fieldNames: string[]) => boolean;
    null2ZeroOnAssignment?: boolean;
}
declare class Sval {
    static version: string;
    private options;
    private scope;
    exports: {
        [name: string]: any;
    };
    parser: typeof Parser;
    constructor(options?: SvalOptions);
    import(nameOrModules: string | {
        [name: string]: any;
    }, mod?: any): void;
    parse(code: string, parser?: (code: string, options: SvalOptions) => Node): import("estree").Identifier | import("estree").SimpleLiteral | import("estree").RegExpLiteral | Program | import("estree").FunctionDeclaration | import("estree").FunctionExpression | import("estree").ArrowFunctionExpression | import("estree").SwitchCase | import("estree").CatchClause | import("estree").VariableDeclarator | import("estree").ExpressionStatement | import("estree").BlockStatement | import("estree").EmptyStatement | import("estree").DebuggerStatement | import("estree").WithStatement | import("estree").ReturnStatement | import("estree").LabeledStatement | import("estree").BreakStatement | import("estree").ContinueStatement | import("estree").IfStatement | import("estree").SwitchStatement | import("estree").ThrowStatement | import("estree").TryStatement | import("estree").WhileStatement | import("estree").DoWhileStatement | import("estree").ForStatement | import("estree").ForInStatement | import("estree").ForOfStatement | import("estree").VariableDeclaration | import("estree").ClassDeclaration | import("estree").ThisExpression | import("estree").ArrayExpression | import("estree").ObjectExpression | import("estree").YieldExpression | import("estree").UnaryExpression | import("estree").UpdateExpression | import("estree").BinaryExpression | import("estree").AssignmentExpression | import("estree").LogicalExpression | MemberExpression | import("estree").ConditionalExpression | import("estree").SimpleCallExpression | import("estree").NewExpression | import("estree").SequenceExpression | import("estree").TemplateLiteral | import("estree").TaggedTemplateExpression | import("estree").ClassExpression | import("estree").MetaProperty | import("estree").AwaitExpression | import("estree").Property | import("estree").Super | import("estree").TemplateElement | import("estree").SpreadElement | import("estree").ObjectPattern | import("estree").ArrayPattern | import("estree").RestElement | import("estree").AssignmentPattern | import("estree").ClassBody | import("estree").MethodDefinition | import("estree").ImportDeclaration | import("estree").ExportNamedDeclaration | import("estree").ExportDefaultDeclaration | import("estree").ExportAllDeclaration | import("estree").ImportSpecifier | import("estree").ImportDefaultSpecifier | import("estree").ImportNamespaceSpecifier | import("estree").ExportSpecifier | import("acorn").Node;
    run(code: string | Node, { null2Zero, funcTypeMap, null2ZeroOnAssignment, isNumberField }?: RunOption): void;
}
export default Sval;
