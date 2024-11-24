import { WidgetFileName } from '..';
import { InternalCallMethod, NamespaceBase } from './base';
import { WidgetLocation, WidgetLocationContextDataMap } from '../interfaces';
/**
 * # Widget Namespace
 *
 * The API Widget namespace.
 */
export declare class WidgetNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Get the DOMRect representing the position of an active widget instance.
     *
     * You can get the widgetInstanceId for a widget by using the plugin.widget.getWidgetContext method() and accessing the widgetInstanceId field.
     */
    getDimensions: (widgetInstanceId: number) => Promise<DOMRect>;
    /**
     * Open a widget in a popup modal.
     */
    openPopup: (widgetFileName: WidgetFileName, contextData?: any) => Promise<void>;
    /**
     * Close the open popup modal.
     */
    closePopup: (restoreFocus?: boolean) => Promise<void>;
    /**
     * Get a piece of data, which may include configuration, state or cached functionality.
     * Pass the WidgetLocation as a generic parameter to infer the return type for this method.
     */
    getWidgetContext: <T extends WidgetLocation>() => Promise<WidgetLocationContextDataMap[T] extends undefined ? {
        widgetInstanceId: string;
    } : WidgetLocationContextDataMap[T] & {
        widgetInstanceId: string;
    }>;
}
