import { FC } from 'react';
export declare type GhostTreeNode = {
    node: HTMLElement;
    leaf?: boolean;
    callback?: (ancestorElement: HTMLElement) => void;
    children: Map<HTMLElement, true>;
};
export declare type GhostTree = Map<HTMLElement, GhostTreeNode>;
export declare class AncestorScrollDetector {
    private tree;
    private rootNode;
    constructor(rootNode: HTMLElement);
    private handleScroll;
    /**
     * Start listenning to any scroll event in the ancestor up to the given root element.
     * @param node - The element for which ancestor scroll events should be listened to.
     * @param callback - The callback to be called when the scroll event is triggered.
     */
    addListener(node: HTMLElement, callback: (ancestorElement: HTMLElement) => void): void;
    /**
     * Stop listening to the ancestor scroll events.
     * @param node - The element for which the event listening should be removed.
     */
    removeListener(node: HTMLElement): void;
}
export declare const AncestorScrollDetectionContext: import("react").Context<AncestorScrollDetector>;
export declare const AncestorScrollDetectorProvider: FC<{
    root: HTMLElement;
}>;
export declare const useAncestorScrollDetector: () => AncestorScrollDetector;
