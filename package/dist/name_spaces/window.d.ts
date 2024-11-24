import { PaneRemWindowTree, RemId, RemIdWindowTree } from '../interfaces';
import { InternalCallMethod, NamespaceBase } from './base';
import { Rem } from './rem';
/**
 * # Window Namespace
 *
 * The API Window namespace.
 */
export declare class WindowNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Steal keys which are typically intercepted by the editor, such as
     * the tab and enter keys.
     *
     * Stolen keys will automatically be released when the floating widget closes.
     */
    stealKeys: (floatingWidgetId: string, keys: string[]) => Promise<void>;
    /**
     * Release keys stolen with the `stealKeys` method.
     */
    releaseKeys: (floatingWidgetId: string, keys: string[]) => Promise<void>;
    /**
     * Open a floating widget in a popup window at a certain position.
     */
    openFloatingWidget: (fileName: string, position: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }, classContainer?: string) => Promise<string>;
    /**
     * Close a floating widget.
     */
    closeFloatingWidget: (floatingWidgetId: string) => Promise<void>;
    /**
     * Check if a floating widget is open.
     */
    isFloatingWidgetOpen: (floatingWidgetId: string) => Promise<boolean>;
    /**
     * Update the position of an existing floating widget.
     */
    setFloatingWidgetPosition: (floatingWidgetId: string, position: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }) => Promise<void>;
    /**
     * Close all open floating widgets.
     */
    closeAllFloatingWidgets: () => Promise<void>;
    /**
     * Get an object describing the current pane layout.
     */
    getCurrentWindowTree: () => Promise<PaneRemWindowTree>;
    /**
     * Set the current pane layout.
     */
    setRemWindowTree: (tree: RemIdWindowTree) => Promise<void>;
    /**
     * Get the last focused pane.
     */
    getLastFocusedPane: () => Promise<string | undefined>;
    /**
     * Set the current window tree using a string.
     */
    setCurrentWindowTreeFromString: (treeString: string) => Promise<void>;
    /**
     * Get the paneIds of all currently open panes.
     */
    getOpenPaneIds: () => Promise<string[]>;
    /**
     * Get the currently focused paneId.
     */
    getFocusedPaneId: () => Promise<string>;
    /**
     * Set the currently focused paneId.
     */
    setFocusedPaneId: (paneId: string) => Promise<void>;
    /**
     * Get the current URL in the address bar.
     */
    getURL: () => Promise<string>;
    /**
     * Set the URL in the address bar.
     */
    setURL: (url: string) => Promise<void>;
    /**
     * Open a Rem in the current focused pane.
     */
    openRem: (rem: Rem) => Promise<void>;
    /**
     * Get the RemIds from all currently open panes.
     */
    getOpenPaneRemIds: () => Promise<RemId[]>;
    /**
     * Get RemId for a currently open pane.
     */
    getOpenPaneRemId: (paneId: string | undefined) => Promise<string | undefined>;
    /**
     * Open a widget in a pane.
     */
    openWidgetInPane: (fileName: string, contextData?: Record<string, any>) => Promise<RemId[]>;
    /**
     * Open a widget in a pane.
     */
    openWidgetInRightSidebar: (fileName: string, contextData?: Record<string, any>) => Promise<RemId[]>;
}
