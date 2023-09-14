/**
 * Library types
 * EU_LIBRARY_TYPE_JS - JavaScript - supports browsers with HTML5. Supports only private keys from files, SIM-Cards, KSP.
 * EU_LIBRARY_TYPE_SW - SignWeb - supports only desctop browsers. Supports private keys from files and hardware key medias. Requires native modules installation.
 * EU_LIBRARY_TYPE_MS - MobileID - supports browsers with HTML5. Supports private keys from SIM-Cards. Using JavaScript library.
 */
export declare const EU_LIBRARY_TYPE_JS = 1;
export declare const EU_LIBRARY_TYPE_SW = 2;
export declare const EU_LIBRARY_TYPE_MS = 3;
export declare enum EndUserLibraryType {
    JS,
    SW,
    MS
}
/**
 * Certificate subject type
 */
export declare const EU_SUBJECT_TYPE_UNDIFFERENCED = 0;
export declare const EU_SUBJECT_TYPE_CA = 1;
export declare const EU_SUBJECT_TYPE_CA_SERVER = 2;
export declare const EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
export declare const EU_SUBJECT_TYPE_END_USER = 4;
export declare enum EndUserSubjectType {
    Undifferenced,
    CA,
    CAServer,
    RAAdministrator,
    EndUser
}
/**
 * Certificate subject subtype for subject type EU_SUBJECT_TYPE_CA_SERVER
 */
export declare const EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
export declare const EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
export declare const EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
export declare const EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;
export declare enum EndUserSubjectCAServerSubType {
    Undifferenced,
    CMP,
    TSP,
    OCSP
}
/**
 * Certificate key type
 */
export declare const EU_CERT_KEY_TYPE_UNKNOWN = 0;
export declare const EU_CERT_KEY_TYPE_DSTU4145 = 1;
export declare const EU_CERT_KEY_TYPE_RSA = 2;
export declare const EU_CERT_KEY_TYPE_ECDSA = 4;
export declare enum EndUserCertKeyType {
    Unknown,
    DSTU4145,
    RSA,
    ECDSA
}
/**
 * Certificate key usage
 */
export declare const EU_KEY_USAGE_UNKNOWN = 0;
export declare const EU_KEY_USAGE_DIGITAL_SIGNATURE = 1;
export declare const EU_KEY_USAGE_NON_REPUDATION = 2;
export declare const EU_KEY_USAGE_KEY_AGREEMENT = 16;
export declare enum EndUserKeyUsage {
    Unknown,
    DigitalSignature,
    NonRepudation,
    KeyAgreement
}
/**
 * Certificate change status type
 */
export declare const EU_CCS_TYPE_REVOKE = 1;
export declare const EU_CCS_TYPE_HOLD = 2;
export declare enum EndUserCCSType {
    Revoke,
    Hold
}
/**
 * Certificate revocation reason
 */
export declare const EU_REVOCATION_REASON_UNKNOWN = 0;
export declare const EU_REVOCATION_REASON_KEY_COMPROMISE = 1;
export declare const EU_REVOCATION_REASON_NEW_ISSUED = 2;
export declare enum EndUserRevocationReason {
    Unknown,
    KeyCompromise,
    NewIssued
}
/**
 * Key types
 */
export declare const EU_KEYS_TYPE_NONE = 0;
export declare const EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST = 1;
export declare const EU_KEYS_TYPE_RSA_WITH_SHA = 2;
export declare enum EndUserKeysType {
    None,
    DSTUAndECDHWithGOST,
    RSAWithSHA
}
/**
 * UA keys length for digital signature
 */
export declare const EU_KEYS_LENGTH_DS_UA_191 = 1;
export declare const EU_KEYS_LENGTH_DS_UA_257 = 2;
export declare const EU_KEYS_LENGTH_DS_UA_307 = 3;
export declare const EU_KEYS_LENGTH_DS_UA_FILE = 4;
export declare const EU_KEYS_LENGTH_DS_UA_CERT = 5;
export declare enum EndUserKeysLengthDSUA {
    EC_191,
    EC_257,
    EC_307,
    File,
    Cert
}
/**
 * UA keys length for KEP
 */
export declare const EU_KEYS_LENGTH_KEP_UA_257 = 1;
export declare const EU_KEYS_LENGTH_KEP_UA_431 = 2;
export declare const EU_KEYS_LENGTH_KEP_UA_571 = 3;
export declare const EU_KEYS_LENGTH_KEP_UA_FILE = 4;
export declare const EU_KEYS_LENGTH_KEP_UA_CERT = 5;
export declare enum EndUserKeysLengthKEPUA {
    EC_257,
    EC_431,
    EC_571,
    File,
    Cert
}
/**
 * RSA keys length for DS
 */
export declare const EU_KEYS_LENGTH_DS_RSA_1024 = 1;
export declare const EU_KEYS_LENGTH_DS_RSA_2048 = 2;
export declare const EU_KEYS_LENGTH_DS_RSA_3072 = 3;
export declare const EU_KEYS_LENGTH_DS_RSA_4096 = 4;
export declare const EU_KEYS_LENGTH_DS_RSA_FILE = 5;
export declare const EU_KEYS_LENGTH_DS_RSA_CERT = 6;
export declare enum EndUserKeysLengthDSRSA {
    N_1024,
    N_2048,
    N_3072,
    N_4096,
    File,
    Cert
}
export declare const EU_KEYS_REQUEST_TYPE_UA_DS = 1;
export declare const EU_KEYS_REQUEST_TYPE_UA_KEP = 2;
export declare const EU_KEYS_REQUEST_TYPE_INT_RSA = 3;
export declare enum EndUserRequestTypes {
    uaDS,
    uaKEP,
    intRSA
}
/**
 * Mobile operators
 */
