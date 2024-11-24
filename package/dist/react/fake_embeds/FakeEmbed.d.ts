import * as React from 'react';
import { RichTextInterface } from '../..';
import { EmbedComponentType, RemId } from '../../interfaces';
export interface ComponentDimensionsProps {
    height?: number | string | 'auto';
    width?: number | string | 'auto';
    maxHeight?: number | string | 'auto';
    maxWidth?: number | string | 'auto';
}
export interface CreateFakeEmbedComponentArgs extends ComponentDimensionsProps {
    type: EmbedComponentType;
    id: string;
    top: number;
    left: number;
    externalProps: any;
}
export interface RichTextEditorProps extends ComponentDimensionsProps {
    text: RichTextInterface;
    readOnly?: boolean;
    className?: string;
    singleLine?: boolean;
}
/**
 * A React component that embeds our rich text editor.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class RichTextEditor extends React.Component<RichTextEditorProps> {
    render(): JSX.Element;
}
export interface RichTextProps extends ComponentDimensionsProps {
    text: RichTextInterface;
    className?: string;
}
/**
 * A React component to view RichText.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class RichText extends React.Component<RichTextProps> {
    render(): JSX.Element;
}
export interface RemViewerProps extends ComponentDimensionsProps {
    remId: RemId | undefined;
    className?: string;
}
/**
 * A React component to view a whole Rem.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class RemViewer extends React.Component<RemViewerProps> {
    render(): JSX.Element;
}
export interface RemRichTextEditorProps extends ComponentDimensionsProps {
    remId: RemId | undefined;
    readOnly?: boolean;
    className?: string;
    singleLine?: boolean;
}
/**
 * A React component to embed a Rem with editable rich text.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class RemRichTextEditor extends React.Component<RemRichTextEditorProps> {
    render(): JSX.Element;
}
export interface RemHierarchyEditorTreeProps extends ComponentDimensionsProps {
    remId: RemId;
    className?: string;
}
/**
 * A React component to embed a whole page of the editor.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class RemHierarchyEditorTree extends React.Component<RemHierarchyEditorTreeProps> {
    render(): JSX.Element;
}
/**
 * A React component which allows you to embed a queue component.
 *
 * It supports three modes:
 * - All flashcards mode: when cardIds isn't set it returns all flashcards
 * - Folder-queue mode: when the folderId parameter is set this returns a folder queue.
 * - Controlled mode: when cardIds are set this returns a custom queue containing only those cards.
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export interface QueueProps extends ComponentDimensionsProps {
    cardIds?: string[];
    folderId?: string;
}
/**
 * A React component to embed our Queue.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class Queue extends React.Component<QueueProps> {
    render(): JSX.Element;
}
export interface LoadingSpinnerProps extends ComponentDimensionsProps {
    size?: 'small' | 'medium' | 'large' | string;
    color?: string;
    label?: string;
}
/**
 * A React component to embed a Loading Spinner.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class LoadingSpinner extends React.Component<LoadingSpinnerProps> {
    render(): JSX.Element;
}
export interface PreviewRemCardsProps extends ComponentDimensionsProps {
    remId: RemId;
    title?: string;
    dontRenderOptions?: boolean;
    verticalCards?: boolean;
}
/**
 * A React component to preview all of a Rem's cards.
 *
 * Read about [RemNote React Components](/advanced/remnote_components) for usage.
 *
 * @category Component
 */
export declare class PreviewRemCards extends React.Component<PreviewRemCardsProps> {
    render(): JSX.Element;
}
