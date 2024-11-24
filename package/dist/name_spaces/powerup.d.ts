import { BuiltInPowerupCodes, SlotCodesForPowerup } from '../interfaces';
import { InternalCallMethod, NamespaceBase } from './base';
import { Rem } from './rem';
interface GetPowerupSlotByCodeOverload {
    /**
     * Get the the Rem representing a built-in RemNote powerup slot.
     */
    <PowerupCode extends BuiltInPowerupCodes>(powerupCode: PowerupCode, powerupSlot: SlotCodesForPowerup<PowerupCode>): Promise<Rem | undefined>;
    /**
     * Get the the Rem representing a plugin's powerup slot.
     */
    (powerupCode: string, powerupSlot: string): Promise<Rem | undefined>;
}
/**
 * # Powerup Namespace
 *
 * The API Powerup namespace. Call with `plugin.Powerup.apiMethodName()`.
 */
export declare class PowerupNamespace extends NamespaceBase {
    /** @hidden */
    constructor(_call: InternalCallMethod);
    /**
     * Get the Rem representing a powerup by its powerup code.
     *
     * Powerup codes and slot codes can either be codes defined in RemNote core or created dynamically by plugins
     */
    getPowerupByCode: (powerupCode: BuiltInPowerupCodes | string) => Promise<Rem | undefined>;
    /**
     * Get the Rem representing a powerup slot by its powerup code.
     *
     * Powerup codes and slot codes can either be codes defined in RemNote core or created dynamically by plugins
     */
    getPowerupSlotByCode: GetPowerupSlotByCodeOverload;
}
export {};
