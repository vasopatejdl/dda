import { RemId } from '..';
import { Rem } from './rem';
declare type MaybeRemOrRemId = RemId | Rem | null | undefined;
export declare function getRemId<T extends MaybeRemOrRemId>(remOrRemId: T): T extends null ? null : T extends undefined ? undefined : RemId;
export declare const getRemIds: (remOrRemIds: (RemId | Rem)[]) => string[];
export {};
