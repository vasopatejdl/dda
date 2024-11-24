import { Rem } from '..';
import { InternalCallMethod, NamespaceBase } from './base';
/**
 * # Focus Namespace
 *
 * The API Focus namespace.
 */
export declare class FocusNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Get the currently focused Rem. Will return undefined if
     * you do not have permission to access it.
     */
    getFocusedRem: () => Promise<Rem | undefined>;
    /**
     * Get the ID of the currently focused portal.
     */
    getFocusedPortal: () => Promise<Rem | undefined>;
}
