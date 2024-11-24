export declare type InternalCallMethod = (methodName: string, args: Record<string, any>, namespace?: string | string[]) => Promise<any>;
export declare abstract class NamespaceBase {
    /** @hidden */
    protected _call: (methodName: string, args: Record<string, any>, namespace?: string | string[]) => Promise<any>;
    /** @hidden */
    protected call: (methodName: string, args: Record<string, any>) => Promise<any>;
    /** @hidden */
    constructor(_call: InternalCallMethod, namespace: string);
}
