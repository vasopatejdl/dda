/**
 * DOCUMENTATION INFO:
 * When adding new events, ad documentation
 */
/** `GlobalEvent`s are general-purpose events throughout the app. */
export declare const GlobalEvent: {
    readonly GlobalOpenRem: "global.open-rem";
    readonly URLChange: "global.url-change";
};
/** `QueueEvent`s are triggered when solving flashcards. */
export declare const QueueEvent: {
    readonly QueueCompleteCard: "queue.complete-card";
    readonly QueueEnter: "queue.enter";
    readonly QueueExit: "queue.exit";
    readonly RevealAnswer: "queue.reveal-answer";
};
export declare const EditorEvents: {
    EditorSelectionChanged: string;
    EditorTextEdited: string;
};
export declare const RemEvent: {
    RemChanged: string;
    GlobalRemChanged: string;
};
export declare const PowerupEvent: {
    PowerupSlotChanged: string;
    ClickRemReference: string;
    MouseOverLink: string;
    MouseOutLink: string;
};
export declare const SidebarEvents: {
    ClickSidebarItem: string;
};
export declare const MessagingEvents: {
    MessageBroadcast: string;
};
export declare const SettingEvents: {
    SettingChanged: string;
};
export declare const StorageEvents: {
    StorageSessionChange: string;
    StorageSyncedChange: string;
    StorageLocalChange: string;
};
export declare const WidgetEvents: {
    FakeEmbedComponentDimensionChange: string;
    FakeEmbedDOMEvent: string;
    StealKeyEvent: string;
};
export declare const WindowEvents: {
    FocusedPaneChange: string;
    CurrentWindowTreeChange: string;
};
export declare const FocusEvents: {
    FocusedRemChange: string;
    FocusedPortalChange: string;
};
export declare const AppEvents: {
    readonly FocusedRemChange: string;
    readonly FocusedPortalChange: string;
    readonly SettingChanged: string;
    readonly EditorSelectionChanged: string;
    readonly EditorTextEdited: string;
    readonly FakeEmbedComponentDimensionChange: string;
    readonly FakeEmbedDOMEvent: string;
    readonly StealKeyEvent: string;
    readonly StorageSessionChange: string;
    readonly StorageSyncedChange: string;
    readonly StorageLocalChange: string;
    readonly QueueCompleteCard: "queue.complete-card";
    readonly QueueEnter: "queue.enter";
    readonly QueueExit: "queue.exit";
    readonly RevealAnswer: "queue.reveal-answer";
    readonly GlobalOpenRem: "global.open-rem";
    readonly URLChange: "global.url-change";
    readonly RemChanged: string;
    readonly GlobalRemChanged: string;
    readonly PowerupSlotChanged: string;
    readonly ClickRemReference: string;
    readonly MouseOverLink: string;
    readonly MouseOutLink: string;
    readonly ClickSidebarItem: string;
    readonly MessageBroadcast: string;
    readonly FocusedPaneChange: string;
    readonly CurrentWindowTreeChange: string;
    readonly onActivate: "onActivate";
    readonly onDeactivate: "onDeactivate";
    readonly setDarkMode: "setDarkMode";
};
/** @hidden */
export declare type AppEventKey = keyof typeof AppEvents;
/** @hidden */
export declare type AppEvent = typeof AppEvents[AppEventKey];
export declare type AppEventListerKey = string | undefined;
/** Check if the given `eventId` is an `AppEvent`. */
export declare function isAppEvent(eventId: string): eventId is AppEvent;
