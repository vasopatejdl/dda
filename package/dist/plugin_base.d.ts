import { EmbedComponentType, EventCallbackFn, PluginManifest, WidgetOptions } from '.';
import { AppEvent, AppEventListerKey } from './events';
import { CardNamespace } from './name_spaces/card';
import { DateNamespace } from './name_spaces/date';
import { EditorNamespace } from './name_spaces/editor';
import { FocusNamespace } from './name_spaces/focus';
import { MessagingNamespace } from './name_spaces/messaging';
import { PowerupNamespace } from './name_spaces/powerup';
import { AppNamespace } from './name_spaces/app';
import { RemNamespace } from './name_spaces/rem';
import { RichTextNamespace } from './name_spaces/rich_text';
import { SearchNamespace } from './name_spaces/search';
import { SettingsNamespace } from './name_spaces/settings';
import { StorageNamespace } from './name_spaces/storage';
import { WidgetNamespace } from './name_spaces/widget';
import { WindowNamespace } from './name_spaces/window';
import { EventNamespace } from './name_spaces/event';
export { AppNamespace };
export { RemNamespace };
export { EventNamespace };
export { CardNamespace };
export { DateNamespace };
export { EditorNamespace };
export { FocusNamespace };
export { MessagingNamespace };
export { PowerupNamespace };
export { RichTextNamespace };
export { SearchNamespace };
export { SettingsNamespace };
export { StorageNamespace };
export { WidgetNamespace };
export { WindowNamespace };
/**
 * `RNPlugin` is the base API endpoint for accessing all API methods.
 *
 * View each namespace on the sidebar for methods and examples, or view a consise overview below.
 *
 * ## Getting a RNPlugin
 * ### Index Widget
 * Get the RNPlugin directly in onActivate and onDeactivate:
 * ```typescript
 * async function onActivate(plugin: ReactRNPlugin) {
 *    plugin.settings.registerStringSetting({
 *      // ...
 *    })
 * }
 * ```
 *
 * Towards the bottom of the file you can see s
 * the second plugin lifecycle method:
 *
 * ```typescript
 * async function onDeactivate(plugin: ReactRNPlugin) {}
 * ```
 *
 * ### Other Widgets
 * In your other React widgets, call the `usePlugin()` or `useTracker()` hooks:
 * ```typescript
 * const plugin = usePlugin();
 * plugin.settings.registerStringSetting({
 *    // ...
 * })
 * ```
 *
 * ```typescript
 * const reactiveVal = useTracker(plugin => {
 *  return plugin.settings.getSetting("mySetting");
 * });
 * ```
 */
export declare abstract class RNPlugin {
    /** @hidden */
    private apiCallPromise;
    /** @hidden */
    model: Record<string, any>;
    /** @hidden */
    listeners: Record<AppEvent, Map<AppEventListerKey, EventCallbackFn[]>>;
    /** @hidden */
    private usedMessageIds;
    /** @hidden */
    private widgetInstanceId;
    /** @hidden */
    inSandbox: boolean | undefined;
    /** @hidden */
    isNative: boolean | undefined;
    rootURL: string | undefined;
    /** @hidden */
    mountDiv: HTMLElement | undefined;
    /** @hidden */
    private widgetBodyResizeObserver;
    /** @hidden */
    private widgetOptions;
    /** Make sure to set the `id` property to a unique identifier for your plugin.
     *  This is usually stored in the `manifest.json` which you can import and apply.
     *
     *  For example:
     *  ```typescript
     *  import { id } from '../manifest.json';
     *
     *  class Plugin extends RNPlugin {
     *    id = id;
     *  }
     *  ```
     */
    manifest: PluginManifest | undefined;
    id: string | undefined;
    /** @hidden */
    private pluginLogger;
    /** @hidden */
    private logApi;
    /** @hidden */
    constructor();
    /** @hidden */
    private setDarkMode;
    /**
     * The track function is similar to the `useTracker` hook, but it can also be used in outside of React components.
     *
     * The track function converts normal, non-reactive plugin API methods into reactive methods. "Reactive" means that the methods will be re-run in response to certain events.
     */
    track(userFunc: (plugin: RNPlugin) => Promise<any>): () => void;
    /** @hidden */
    receiveActivateMessage(args: {
        inSandbox: boolean;
        widgetOptions: WidgetOptions;
        widgetInstanceId: number;
        mountDiv: HTMLElement | undefined;
        rootURL: string;
        styleSheetHREFs: string[];
    }): Promise<void>;
    /** @hidden */
    receiveDeactivateMessage(args: {}): Promise<void>;
    /** @hidden */
    createMountDiv(): HTMLDivElement;
    /** @hidden */
    abstract onActivate(mountDiv: HTMLElement | null, rootURL: string): void;
    /** @hidden */
    abstract onDeactivate(): void;
    /**
     * Print messages to DevTools console.
     */
    /** @hidden */
    private log;
    /** @hidden */
    protected _call(methodName: string, args: Record<string, any>, namespace?: string | string[]): Promise<any>;
    /** @hidden */
    _receive(event: MessageEvent): void;
    /** @hidden */
    private autoAdjustWidgetContainerDimension;
    /** @hidden */
    createFakeEmbedComponent(args: {
        type: EmbedComponentType;
        id: string;
        top: number;
        left: number;
        width?: number | string;
        height?: number | string;
        maxHeight?: number | string;
        maxWidth?: number | string;
        externalProps: any;
    }): Promise<string>;
    /** @hidden (should it be shown?) */
    unmountFakeEmbedComponent(id: string): Promise<void>;
    /** @hidden (should it be shown?) */
    updateFakeEmbedComponentRect(id: string, args: {
        top?: number;
        left?: number;
        width?: number | string | null;
        height?: number | string | null;
        maxWidth?: number | string | null;
        maxHeight?: number | string | null;
    }): Promise<any>;
    /** @hidden (should it be shown?) */
    updateFakeEmbedExternalProps(id: string, externalProps: any): Promise<any>;
    /** @hidden */
    ping(): Promise<any>;
    /**
     * View extensive documentation for this namespace [here](/api/classes/AppNamespace)
     */
    app: AppNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/EditorNamespace)
     */
    editor: EditorNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/EventNamespace)
     */
    event: EventNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/MessagingNamespace)
     */
    messaging: MessagingNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/FocusNamespace)
     */
    focus: FocusNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/DateNamespace)
     */
    date: DateNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/WidgetNamespace)
     */
    widget: WidgetNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/WindowNamespace)
     */
    window: WindowNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/PowerupNamespace)
     */
    powerup: PowerupNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/RichTextNamespace)
     */
    richText: RichTextNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/RemNamespace)
     */
    rem: RemNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/CardNamespace)
     */
    card: CardNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/StorageNamespace)
     */
    storage: StorageNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/SettingsNamespace)
     */
    settings: SettingsNamespace;
    /**
     * View extensive documentation for this namespace [here](/api/classes/SearchNamespace)
     */
    search: SearchNamespace;
}
