import { EndUserTimeInfo } from "./EndUserTimeInfo";
import { EndUserOwnerInfo } from "./EndUserOwnerInfo";
/**
 * Sender information.
 */
export declare class EndUserSenderInfo {
    ownerInfo: EndUserOwnerInfo;
    timeInfo: EndUserTimeInfo;
    data: Uint8Array;
}
