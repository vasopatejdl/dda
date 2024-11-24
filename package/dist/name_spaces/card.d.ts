import { CardData, CardType, QueueInteractionScore, RemId, RepetitionStatus } from '../interfaces';
import { InternalCallMethod, NamespaceBase } from './base';
import { Rem } from './rem';
export declare const CARD_NAMESPACE = "card";
/**
 * # Card Namespace
 *
 * The API Card namespace. Call with `plugin.card.apiMethodName()`.
 */
export declare class CardNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Find a Card by its ID.
     */
    findOne: (id?: string) => Promise<Card | undefined>;
    /**
     * Get all cards in the user's knowledgebase. Note: may be slow for large
     * knowledgebases.
     */
    getAll: () => Promise<Card[]>;
    /**
     * Find many Cards by their IDs.
     */
    findMany: (ids: string[]) => Promise<Card[]>;
}
/**
 * A single Card. Obtain this object with `plugin.cards.findOne(remId)`, `rem.getCards()`, or other
 * similar methods in the `plugin.card` namespace.
 */
export declare class Card extends NamespaceBase {
    /**
     * The ID of the card.
     * */
    readonly _id: RemId;
    /**
     * The internal UUID of the Rem this card was generated from. This is stable and will never change.
     */
    readonly remId: string;
    /**
     * The type of this Card.
     * The card type can be forward, backward or cloze.
     * Clozes are represented by a cloze id string.
     */
    readonly type: CardType;
    /**
     * Unix timestamp representing when the card was created.
     */
    readonly createdAt: number;
    /**
     * The card's repetition history.
     */
    readonly repetitionHistory?: RepetitionStatus[];
    /**
     * Unix timestamp representing when the card is due to be reviewed next.
     */
    readonly nextRepetitionTime?: number;
    /**
     * The number of times in a row this card has been answered incorrectly.
     */
    readonly timesWrongInRow?: number;
    /**
     * Unix timestamp representing the last time this card was shown.
     */
    readonly lastRepetitionTime?: number;
    /** @hidden */
    constructor(card: CardData, _call: InternalCallMethod);
    private callCard;
    private callRem;
    /**
     * Get the type of this Card.
     * The card type can be forward, backward or cloze.
     * Clozes are represented by a cloze id string.
     */
    getType: () => Promise<CardType>;
    /**
     * Get the Rem this Card was generated from.
     */
    getRem: () => Promise<Rem | undefined>;
    /**
     * Remove this Card.
     */
    remove: () => Promise<void>;
    /**
     * Append a repetition with `score` to this Card's repetition history.
     */
    updateCardRepetitionStatus: (score: QueueInteractionScore) => Promise<void>;
}
