import { EndUserTimeInfo } from "./EndUserTimeInfo";
import { EndUserOwnerInfo } from "./EndUserOwnerInfo";
import { EndUserSignType, EndUserXAdESSignLevel, EndUserPAdESSignLevel } from "./EndUserConstants";
/**
 * Signature information.
 */
export declare class EndUserSignInfo {
    ownerInfo: EndUserOwnerInfo;
    timeInfo: EndUserTimeInfo;
    data?: Uint8Array;
    signLevel: EndUserSignType | EndUserXAdESSignLevel | EndUserPAdESSignLevel;
}
