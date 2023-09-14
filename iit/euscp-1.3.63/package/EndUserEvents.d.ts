import { EndUserEventType } from "./EndUserConstants";
/**
 * Crypto library event. Used for notify about async events that happen repeatedly
 * @property <EndUserEventType> type - Event type.
 */
export interface EndUserEvent {
    type: EndUserEventType;
}
/**
 * Confirm KSP operation event. Used for KSPs that need private key usage confirmation (e.x. read key, sign data or hash)
 * @property <string> url - KSP server operation confirmation URL.
 * @property <string> qrCode - QR image encoded in BASE64 in BMP format.
 * @property <string> mobileAppName - KSP server mobile application name.
 * @property <Date> expireDate - Confirmation URL or QR image expire date.
 */
export declare class EndUserConfirmKSPOperationEvent implements EndUserEvent {
    type: EndUserEventType;
    url: string;
    qrCode: string;
    mobileAppName: string;
    expireDate: Date;
}
/**
 * Crypto library event listener
 */
export interface EndUserEventListener {
    (event: EndUserEvent): void;
}
