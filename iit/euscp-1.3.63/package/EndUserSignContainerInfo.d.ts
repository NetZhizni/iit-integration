import { EndUserSignContainerType, EndUserCAdESType, EndUserXAdESType, EndUserASiCType, EndUserASiCSignType } from "./EndUserConstants";
/**
 * Sign container info.
 */
export declare class EndUserSignContainerInfo {
    type: EndUserSignContainerType;
    subType: EndUserCAdESType | EndUserXAdESType | EndUserASiCType;
    asicSignType: EndUserASiCSignType;
    constructor();
}
