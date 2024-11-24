import { Rem, RemId, RichTextFormatName, RichTextInterface } from '../interfaces';
import { InternalCallMethod, NamespaceBase } from './base';
export declare class RichTextBuilder {
    private richText;
    private richTextNamespace;
    /** @hidden */
    constructor(richTextNamespace: RichTextNamespace);
    /**
     * Append code block rich text with syntax highlighting to the rich text builder.
     */
    code: (text: string, language: string) => this;
    /**
     * Append image rich text to the rich text builder.
     */
    image: (url: string, width?: number, height?: number) => this;
    /**
     * Append rem reference rich text to the rich text builder.
     */
    rem: (rem: RemId | Rem) => RichTextBuilder;
    /**
     * Append image rich text to the rich text builder.
     */
    text: (text: string, formats?: Exclude<RichTextFormatName, 'cloze'>[]) => RichTextBuilder;
    /**
     * Append audio rich text to the rich text builder.
     */
    audio: (url: string) => this;
    /**
     * Append latex rich text to the rich text builder.
     */
    latex: (text: string, block?: boolean) => this;
    /**
     * Append video rich text to the rich text builder.
     */
    video: (url: string) => this;
    /**
     * Append newline rich text to the rich text builder.
     */
    newline: () => this;
    /**
     * Get the rich text value from the rich text builder.
     */
    value: () => Promise<RichTextInterface>;
}
/**
 * # RichText Namespace
 *
 * The API RichText namespace.
 */
export declare class RichTextNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Create a new rich text builder with code block rich text and syntax highlighting.
     */
    get code(): (text: string, language: string) => RichTextBuilder;
    /**
     * Create a new rich text builder with image rich text.
     */
    get image(): (url: string, width?: number | undefined, height?: number | undefined) => RichTextBuilder;
    /**
     * Create a new rich text builder with rem reference rich text.
     */
    get rem(): (rem: string | Rem) => RichTextBuilder;
    /**
     * Create a new rich text builder with plain or formatted rich text.
     */
    get text(): (text: string, formats?: ("bold" | "italic" | "underline" | "Red" | "Orange" | "Yellow" | "Green" | "Blue" | "Purple" | "quote")[]) => RichTextBuilder;
    /**
     * Create a new rich text builder with audio rich text.
     */
    get audio(): (url: string) => RichTextBuilder;
    /**
     * Create a new rich text builder with latex rich text.
     */
    get latex(): (text: string, block?: boolean) => RichTextBuilder;
    /**
     * Create a new rich text builder with video rich text.
     */
    get video(): (url: string) => RichTextBuilder;
    /**
     * Create a new rich text builder with newline rich text.
     */
    get newline(): () => RichTextBuilder;
    /**
     * Converts a string index position to the index of a rich text element within a rich text element array.
     * This method can be used for example to convert the user's caret position to the index of the rich text element the user's caret is inside of.
     */
    indexOfElementAt: (richText: RichTextInterface, position: number) => Promise<number>;
    /**
     * Clean and normalize the RichText.
     */
    normalize: (richText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Remove a RichText format from a range of RichText
     */
    removeTextFormatFromRange: (text: RichTextInterface, start: number, end: number, formatName: RichTextFormatName) => Promise<any>;
    /**
     * Apply RichText formatting to a range of RichText
     */
    applyTextFormatToRange: (text: RichTextInterface, start: number, end: number, formatName: RichTextFormatName) => Promise<any>;
    /**
     * Toggle RichText formatting over a range of RichText
     */
    toggleTextFormatOnRange: (text: RichTextInterface, start: number, end: number, formatName: RichTextFormatName) => Promise<any>;
    replaceAllRichText: (richText: RichTextInterface, findText: RichTextInterface, replacementText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Split RichText using RichText.
     */
    splitRichText: (richText: RichTextInterface, splitText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Check if the RichText is empty.
     */
    empty: (richText: RichTextInterface, allowSpaces?: boolean) => Promise<boolean>;
    /**
     * Get the first index of a character in RichText.
     */
    indexOf: (richText: RichTextInterface, character: string, startChar?: number) => Promise<number>;
    /**
     * Convert the RichText to HTML
     */
    toHTML: (richText: RichTextInterface) => Promise<string>;
    /**
     * Get the length of the RichText
     */
    length: (richText: RichTextInterface) => Promise<number>;
    /**
     * Trim whitespace from the end of the RichText.
     */
    trimEnd: (richText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Trim whitespace from the beginning of the RichText.
     */
    trimStart: (richText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Trim whitespace from the beginning and end of the RichText.
     */
    trim: (richText: RichTextInterface) => Promise<RichTextInterface>;
    /**
     * Deep get all referenced Rem and Alias Ids from the RichText.
     */
    split: (richText: RichTextInterface, separationCharacter: string) => Promise<RichTextInterface>;
    /**
     * Deep get all referenced Rem and Alias Ids from the RichText.
     */
    deepGetRemAndAliasIdsFromRichText: (richText: RichTextInterface) => Promise<RemId[]>;
    /**
     * Deep get all referenced RemIds from the RichText.
     */
    deepGetRemIdsFromRichText: (richText: RichTextInterface) => Promise<RemId[]>;
    /**
     * Get all external urls contained in the RichText.
     */
    findAllExternalURLs: (richText: RichTextInterface) => Promise<string[]>;
    /**
     * Get all Rem and Alias Ids contained in the RichText.
     */
    getRemAndAliasIdsFromRichText: (richText: RichTextInterface) => Promise<RemId[]>;
    /**
     * Get all RemIds contained in the RichText.
     */
    getRemIdsFromRichText: (richText: RichTextInterface) => Promise<RemId[]>;
    /**
     * Check if two RichTextInterfaces are equal.
     */
    equals: (richText1: RichTextInterface, richText2: RichTextInterface) => Promise<boolean>;
    /**
     * Returns the substring at the specified location within a RichTextInterface
     */
    substring: (richText: RichTextInterface, start: number, end?: number) => Promise<RichTextInterface>;
    /**
     * Returns the character at the specified index.
     */
    charAt: (richText: RichTextInterface, index: number) => Promise<string | null>;
    /**
     * Convert a RichTextInterface to a normal string.
     */
    toString: (richText: RichTextInterface) => Promise<string>;
    /**
     * Convert a RichTextInterface to markdown.
     */
    toMarkdown: (richText: RichTextInterface) => Promise<string>;
    /**
     * Create a RichTextInterface from markdown.
     */
    parseFromMarkdown: (markdown: string) => Promise<RichTextInterface>;
}
