import * as EndUserError from "./EndUserError";
import { EndUserLibraryInfoSW, EndUserLibraryInfoJS } from "./EndUserLibraryInfo";
import { CASettings, KSPSettings, EndUserSettings, EndUserProxySettings } from "./EndUserSettings";
import { EndUserOwnerInfo } from "./EndUserOwnerInfo";
import { EndUserCertificateInfoEx } from "./EndUserCertificateInfoEx";
import { EndUserCertificate } from "./EndUserCertificate";
import { EndUserKeyMedia } from "./EndUserKeyMedia";
import { EndUserJKSPrivateKeyInfo } from "./EndUserJKSPrivateKeyInfo";
import { EndUserContext, EndUserPrivateKeyContext } from "./EndUserContexts";
import { EndUserLibraryType, EndUserSignType, EndUserMobileOperatorID, EndUserKSP, EndUserCCSType, EndUserRevocationReason, EndUserKeysType, EndUserKeysLengthDSUA, EndUserKeysLengthKEPUA, EndUserKeysLengthDSRSA, EndUserSignAlgo, EndUserHashAlgo, EndUserEventType, EndUserASiCType, EndUserASiCSignType, EndUserXAdESType, EndUserXAdESSignLevel } from "./EndUserConstants";
import * as EndUserConstants from "./EndUserConstants";
import { EndUserTaxReport, EndUserTaxReceipt } from "./EndUserTaxReports";
import { EndUserTimeInfo } from "./EndUserTimeInfo";
import { EndUserSignContainerInfo } from "./EndUserSignContainerInfo";
import { EndUserSignInfo } from "./EndUserSignInfo";
import { EndUserSenderInfo } from "./EndUserSenderInfo";
import { EndUserParams } from "./EndUserParams";
import { EndUserInfo } from "./EndUserInfo";
import { EndUserRequestInfo } from "./EndUserRequestInfo";
import { EndUserEventListener } from "./EndUserEvents";
import { EndUserClientRegistrationToken } from "./EndUserClientRegistrationToken";
import * as EndUserEvents from "./EndUserEvents";
declare type NamedData = {
    name: string;
    val: string | Uint8Array;
};
/**
 * EndUser library object
 */
