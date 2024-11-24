import { PluginDropdownSetting, PluginSetting, PluginStringSetting } from '../interfaces';
import { InternalCallMethod, NamespaceBase } from './base';
/**
 * # Setting Namespace
 *
 * The API Setting namespace.
 */
export declare class SettingsNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Register a dropdown setting.
     */
    registerDropdownSetting: (setting: PluginDropdownSetting) => Promise<void>;
    /**
     * Register a boolean setting.
     */
    registerBooleanSetting: (setting: PluginSetting<boolean>) => Promise<void>;
    /**
     * Register a string setting.
     */
    registerStringSetting: (setting: PluginStringSetting) => Promise<void>;
    /**
     * Register a number setting.
     */
    registerNumberSetting: (setting: PluginSetting<number>) => Promise<void>;
    /**
     * Get a setting by its id.
     */
    getSetting: <T>(settingId: string) => Promise<T>;
}
