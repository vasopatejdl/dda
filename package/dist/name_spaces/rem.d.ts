import { BuiltInPowerupCodes, RemId, RemType, RichTextInterface, SetRemType, SlotCodesForPowerup, PORTAL_TYPE } from '../interfaces';
import { Card } from './card';
interface GetPowerupPropertyAsRichTextOverload {
    /**
     * Get a built-in RemNote powerup's slot value as rich text.
     */
    <PowerupCode extends BuiltInPowerupCodes>(powerupCode: PowerupCode, powerupSlot: SlotCodesForPowerup<PowerupCode>): Promise<RichTextInterface>;
    /**
     * Get a plugin powerup's slot value as rich text.
     */
    (powerupCode: string, powerupSlot: string): Promise<RichTextInterface>;
}
interface GetPowerupPropertyOverload {
    /**
     * Get a built-in RemNote powerup's slot value as a string.
     */
    <PowerupCode extends BuiltInPowerupCodes>(powerupCode: PowerupCode, powerupSlot: SlotCodesForPowerup<PowerupCode>): Promise<string>;
    /**
     * Get a plugin powerup's slot value as a string.
     */
    (powerupCode: string, powerupSlot: string): Promise<string>;
}
interface SetPowerupPropertyOverload {
    /**
     * Set a built-in RemNote powerup's slot value.
     */
    <PowerupCode extends BuiltInPowerupCodes>(powerupCode: PowerupCode, powerupSlot: SlotCodesForPowerup<PowerupCode>, value: RichTextInterface): Promise<void>;
    /**
     * Set a plugin powerup's slot value.
     */
    (powerupCode: string, powerupSlot: string, value: RichTextInterface): Promise<void>;
}
/**
 * A single Rem. Obtain this object with `plugin.rem.findOne(remId)` or other
 * similar methods in the `plugin.rem` namespace.
 */
