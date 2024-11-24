import * as React from 'react';
import { RNPlugin } from '../../plugin_base';
declare global {
    interface Window {
        __plugin: ReactRNPlugin;
    }
}
/** @hidden */
export declare class ReactRNPlugin extends RNPlugin {
    /** @hidden */
    initReact: (plugin: ReactRNPlugin, mountDiv: HTMLElement, rootURL: string) => void;
    onDeactivateReact: (plugin: ReactRNPlugin) => void;
    constructor(initReact: (plugin: ReactRNPlugin, mountDiv: HTMLElement, rootURL: string) => void, onDeactivateReact: (plugin: ReactRNPlugin) => void);
    onActivate(mountDiv: HTMLElement, rootURL: string): Promise<void>;
    onDeactivate(): Promise<void>;
}
export declare const renderWidget: (ComponentClass: React.ComponentClass<{}, any> | (() => Element | null) | (() => JSX.Element | null)) => void;
export declare function declareIndexPlugin(onActivate: (plugin: ReactRNPlugin) => Promise<void>, onDeactivate: (plugin: ReactRNPlugin) => Promise<void>): void;
