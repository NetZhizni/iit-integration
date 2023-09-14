import { EndUserCertificate } from "./EndUserCertificate";
/**
 * JKS private key information.
 */
export declare class EndUserJKSPrivateKeyInfo {
    alias: string;
    privateKey: Uint8Array;
    certificates: Array<EndUserCertificate>;
    digitalStamp: boolean;
}