export declare class Rem {
    /**
     * The internal UUID for your Rem. This is stable and will never change.
     */
    readonly _id: RemId;
    /**
     * Last time this document was changed on this local machine, either through a local edit or a sync
     */
    readonly localUpdatedAt: number;
    /**
     * The last time that this Rem was modified on any client.
     */
    readonly updatedAt: number;
    /**
     *   The parent ID of your Rem. Null for top-level Rem.
     * */
    readonly parent: RemId | null;
    /**
     * The ordered list of children RemIds.
     */
    readonly children: RemId[];
    /**
     * The Rem's type in the Concept-Descriptor Framework.
     */
    readonly type: RemType;
    /**
     * The Rich Text representation of the your Rem's name. This is your Rem's main text
     * and is the front of flashcards generated from this Rem.
     */
    readonly text: RichTextInterface;
    /**
     * The Rich Text representation of the your Rem's content. This is the text that
     * appears on the back of flashcards generated from this Rem.
     */
    readonly backText?: RichTextInterface;
    private _callMethod;
    private constructor();
    /**
     * Essentially the same as `_callMethod`, but implicitly
     * passes the `remId` in with the method options because
     * all `RemPluginObject` methods require this argument
     */
    private call;
    /**
     * Helper method for methods that return a single rem (`RemPluginObject`)
     */
    private callAndReturnRem;
    /**
     * Helper method for methods that return many rem (`RemPluginObjects`s)
     */
    private callAndReturnManyRem;
    /**
     * @alpha This method may change in a future release.
     *
     * Get the index position of the Rem amongst its siblings in `portalId`.
     *
     * If `portalId` is undefined, the current focused portal id will be used.
     */
    positionAmongstSiblings: (portalId?: string) => Promise<number | undefined>;
    /**
     * @alpha This method may change in a future release.
     *
     * Get the index position of the Rem amongst the visible siblings in `portalId`.
     *
     * If `portalId` is undefined, the current focused portal id will be used.
     */
    positionAmongstVisibleSiblings: (portalId?: string) => Promise<number | undefined>;
    /**
     * Check if a Rem has a powerup.
     */
    hasPowerup: (powerupCode: BuiltInPowerupCodes | string) => Promise<boolean>;
    /**
     * @ignore
     */
    getHiddenExplicitlyIncludedState: (portalId?: string) => Promise<'hidden' | 'included' | 'none' | undefined>;
    /**
     * @ignore
     */
    setHiddenExplicitlyIncludedState: (hiddenExplicitlyIncludedState: 'hidden' | 'included' | 'none', portalId?: string) => Promise<void>;
    getLastPracticed: () => Promise<number>;
    addPowerup: (powerupCode: string | BuiltInPowerupCodes) => Promise<void>;
    getLastTimeMovedTo: () => Promise<number>;
    getSchemaVersion: () => Promise<number>;
    /**
     * Get whether or not the Rem is in embedded queue view mode.
     */
    embeddedQueueViewMode: () => Promise<boolean>;
    /**
     * Get whether or not the Rem is a collapsed portal.
     */
    isCollapsed: (portalId: string) => Promise<boolean>;
    /**
     * Set whether or not the Rem is a collapsed portal.
     */
    setIsCollapsed: (isCollapsed: boolean, portalId: string) => Promise<boolean>;
    /**
     * Get the number of times the Rem was selected in search.
     */
    timesSelectedInSearch: () => Promise<number>;
    /**
     * Get the portal type ()
     */
    getPortalType: () => Promise<PORTAL_TYPE>;
    /**
     * Get the Rem directly included in this portal.
     */
    getPortalDirectlyIncludedRem: () => Promise<Rem[]>;
    /**
     * Get the Rem's type (concept, descriptor, portal or default).
     */
    getType: () => Promise<RemType>;
    /**
     * Set this Rem's powerup property for the `powerupCode`'s `powerupSlot` to `value`.
     */
    setPowerupProperty: SetPowerupPropertyOverload;
    /**
     * Get the powerup property for this Rem's `powerupCode`'s `powerupSlot`.
     * @return A string representation of the value
     */
    getPowerupProperty: GetPowerupPropertyOverload;
    /**
     * Get the powerup property for this Rem's `powerupCode`'s `powerupSlot`.
     * @return The raw rich text representation of the value
     */
    getPowerupPropertyAsRichText: GetPowerupPropertyAsRichTextOverload;
    /**
     * Set the Rem's text (the front of the flashcard) to `text`.
     */
    setText: (text: RichTextInterface) => Promise<void>;
    /**
     * Set the Rem's back text (the back of the flashcard) to `text`.
     */
    setBackText: (backText: RichTextInterface | undefined) => Promise<void>;
    /**
     * Remove a tag from the Rem. Optionally also remove powerup properties.
     */
    removeTag: (tagId: RemId, removeProperties?: boolean) => Promise<void>;
    /**
     * Remove a powerup from the Rem. Will remove powerup slots.
     */
    removePowerup: (powerupCode: BuiltInPowerupCodes | string) => Promise<void>;
    /**
     * Add the `tagId` Rem as a tag.
     */
    addTag: (tag: RemId | Rem) => Promise<void>;
    /**
     * Remove (delete) this Rem and all of its descendants.
     */
    remove: () => Promise<void>;
    /**
     * Get the list of Rem that this Rem is tagged with.
     */
    getTagRems: () => Promise<Rem[]>;
    /**
     * Add this Rem to the `portalId` portal.
     */
    addToPortal: (portal: RemId | Rem) => Promise<void>;
    /**
     * Remove this Rem from the `portalId` portal.
     */
    removeFromPortal: (portal: RemId | Rem) => Promise<void>;
    /**
     * Moves this Rem to be a child of the `parentId` Rem. By default, this Rem
     * will be added to the front of the `parentId` Rem's children. Specify
     * `positionAmongstSiblings` to insert elsewhere.
     * If the parentId is null, the Rem will become a top level Rem.
     */
    setParent: (parent: RemId | Rem | null, positionAmongstSiblings?: number) => Promise<void>;
    /**
     * Creates an alis for the Rem with the text `aliasText`. If an equivalent alias
     * already exists, that alias will be returned.
     */
    getOrCreateAliasWithText: (aliasText: RichTextInterface) => Promise<Rem | undefined>;
    /**
     * Gets the list of children of this Rem.
     */
    getChildrenRem: () => Promise<Rem[]>;
    /**
     * Get all Rem that appear in this Portal Context.
     */
    allRemInDocumentOrPortal: () => Promise<Rem[]>;
    /**
     * Expands this Rem to show its children.
     * @param recurse If true, will recursively show all descendants of this Rem.
     */
    expand: (portal: RemId | Rem | undefined, recurse: boolean) => Promise<void>;
    /**
     * Collapses this Rem to hide its children.
     */
    collapse: (portal: RemId | Rem | undefined) => Promise<void>;
    /**
     * Get the Rem's siblings under its parent.
     */
    siblingRem: () => Promise<Rem[]>;
    /**
     * @alpha This method may change in a future release.
     *
     * Get the Rem's visible siblings in the given `portalId` context.
     *
     * If `portalId` is undefined, the current focused portal id will be used.
     */
    visibleSiblingRem: (portalId?: string) => Promise<Rem[]>;
    /**
     * Get the Rem which are tagged by this Rem.
     */
    taggedRem: () => Promise<Rem[]>;
    /**
     * Tags chain hierarchically - this returns all tags + all tags of tags in this Rem's ancestors.
     */
    ancestorTagRem: () => Promise<Rem[]>;
    /**
     * Tags chain hierarchically - this returns all tags + all tags of tags in this Rem's descendants.
     */
    descendantTagRem: () => Promise<Rem[]>;
    /**
     * Get all of the hierarchical descendants of this Rem.
     */
    getDescendants: () => Promise<Rem[]>;
    /**
     * Get the flashcards generated from this Rem.
     */
    getCards: () => Promise<Card[]>;
    /**
     * Get this Rem's aliases.
     */
    getAliases: () => Promise<Rem[]>;
    /**
     * Get this Rem's parent.
     */
    getParentRem: () => Promise<Rem | undefined>;
    /**
     * Get the portals and documents this Rem is included in.
     */
    portalsAndDocumentsIn: () => Promise<Rem[]>;
    /**
     * Merge another Rem into this Rem.
     */
    merge: (remIdToMergeIntoThisOne: RemId) => Promise<void>;
    /**
     * Merge another Rem into this Rem and set an alias.
     */
    mergeAndSetAlias: (remToMergeIntoThisOne: RemId | Rem) => Promise<void>;
    indent: (portal?: RemId | Rem) => Promise<void>;
    outdent: (portal?: RemId | Rem) => Promise<void>;
    /**
     * Set the Rem's type.
     */
    setType: (type: SetRemType) => Promise<void>;
    /**
     * Find all Rem which contain a direct reference to this Rem.
     */
    remsReferencingThis: () => Promise<Rem[]>;
    /**
     * Find all Rem which are referenced by this Rem.
     */
    remsBeingReferenced: () => Promise<Rem[]>;
    /**
     * Find all Rem which are referenced by this Rem, including the Rem which
     * those Rem are referencing.
     */
    deepRemsBeingReferenced: () => Promise<Rem[]>;
    /**
     * Get the Rem's sources.
     */
    getSources: () => Promise<Rem[]>;
    /**
     * Add a source Rem to this Rem's source list.
     */
    addSource: (source: RemId | Rem) => Promise<void>;
    /**
     * Remove a source Rem from this Rem's source list.
     */
    removeSource: (source: RemId | Rem) => Promise<void>;
    /**
     * Returns true if the Rem is a Document Rem.
     */
    isDocument: () => Promise<boolean>;
    /**
     * Set whether or not this Rem is a Document Rem
     */
    setIsDocument: (isDocument: boolean) => Promise<void>;
    /**
     * Returns true if this Rem is a list item.
     */
    isListItem: () => Promise<boolean>;
    /**
     * Set whether or not this Rem is a list item.
     */
    setIsListItem: (isListItem: boolean) => Promise<void>;
    /**
     * Returns true if this Rem is a card item.
     */
    isCardItem: () => Promise<boolean>;
    /**
     * Set whether or not this Rem is a multiline item.
     */
    setIsCardItem: (isCardItem: boolean) => Promise<void>;
    /**
     * Returns true if this Rem is a Todo.
     */
    isTodo: () => Promise<boolean>;
    /**
     * Set whether or not this Rem is a Todo.
     */
    setIsTodo: (isTodo: boolean) => Promise<void>;
    getTodoStatus: () => Promise<'Finished' | 'Unfinished' | undefined>;
    setTodoStatus: (todoStatus: 'Finished' | 'Unfinished') => Promise<void>;
    /**
     * Get the Rem's font size if it is a header. Returns undefined for normal text.
     */
    getFontSize: () => Promise<'H1' | 'H2' | 'H3' | undefined>;
    /**
     * Set the Rem's font size.
     */
    setFontSize: (fontSize: 'H1' | 'H2' | 'H3' | undefined) => Promise<void>;
    /**
     * Get the Rem's highlight color.
     */
    getHighlightColor: () => Promise<string | undefined>;
    /**
     * Get the Rem's highlight color.
     */
    setHighlightColor: (highlightColor: 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple') => Promise<void>;
    /**
     * Returns whether or not this Rem is a powerup Rem.
     */
    isPowerup: () => Promise<boolean>;
    /**
     * Returns whether or not this Rem is a powerup enum.
     */
    isPowerupEnum: () => Promise<boolean>;
    /**
     * Returns whether or not this Rem is a powerup list item.
     */
    isPowerupPropertyListItem: () => Promise<boolean>;
    /**
     * Returns whether or not this Rem is a powerup slot.
     */
    isPowerupSlot: () => Promise<boolean>;
    /**
     * Returns whether or not this Rem is a powerup property.
     */
    isPowerupProperty: () => Promise<boolean>;
    /**
     * Returns whether or not this Rem is a slot.
     */
    isSlot: () => Promise<boolean>;
    /**
     * Set whether or not this Rem is a slot.
     */
    setIsSlot: (isSlot: boolean) => Promise<void>;
    openRemInContext: () => Promise<void>;
    /**
     * Zooms into the Rem and opens it in the current pane.
     */
    openRemAsPage: () => Promise<void>;
    /**
     * Returns whether or not this Rem generates flashcards to be practiced in the queue.
     */
    getEnablePractice: () => Promise<boolean>;
    /**
     * Returns which flashcard practice directions are enabled for this Rem.
     */
    getPracticeDirection: () => Promise<'forward' | 'backward' | 'none' | 'both'>;
    /**
     * Sets whether or not this Rem generates flashcards to be practiced in the queue.
     */
    setEnablePractice: (enablePractice: boolean) => Promise<void>;
    /**
     * Sets which flashcard practice directions are enabled for this Rem.
     */
    setPracticeDirection: (direction: 'forward' | 'backward' | 'none' | 'both') => Promise<void>;
    copyPortalReferenceToClipboard: () => Promise<void>;
    copyTagReferenceToClipboard: () => Promise<void>;
    copyReferenceToClipboard: () => Promise<void>;
}
/**
 * # Rem Namespace
 *
 * The API Rem namespace. Call with `plugin.rem.apiMethodName()`.
 */
export declare class RemNamespace {
    /** @hidden */
    _call: (methodName: string, args: Record<string, any>, namespace?: string | string[]) => Promise<any>;
    /** @hidden */
    call: (methodName: string, args: Record<string, any>) => Promise<any>;
    /** @hidden */
    constructor(_call: (methodName: string, args: Record<string, any>, namespace?: string | string[]) => Promise<any>);
    /**
     * Find a Rem by ID. If your plugin doesn't have access to the Rem, undefined will
     * be returned.
     */
    findOne: (remId: RemId | undefined) => Promise<Rem | undefined>;
    /**
     * Creates a tree of Rem representing your parsed `markdown`.
     * @returns The root Rem of your tree
     */
    createWithMarkdown: (markdown: string) => Promise<Rem | undefined>;
    /**
     * Finds a Rem by its name. If `parentId` is null, only top-level Rem will
     * be returned.
     * @returns
     */
    findByName: (name: RichTextInterface, parentId: RemId | null) => Promise<Rem | undefined>;
    /**
     * Move a group of rems under a new parent.
     * @returns
     */
    moveRems: (rems: RemId[] | Rem[], newParent: RemId | Rem, positionAmongstSiblings: number, portal?: RemId | Rem) => Promise<void>;
    /**
     * Get all Rem in the user's knowledgebase. Results will be filtered down
     * to only those Rem your plugin has access to. Note: may be slow for large
     * knowledgebases.
     */
    getAll: () => Promise<Rem[]>;
    /**
     * Find multiple Rem by ID. If your plugin doesn't have access to a Rem, undefined will
     * be returned.
     */
    findMany: (rs: RemId[] | Rem[]) => Promise<Rem[] | undefined>;
    /**
     * Create a portal.
     */
    createPortal: () => Promise<Rem | undefined>;
    /** Create a Rem. Your Rem will be created in a location that your plugin
     * has access to depending on your plugin's Access Scopes.
     */
    createRem: () => Promise<Rem | undefined>;
}
export declare const REM_NAMESPACE = "rem";
export {};