declare class EndUser {
    private m_library;
    /**
     * Create library instance
     * @param url The url for euscp.worker.js. Optional parameter.
     * @param libType The library type. Optional parameter. Default JavaScript.
     */
    constructor(url?: string, libType?: EndUserLibraryType | number);
    /**
     * Add event listener to receive notifications from library
     * @param eventType The event type.
     * @param listener The listener handler.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    AddEventListener(eventType: EndUserEventType, listener: EndUserEventListener): Promise<void>;
    /**
     * Get library information
     * @param downloadsURL The download URL for installations, user manuals and etc. If null default one is used.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetLibraryInfo(downloadsURL?: string): Promise<EndUserLibraryInfoJS | EndUserLibraryInfoSW>;
    /**
     * Check library initialize status
     * @returns A Promise for the completion of which ever callback is executed.
     */
    IsInitialized(): Promise<boolean>;
    /**
     * Load and initialize library
     * @param settings The settings to initialize library.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    Initialize(settings: EndUserSettings): Promise<void>;
    /**
     * Set library runtime parameter
     * @param name The name of runtime parameter
     * @param value The value of runtime parameter
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SetRuntimeParameter(name: string, value: number | boolean | EndUserSignType): Promise<void>;
    /**
     * Get parameter from the library storage
     * @param name The name of the parameter
     * @param protect The boolean value that specifies whether to get parameter from the common or protected library storage
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetStorageParameter(name: string, protect?: boolean): Promise<string>;
    /**
     * Set parameter to the library storage
     * @param name The name of the parameter
     * @param value The value of the parameter. The maximum parameter size must be less then 0x7FFF
     * @param protect The boolean value that specifies whether to set parameter to the common or protected library storage
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SetStorageParameter(name: string, value: string, protect?: boolean): Promise<void>;
    /**
     * Get settings for CA`s servers
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetCAs(): Promise<Array<CASettings>>;
    /**
     * Get library proxy server settings
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetProxySettings(): Promise<EndUserProxySettings>;
    /**
     * Set library proxy server settings
     * @param settings The proxy server settings.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SetProxySettings(settings: EndUserProxySettings): Promise<void>;
    /**
     * Get connected private key medias
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetKeyMedias(): Promise<Array<EndUserKeyMedia>>;
    /**
     * Get private keys information from jks container
     * @param jks The private jks container in array of bytes.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetJKSPrivateKeys(jks: Uint8Array): Promise<Array<EndUserJKSPrivateKeyInfo>>;
    /**
     * Check private key status
     * @returns A Promise for the completion of which ever callback is executed.
     */
    IsPrivateKeyReaded(): Promise<boolean>;
    /**
     * Reset private key
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ResetPrivateKey(): Promise<void>;
    /**
     * Reset running KSP operation
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ResetOperationKSP(): Promise<void>;
    /**
     * Read private key from key media
     * @param keyMedia The key media.
     * @param certs The private key certificates.
     * @param caCN The CA common name that issued private key certificates.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ReadPrivateKey(keyMedia: EndUserKeyMedia, certs?: Array<Uint8Array>, caCN?: string): Promise<EndUserOwnerInfo>;
    /**
     * Read private key from array of bytes
     * @param privateKey The private key in array of bytes.
     * @param password The private key password.
     * @param certs The private key certificates.
     * @param caCN The CA common name that issued private key certificates.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ReadPrivateKeyBinary(privateKey: Uint8Array, password: string, certs?: Array<Uint8Array>, caCN?: string): Promise<EndUserOwnerInfo>;
    /**
     * Read private key from SIM-card
     * @param msisdn The msisdn of SIM-card
     * @param operatorId The mobile operator id
     * @param getCerts The boolean value that specifies to get user certificates
     * @param keyId The private key identifier
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ReadPrivateKeySIM(msisdn: string, operatorId: EndUserMobileOperatorID | number, getCerts?: boolean, keyId?: number): Promise<EndUserOwnerInfo>;
    /**
     * Read private key using KSP
     * @param userId The user identifier
     * @param ksp The key service provider identifier or name
     * @param getCerts The boolean value that specifies to get user certificates
     * @param keyId The private key identifier
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ReadPrivateKeyKSP(userId: string, ksp: EndUserKSP | number | string, getCerts?: boolean, keyId?: number): Promise<EndUserOwnerInfo>;
    /**
     * Get read private key certificates
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetOwnCertificates(): Promise<Array<EndUserCertificate>>;
    /**
     * Get read private key user information from CA (CA`s limited support)
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetOwnEUserParams(): Promise<EndUserParams>;
    /**
     * Change own certificates status
     * @param requestType The request type to change certificate status.
     * @param revocationReason The revocation reason of change certificate status.
     */
    ChangeOwnCertificatesStatus(requestType: EndUserCCSType | number, revocationReason: EndUserRevocationReason | number): Promise<void>;
    /**
     * Make new certificate for private key
     * @param oldKeyMedia The key media with old private key. If old private key is an array of bytes use null.
     * @param oldPrivateKey The old private key in array of bytes. If old private key on key media use null.
     * @param oldPrivateKeyPassword The password for old private key in array of bytes. If old private key on key media use null.
     * @param uaKeysType The type of new keys for UA algorithms.
     * @param uaDSKeysSpec The size of new keys for digital signature for UA algorithms.
     * @param useDSKeyAsKEP The boolean value that specifies whether to use digital signature key as KEP.
     * @param uaKEPKeysSpec The size of new keys for KEP for UA algorithms.
     * @param uaParamsPath The path with new keys parameters for UA algorithms.
     * @param internationalKeysType The type of new keys for international algorithms.
     * @param internationalKeysSpec The size of new keys for international DS and KEP algorithms.
     * @param internationalParamsPath The path with new keys parameters for international algorithms.
     * @param newKeyMedia The key media for new private key. To generate new key as an array of bytes use null.
     * @param newPrivateKeyPassword The password for new private key in array of bytes. If new private key on key media use null.
     * @param caCN The CA common name that issued private key certificates.
     * @param euParams The user information for new certificate (CA`s limited support).
     * @param onReadedKey The boolean value that specifies to make certificate for readed key
     * @param newUserId The user identifier for new key
     * @param newKSP The key service provider identifier or name for new key
     * @returns A Promise for the completion of which ever callback is executed.
     */
    MakeNewCertificate(oldKeyMedia: EndUserKeyMedia, oldPrivateKey: Uint8Array, oldPrivateKeyPassword: string, uaKeysType: EndUserKeysType | number, uaDSKeysSpec: EndUserKeysLengthDSUA | number, useDSKeyAsKEP: boolean, uaKEPKeysSpec: EndUserKeysLengthKEPUA | number, uaParamsPath: string, internationalKeysType: EndUserKeysType | number, internationalKeysSpec: EndUserKeysLengthDSRSA | number, internationalParamsPath: string, newKeyMedia: EndUserKeyMedia, newPrivateKeyPassword: string, caCN?: string, euParams?: EndUserParams, onReadedKey?: boolean, newUserId?: string, newKSP?: EndUserKSP | number | string): Promise<{
        key?: Uint8Array;
        certs: Array<EndUserCertificate>;
    }>;
    /**
     * Make device(technical) certificate using readed private key
     * @param deviceName The device name.
     * @param uaRequest The UA certificate request in array of bytes.
     * @param uaKEPRequest The UA KEP certificate request in array of bytes.
     * @param internationalRequest The international certificate request in array of bytes.
     * @param ecdsaRequest The ECDSA certificate request in array of bytes.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    MakeDeviceCertificate(deviceName: string, uaRequest: Uint8Array, uaKEPRequest: Uint8Array, internationalRequest: Uint8Array, ecdsaRequest: Uint8Array): Promise<Array<EndUserCertificate>>;
    /**
     * Change private key password for key media
     * @param keyMedia The key media.
     * @param newPassword The new private key password.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ChangePrivateKeyPassword(keyMedia: EndUserKeyMedia, newPassword: string): Promise<void>;
    /**
     * Change private key password for software(file) key
     * @param privateKey The private key in array of bytes.
     * @param password The private key password.
     * @param newPassword The new private key password.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ChangePrivateKeyPasswordBinary(privateKey: Uint8Array, password: string, newPassword: string): Promise<Uint8Array>;
    /**
     * Generate new private key to key media
     * @param keyMedia The key media. Old private key will be deleted.
     * @param setKeyMediaPassword The boolean value that specifies whether set new key media password (preformat key media).
     * @param uaKeysType The type of new keys for UA algorithms.
     * @param uaDSKeysSpec The size of new keys for digital signature for UA algorithms.
     * @param useDSKeyAsKEP The boolean value that specifies whether to use digital signature key as KEP.
     * @param uaKEPKeysSpec The size of new keys for KEP for UA algorithms.
     * @param uaParamsPath The path with new keys parameters for UA algorithms.
     * @param internationalKeysType The type of new keys for international algorithms.
     * @param internationalKeysSpec The size of new keys for international DS and KEP algorithms.
     * @param internationalParamsPath The path with new keys parameters for international algorithms.
     * @param endUserInfo The end user information for make full certificate request. To generate simple request use null.
     * @param extKeyUsages The string with extended key usages OIDs separated by ';'.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GeneratePrivateKey(keyMedia: EndUserKeyMedia, setKeyMediaPassword: boolean, uaKeysType: EndUserKeysType | number, uaDSKeysSpec: EndUserKeysLengthDSUA | number, useDSKeyAsKEP: boolean, uaKEPKeysSpec: EndUserKeysLengthKEPUA | number, uaParamsPath: string, internationalKeysType: EndUserKeysType | number, internationalKeysSpec: EndUserKeysLengthDSRSA | number, internationalParamsPath: string, endUserInfo?: EndUserInfo, extKeyUsages?: string): Promise<{
        requests: Array<EndUserRequestInfo>;
    }>;
    /**
     * Generate new private key binary
     * @param password The password for new private key.
     * @param uaKeysType The type of new keys for UA algorithms.
     * @param uaDSKeysSpec The size of new keys for digital signature for UA algorithms.
     * @param useDSKeyAsKEP The boolean value that specifies whether to use digital signature key as KEP.
     * @param uaKEPKeysSpec The size of new keys for KEP for UA algorithms.
     * @param uaParamsPath The path with new keys parameters for UA algorithms.
     * @param internationalKeysType The type of new keys for international algorithms.
     * @param internationalKeysSpec The size of new keys for international DS and KEP algorithms.
     * @param internationalParamsPath The path with new keys parameters for international algorithms.
     * @param endUserInfo The end user information for make full certificate request. To generate simple request use null.
     * @param extKeyUsages The string with extended key usages OIDs separated by ';'.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GeneratePrivateKeyBinary(password: string, uaKeysType: EndUserKeysType | number, uaDSKeysSpec: EndUserKeysLengthDSUA | number, useDSKeyAsKEP: boolean, uaKEPKeysSpec: EndUserKeysLengthKEPUA | number, uaParamsPath: string, internationalKeysType: EndUserKeysType | number, internationalKeysSpec: EndUserKeysLengthDSRSA | number, internationalParamsPath: string, endUserInfo?: EndUserInfo, extKeyUsages?: string): Promise<{
        key: Uint8Array;
        requests: Array<EndUserRequestInfo>;
    }>;
    /**
     * Get key info from key media
     * @param keyMedia The key media.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetKeyInfo(keyMedia: EndUserKeyMedia): Promise<Uint8Array>;
    /**
     * Get key info from binary private key
     * @param privateKey The private key in array of bytes.
     * @param password The private key password.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetKeyInfoBinary(privateKey: Uint8Array, password: string): Promise<Uint8Array>;
    /**
     * Get client registration token to register on the KSP
     * @param ksp The key service provider identifier or name
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetClientRegistrationTokenKSP(ksp: EndUserKSP | number | string): Promise<EndUserClientRegistrationToken>;
    /**
     * Hash data using specified hash algorithm
     * @param hashAlgo The hash algorithm.
     * @param data The data to hash (Data in string will be converted to a byte array).
     * @param asBase64String The boolean value that specifies whether to encode a hash into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    HashData(hashAlgo: EndUserHashAlgo | number, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Get signer certificate from signature without signature verification
     * @param sign The signature value (Signature in string will be decoded from BASE64 string).
     * @param signIndex The sign index to get signer certificate. For signIndex = -1, all signers certificates will be returned.
     * @param resolveOIDs The boolean value that specifies whether to resolve OIDs in certificate information.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetSigner(sign: Uint8Array | string, signIndex?: number, resolveOIDs?: boolean): Promise<EndUserCertificate | Array<EndUserCertificate>>;
    /**
     * Sign data using private key by DSTU-4145-2002 signature algorithm and GOST34.311 hash (The signature will not contain the signed data)
     * @param data The data to sign (Data in string will be converted to a byte array).
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SignData(data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, asBase64String?: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Sign data using private key by DSTU-4145-2002 signature algorithm and GOST34.311 hash (The signature will contain the signed data)
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param data The data to sign (Data in string will be converted to a byte array).
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SignDataInternal(appendCert: boolean, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, asBase64String?: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Sign hash using private key
     * @param signAlgo The algorithm of the signature.
     * @param hash The hash to sign (Hash in string will be decoded from BASE64 string).
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SignHash(signAlgo: EndUserSignAlgo | number, hash: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String?: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Sign data using private key (Extended analogue of SignData, SignDataInternal functions)
     * @param signAlgo The algorithm of the signature.
     * @param data The data to sign (Data in string will be converted to a byte array).
     * @param external The boolean value that specifies whether to not append data into signature.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    SignDataEx(signAlgo: EndUserSignAlgo | number, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, external: boolean, appendCert: boolean, asBase64String?: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Append sign to existing signature using private key
     * @param signAlgo The algorithm of the signature. The signature and previous signature algorithm must be the same.
     * @param data The data that has been signed (Data in string will be converted to a byte array). For previous signature that contain signed data value must be null.
     * @param previousSign The previous signature value. The previous signature should not contain the signature of the read private key.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    AppendSign(signAlgo: EndUserSignAlgo | number, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, previousSign: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String?: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Append sign of hash to existing signature using private key
     * @param signAlgo The algorithm of the signature. The signature and previous signature algorithm must be the same.
     * @param hash The hash that has been signed (Hash in string will be decoded from BASE64 string). The hash and previous hash must be the same.
     * @param previousSign The previous signature value. The previous signature should not contain the signature of the read private key.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    AppendSignHash(signAlgo: EndUserSignAlgo | number, hash: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, previousSign: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Verify signature for hash value
     * @param hash The hash to verify (Hash in string will be decoded from BASE64 string).
     * @param sign The signature value to verify (Signature in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    VerifyHash(hash: Uint8Array | string, sign: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Verify signature that does not contain the signed data
     * @param data The data to verify (Data in string will be converted to a byte array).
     * @param sign The signature value to verify (Signature in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    VerifyData(data: Uint8Array | string, sign: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Verify signature that contains the signed data
     * @param sign The signature value to verify (Signature in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    VerifyDataInternal(sign: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Envelop data using the sender`s private key and recipients certificates by GOST28147-2009 and DSTU-4145 algorithms
     * @param recipientsCerts The recipients certificates.
     * @param data The data to envelop (Data in string will be converted to a byte array).
     * @param signData The boolean value that specifies whether to sign encrypted data.
     * @param appendCert The boolean value that specifies whether to append sender`s certificate into enveloped data.
     * @param asBase64String The boolean value that specifies whether to encode a enveloped data into a BASE64 string.
     * @param useDynamicKey The boolean value that specifies whether to use sender`s dynamic key for envelop data. Optional parameter.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    EnvelopData(recipientsCerts: Array<Uint8Array>, data: Uint8Array | string, signData: boolean, appendCert: boolean, asBase64String: boolean, useDynamicKey?: boolean): Promise<Uint8Array | string>;
    /**
     * Develop data using private key by GOST28147-2009 and DSTU-4145 algorithms
     * @param envelopedData The enveloped data (Enveloped data in string will be decoded from BASE64 string).
     * @param senderCert The sender certificate. Optional parameter.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    DevelopData(envelopedData: Uint8Array | string, senderCert?: Uint8Array): Promise<EndUserSenderInfo>;
    /**
     * Protect data using password by GOST28147-2009
     * @param data The data to protect (Data in string will be converted to a byte array).
     * @param password The password to protect data.
     * @param asBase64String The boolean value that specifies whether to encode a protected data into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ProtectDataByPassword(data: string | Uint8Array, password: string, asBase64String: boolean): Promise<Uint8Array | string>;
    /**
     * Unprotect data using password by GOST28147-2009
     * @param data The protected data (Protected data in string will be decoded from BASE64 string).
     * @param password The password to unprotect data.
     * @param asString The boolean value that specifies whether to decode unprotected data from byte array to string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    UnprotectDataByPassword(data: string | Uint8Array, password: string, asString: boolean): Promise<Uint8Array | string>;
    /**
     * Create authentication data using nonce and server certificate
     * @param serverCert The authentication server certificate for DSTU-4145 key exchange protocol.
     * @param nonce The nonce from server (Nonce in string will be converted to a byte array).
     * @param asBase64String The boolean value that specifies whether to encode a auth data into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CreateAuthData(serverCert: Uint8Array, nonce: string | Uint8Array, asBase64String: boolean): Promise<Uint8Array | string>;
    /**
     * Get timestamp for hash from TSP server
     * @param hashAlgo The hash algorithm.
     * @param hash The hash for timestamp (Hash in string will be decoded from BASE64 string).
     * @param accessInfo The TSP server access URI
     * @param accessInfoPort The TSP server access port
     * @param asBase64String The boolean value that specifies whether to encode a timestamp into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetTSPByAccessInfo(hashAlgo: EndUserHashAlgo, hash: Uint8Array | string, accessInfo: string, accessInfoPort: string, asBase64String: boolean): Promise<Uint8Array | string>;
    /**
     * Check timestamp for hash
     * @param tsp The timestamp.
     * @param hashAlgo The hash algorithm.
     * @param hash The hash for timestamp (Hash in string will be decoded from BASE64 string).
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CheckTSP(tsp: Uint8Array | string, hashAlgo: EndUserHashAlgo, hash: Uint8Array | string): Promise<void>;
    /**
     * Create context
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxCreate(): Promise<EndUserContext>;
    /**
     * Free context
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxFree(context: EndUserContext): Promise<void>;
    /**
     * Set library context runtime parameter
     * @param context The context that assosiated with private key. If null default one is used
     * @param name The name of runtime parameter
     * @param value The value of runtime parameter
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxSetParameter(context: EndUserContext, name: string, value: number | boolean): Promise<void>;
    /**
     * Read private key from key media to context
     * @param context The context that assosiated with private key. If null default one is used
     * @param keyMedia The key media.
     * @param certs The private key certificates.
     * @param caCN The CA common name that issued private key certificates.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxReadPrivateKey(context: EndUserContext, keyMedia: EndUserKeyMedia, certs?: Array<Uint8Array>, caCN?: string): Promise<EndUserPrivateKeyContext>;
    /**
     * Read private key from array of bytes to context
     * @param context The context that assosiated with private key. If null default one is used
     * @param privateKey The private key in array of bytes.
     * @param password The private key password.
     * @param certs The private key certificates.
     * @param caCN The CA common name that issued private key certificates.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxReadPrivateKeyBinary(context: EndUserContext, privateKey: Uint8Array, password: string, certs?: Array<Uint8Array>, caCN?: string): Promise<EndUserPrivateKeyContext>;
    /**
     * Free private key context
     * @param privateKeyContext The private key context
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxFreePrivateKey(privateKeyContext: EndUserPrivateKeyContext): Promise<void>;
    /**
     * Get private key context certificates
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxGetOwnCertificates(privateKeyContext: EndUserPrivateKeyContext): Promise<Array<EndUserCertificate>>;
    /**
     * Sign hash using private key context
     * @param privateKeyContext The private key context using for sign.
     * @param signAlgo The algorithm of the signature.
     * @param hash The hash to sign (Hash in string will be decoded from BASE64 string).
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxSignHash(privateKeyContext: EndUserPrivateKeyContext, signAlgo: EndUserSignAlgo | number, hash: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Sign data using private key context
     * @param privateKeyContext The private key context using for sign.
     * @param signAlgo The algorithm of the signature.
     * @param data The data to sign (Data in string will be converted to a byte array).
     * @param external The boolean value that specifies whether to not append data into signature.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxSignData(privateKeyContext: EndUserPrivateKeyContext, signAlgo: EndUserSignAlgo | number, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, external: boolean, appendCert: boolean, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Append sign of hash to existing signature using private key context
     * @param privateKeyContext The private key context using for new sign.
     * @param signAlgo The algorithm of the signature. The signature and previous signature algorithm must be the same.
     * @param hash The hash that has been signed (Hash in string will be decoded from BASE64 string). The hash and previous hash must be the same.
     * @param previousSign The previous signature value. The previous signature should not contain the signature of the read private key.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxAppendSignHash(privateKeyContext: EndUserPrivateKeyContext, signAlgo: EndUserSignAlgo | number, hash: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, previousSign: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Append sign to existing signature using private key context
     * @param privateKeyContext The private key context using for new sign.
     * @param signAlgo The algorithm of the signature. The signature and previous signature algorithm must be the same.
     * @param data The data that has been signed (Data in string will be converted to a byte array). For previous signature that contain signed data value must be null.
     * @param previousSign The previous signature value. The previous signature should not contain the signature of the read private key.
     * @param appendCert The boolean value that specifies whether to append certificate into signature.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxAppendSign(privateKeyContext: EndUserPrivateKeyContext, signAlgo: EndUserSignAlgo | number, data: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, previousSign: string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>, appendCert: boolean, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Envelop data using the sender`s private key context and recipients certificates by GOST28147-2009 and DSTU-4145 algorithms
     * @param privateKeyContext The private key context using for envelop.
     * @param recipientsCerts The recipients certificates.
     * @param data The data to envelop (Data in string will be converted to a byte array).
     * @param signData The boolean value that specifies whether to sign encrypted data.
     * @param appendCert The boolean value that specifies whether to append sender`s certificate into enveloped data.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @param useDynamicKey The boolean value that specifies whether to use sender`s dynamic key for envelop data. Optional parameter.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxEnvelopData(privateKeyContext: EndUserPrivateKeyContext, recipientsCerts: Array<Uint8Array>, data: Uint8Array | string, signData: boolean, appendCert: boolean, asBase64String: boolean, useDynamicKey?: boolean): Promise<Uint8Array | string>;
    /**
     * Develop data using private key context by GOST28147-2009 and DSTU-4145 algorithms
     * @param privateKeyContext The private key context using for develop.
     * @param envelopedData The enveloped data (Enveloped data in string will be decoded from BASE64 string).
     * @param senderCert The sender certificate. Optional parameter.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    CtxDevelopData(privateKeyContext: EndUserPrivateKeyContext, envelopedData: Uint8Array | string, senderCert?: Uint8Array): Promise<EndUserSenderInfo>;
    /**
     * Protect tax reports
     * @param accountantPrivateKeyContext The accountant private key context using for sign report. Optional parameter.
     * @param directorPrivateKeyContext The director private key context (or array of 2 private key contexts if key for sign and envelop stored separately) using for sign and envelop(if no stamp) report. Optional parameter.
     * @param stampPrivateKeyContext The stamp private key context (or array of 2 private key contexts if key for sign and envelop stored separately) using for sign and envelop report. Optional parameter.
     * @param senderEMail The sender EMail.
     * @param recipientCertificate The recipient certificate.
     * @param reports The reports to protect.
     * @param returnIntermediateSign The boolean value that specifies whether to return signed report (intermediate result of report protection before evenloping).
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ProtectTaxReports(accountantPrivateKeyContext: EndUserPrivateKeyContext, directorPrivateKeyContext: EndUserPrivateKeyContext | Array<EndUserPrivateKeyContext>, stampPrivateKeyContext: EndUserPrivateKeyContext | Array<EndUserPrivateKeyContext>, senderEMail: string, recipientCertificate: Uint8Array, reports: Array<EndUserTaxReport>, returnIntermediateSign?: boolean): Promise<Array<EndUserTaxReport>>;
    /**
     * Unprotect tax receipts
     * @param directorOrStampPrivateKeyContext The director or stamp private key context using for develop report.
     * @param receipts The receipts to unprotect.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    UnprotectTaxReceipts(directorOrStampPrivateKeyContext: EndUserPrivateKeyContext, receipts: Array<EndUserTaxReceipt>): Promise<Array<EndUserTaxReceipt>>;
    /**
     * Get signer certificate from ASiC (Associated Signature Container) without signature verification
     * @param asicData The ASiC data value (ASiC data in string will be decoded from BASE64 string).
     * @param signIndex The sign index to get signer certificate. For signIndex = -1, all signers certificates will be returned.
     * @param resolveOIDs The boolean value that specifies whether to resolve OIDs in certificate information.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ASiCGetSigner(asicData: Uint8Array | string, signIndex?: number, resolveOIDs?: boolean): Promise<EndUserCertificate | Array<EndUserCertificate>>;
    /**
     * Create ASiC (Associated Signature Container) using private key
     * @param signAlgo The algorithm of the signature.
     * @param asicType The ASiC type (ASiC-S or ASiC-E).
     * @param signType The ASiC signature type (CAdES or XAdES).
     * @param signLevel The ASiC signature level (XAdES (-B-B, -B-T, -B-LT, -B-LTA) or CAdES (-BES, -T, -C, -X-Long etc)).
     * @param references The references of file(s) to sign.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ASiCSignData(signAlgo: EndUserSignAlgo | number, asicType: EndUserASiCType | number, signType: EndUserASiCSignType | number, signLevel: EndUserSignType | EndUserXAdESSignLevel | number, references: Array<NamedData>, asBase64String: boolean): Promise<NamedData>;
    /**
     * Create ASiC (Associated Signature Container) using private key
     * @param signAlgo The algorithm of the signature.
     * @param signLevel The ASiC signature level (XAdES (-B-B, -B-T, -B-LT, -B-LTA) or CAdES (-BES, -T, -C, -X-Long etc)).
     * @param referencesNames The references names of file(s) to sign in container or null to sign all.
     * @param asicData The ASiC to append sign (ASiC in string will be decoded from BASE64 string).
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ASiCAppendSign(signAlgo: EndUserSignAlgo | number, signLevel: EndUserSignType | EndUserXAdESSignLevel | number, referencesNames: Array<string>, asicData: Uint8Array | string | NamedData, asBase64String: boolean): Promise<NamedData>;
    /**
     * Verify ASiC (Associated Signature Container)
     * @param asicData The ASiC to verify (ASiC in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    ASiCVerifyData(asicData: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Get signer certificate from PAdES (PDF Advanced Electronic Signature) without signature verification
     * @param signedPDFData The signed PDF-file data (Data in string will be decoded from BASE64 string).
     * @param signIndex The sign index to get signer certificate. For signIndex = -1, all signers certificates will be returned.
     * @param resolveOIDs The boolean value that specifies whether to resolve OIDs in certificate information.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    PDFGetSigner(signedPDFData: Uint8Array | string, signIndex?: number, resolveOIDs?: boolean): Promise<EndUserCertificate | Array<EndUserCertificate>>;
    /**
     * Create PAdES (PDF Advanced Electronic Signature) using private key
     * @param signAlgo The algorithm of the signature.
     * @param pdfData The PDF-file data to sign.
     * @param signType The signature type.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    PDFSignData(signAlgo: EndUserSignAlgo | number, pdfData: Uint8Array | NamedData | Array<Uint8Array | NamedData>, signType: EndUserSignType | number, asBase64String: boolean): Promise<string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>>;
    /**
     * Verify PAdES (PDF Advanced Electronic Signature)
     * @param signedPDFData The signed PDF-file data to verify (Data in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    PDFVerifyData(signedPDFData: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Get signer certificate from XAdES without signature verification
     * @param xadesData The XAdES data value (XAdES data in string will be decoded from BASE64 string).
     * @param signIndex The sign index to get signer certificate. For signIndex = -1, all signers certificates will be returned.
     * @param resolveOIDs The boolean value that specifies whether to resolve OIDs in certificate information.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    XAdESGetSigner(xadesData: Uint8Array | string, signIndex?: number, resolveOIDs?: boolean): Promise<EndUserCertificate | Array<EndUserCertificate>>;
    /**
     * Create XAdES using private key
     * @param signAlgo The algorithm of the signature.
     * @param xadesType The XAdES type (Detached, Enveloped or Enveloping).
     * @param signLevel The XAdES signature level (-BES, -T, -C, -X-Long etc).
     * @param references The references of file(s) to sign.
     * @param asBase64String The boolean value that specifies whether to encode a signature into a BASE64 string.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    XAdESSignData(signAlgo: EndUserSignAlgo | number, xadesType: EndUserXAdESType | number, signLevel: EndUserXAdESSignLevel | number, references: Array<NamedData>, asBase64String: boolean): Promise<NamedData>;
    /**
     * Verify XAdES
     * @param references The references of file(s) to verify (used for detached signatures).
     * @param xadesData The XAdES to verify (XAdES in string will be decoded from BASE64 string).
     * @param signIndex The sign index to verify. For signIndex = -1, all signatures will be verified.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    XAdESVerifyData(references: Array<NamedData>, xadesData: Uint8Array | string, signIndex?: number): Promise<EndUserSignInfo | Array<EndUserSignInfo>>;
    /**
     * Get sign container info
     * @param signedData The signed data (CAdES, XAdES, PAdES or ASiC)
     * @returns A Promise for the completion of which ever callback is executed.
     */
    GetSignContainerInfo(signedData: Uint8Array | string): Promise<EndUserSignContainerInfo>;
}
export { NamedData, CASettings, KSPSettings, EndUserError, EndUserConstants, EndUserEvents, EndUserLibraryInfoJS, EndUserLibraryInfoSW, EndUserSettings, EndUserProxySettings, EndUserOwnerInfo, EndUserCertificateInfoEx, EndUserCertificate, EndUserKeyMedia, EndUserJKSPrivateKeyInfo, EndUserContext, EndUserPrivateKeyContext, EndUserTimeInfo, EndUserSignContainerInfo, EndUserSignInfo, EndUserSenderInfo, EndUserParams, EndUserInfo, EndUserRequestInfo, EndUserClientRegistrationToken, EndUserTaxReport, EndUserTaxReceipt, EndUser };