export declare const EU_MOBILE_OPERATOR_ID_KYIVSTAR = 1;
export declare const EU_MOBILE_OPERATOR_ID_VODAFONE = 2;
export declare const EU_MOBILE_OPERATOR_ID_LIFECELL = 3;
export declare enum EndUserMobileOperatorID {
    Kyivstar,
    Vodafone,
    Lifecell
}
/**
 * Key service providers
 */
export declare const EU_KSP_IIT = 4;
export declare const EU_KSP_UKEY = 5;
export declare const EU_KSP_PB = 6;
export declare const EU_KSP_DIIA = 7;
export declare enum EndUserKSP {
    Kyivstar,
    Vodafone,
    Lifecell,
    IIT,
    UKey,
    PB,
    DIIA
}
export declare enum EndUserKSPClientIdType {
    Default = 0,
    Name = 1,
    Phone = 2,
    Email = 3
}
export declare const EU_SIGN_TYPE_UNKNOWN = 0;
export declare const EU_SIGN_TYPE_CADES_BES = 1;
export declare const EU_SIGN_TYPE_CADES_T = 4;
export declare const EU_SIGN_TYPE_CADES_C = 8;
export declare const EU_SIGN_TYPE_CADES_X_LONG = 16;
export declare const EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128;
export declare enum EndUserSignType {
    Unknown,
    CAdES_BES,
    CAdES_T,
    CAdES_C,
    CAdES_X_Long,
    CAdES_X_Long_Trusted
}
export declare const EU_CADES_TYPE_UNKNOWN = 0;
export declare const EU_CADES_TYPE_DETACHED = 1;
export declare const EU_CADES_TYPE_ENVELOPED = 3;
export declare enum EndUserCAdESType {
    Unknown,
    Detached,
    Enveloped
}
export declare const EU_CTX_SIGN_UNKNOWN = 0;
export declare const EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1;
export declare const EU_CTX_SIGN_RSA_WITH_SHA = 2;
export declare const EU_CTX_SIGN_ECDSA_WITH_SHA = 3;
export declare enum EndUserSignAlgo {
    Unknown,
    DSTU4145WithGOST34311,
    RSAWithSHA,
    ECDSAWithSHA
}
export declare const EU_SIGN_TYPE_PARAMETER = "SignType";
export declare const EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey";
export declare const EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";
export declare const EU_USER_INFO_VERSION = 3;
export declare enum EndUserCMPCompatibility {
    None = 0,
    DownloadEUCerts = 1,
    SearchEUCerts = 2
}
export declare const EU_CTX_HASH_ALGO_UNKNOWN = 0;
export declare const EU_CTX_HASH_ALGO_GOST34311 = 1;
export declare const EU_CTX_HASH_ALGO_SHA160 = 2;
export declare const EU_CTX_HASH_ALGO_SHA224 = 3;
export declare const EU_CTX_HASH_ALGO_SHA256 = 4;
export declare enum EndUserHashAlgo {
    Unknown,
    GOST34311,
    SHA160,
    SHA224,
    SHA256
}
export declare const EU_ASIC_TYPE_UNKNOWN = 0;
export declare const EU_ASIC_TYPE_S = 1;
export declare const EU_ASIC_TYPE_E = 2;
export declare enum EndUserASiCType {
    Unknown,
    S,
    E
}
export declare const EU_ASIC_SIGN_TYPE_UNKNOWN = 0;
export declare const EU_ASIC_SIGN_TYPE_CADES = 1;
export declare const EU_ASIC_SIGN_TYPE_XADES = 2;
export declare enum EndUserASiCSignType {
    Unknown,
    CAdES,
    XAdES
}
export declare const EU_XADES_TYPE_UNKNOWN = 0;
export declare const EU_XADES_TYPE_DETACHED = 1;
export declare const EU_XADES_TYPE_ENVELOPING = 2;
export declare const EU_XADES_TYPE_ENVELOPED = 3;
export declare enum EndUserXAdESType {
    Unknown,
    Detached,
    Enveloping,
    Enveloped
}
export declare const EU_XADES_SIGN_LEVEL_UNKNOWN = 0;
export declare const EU_XADES_SIGN_LEVEL_B_B = 1;
export declare const EU_XADES_SIGN_LEVEL_B_T = 4;
export declare const EU_XADES_SIGN_LEVEL_B_LT = 16;
export declare const EU_XADES_SIGN_LEVEL_B_LTA = 32;
export declare enum EndUserXAdESSignLevel {
    Unknown,
    B_B,
    B_T,
    B_LT,
    B_LTA
}
export declare const EU_PADES_SIGN_LEVEL_UNKNOWN = 0;
export declare const EU_PADES_SIGN_LEVEL_B_B = 1;
export declare const EU_PADES_SIGN_LEVEL_B_T = 4;
export declare const EU_PADES_SIGN_LEVEL_B_LT = 16;
export declare const EU_PADES_SIGN_LEVEL_B_LTA = 32;
export declare enum EndUserPAdESSignLevel {
    Unknown,
    B_B,
    B_T,
    B_LT,
    B_LTA
}
export declare enum EndUserEventType {
    None = 0,
    All = 1,
    ConfirmKSPOperation = 2
}
export declare const EU_SIGN_CONTAINER_TYPE_UNKNOWN = 0;
export declare const EU_SIGN_CONTAINER_TYPE_CADES = 1;
export declare const EU_SIGN_CONTAINER_TYPE_XADES = 2;
export declare const EU_SIGN_CONTAINER_TYPE_PADES = 3;
export declare const EU_SIGN_CONTAINER_TYPE_ASIC = 4;
export declare enum EndUserSignContainerType {
    Unknown,
    CAdES,
    XAdES,
    PAdES,
    ASiC
}
