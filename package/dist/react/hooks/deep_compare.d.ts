import React from 'react';
declare type UseEffectParams = Parameters<typeof React.useEffect>;
declare type EffectCallback = UseEffectParams[0];
declare type DependencyList = UseEffectParams[1];
declare type UseEffectReturn = ReturnType<typeof React.useEffect>;
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
export declare function useDeepCompareMemoize<T>(value: T): T;
export declare function useDeepCompareEffectNoCheck(callback: EffectCallback, dependencies: DependencyList): UseEffectReturn;
export {};
