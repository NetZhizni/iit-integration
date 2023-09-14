import { EndUserError } from "./EndUserError";
import { EndUserSignInfo } from "./EndUserSignInfo";
import { EndUserSenderInfo } from "./EndUserSenderInfo";
/**
 * Tax report.
 * @property <string> name - The report file name.
 * @property <Uint8Array> data - The report file data before protection and protected data after.
 * @property <EndUserError> error - The report protection error.
 * @property <Uint8Array> signedData - The report file data after signing (before enveloping). Used to return intermediate result of report protection.
 */
export declare class EndUserTaxReport {
    name: string;
    data: Uint8Array;
    error: EndUserError;
    signedData?: Uint8Array;
}
/**
 * Tax receipt.
 * @property <Uint8Array> data - The receipt file data before unprotection and unprotected data after.
 * @property <number> receiptNumber - The receipt number
 * @property <EndUserSignInfo| EndUserSenderInfo> initiators - The receipt signers and senders information
 * @property <EndUserError> error - The receipt unprotection error.
 */
export declare class EndUserTaxReceipt {
    data: Uint8Array;
    receiptNumber: number;
    initiators: Array<EndUserSignInfo | EndUserSenderInfo>;
    error: EndUserError;
}
