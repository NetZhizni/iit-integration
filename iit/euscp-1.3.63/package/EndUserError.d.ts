/**
 * Possible error codes.
 */
export declare const EU_ERROR_NONE = 0;
export declare const EU_ERROR_UNKNOWN = 65535;
export declare const EU_ERROR_NOT_SUPPORTED = 65534;
export declare const EU_ERROR_NOT_INITIALIZED = 1;
export declare const EU_ERROR_BAD_PARAMETER = 2;
export declare const EU_ERROR_LIBRARY_LOAD = 3;
export declare const EU_ERROR_READ_SETTINGS = 4;
export declare const EU_ERROR_TRANSMIT_REQUEST = 5;
export declare const EU_ERROR_MEMORY_ALLOCATION = 6;
export declare const EU_WARNING_END_OF_ENUM = 7;
export declare const EU_ERROR_PROXY_NOT_AUTHORIZED = 8;
export declare const EU_ERROR_NO_GUI_DIALOGS = 9;
export declare const EU_ERROR_DOWNLOAD_FILE = 10;
export declare const EU_ERROR_WRITE_SETTINGS = 11;
export declare const EU_ERROR_CANCELED_BY_GUI = 12;
export declare const EU_ERROR_OFFLINE_MODE = 13;
export declare const EU_ERROR_KEY_MEDIAS_FAILED = 17;
export declare const EU_ERROR_KEY_MEDIAS_ACCESS_FAILED = 18;
export declare const EU_ERROR_KEY_MEDIAS_READ_FAILED = 19;
export declare const EU_ERROR_KEY_MEDIAS_WRITE_FAILED = 20;
export declare const EU_WARNING_KEY_MEDIAS_READ_ONLY = 21;
export declare const EU_ERROR_KEY_MEDIAS_DELETE = 22;
export declare const EU_ERROR_KEY_MEDIAS_CLEAR = 23;
export declare const EU_ERROR_BAD_PRIVATE_KEY = 24;
export declare const EU_ERROR_PKI_FORMATS_FAILED = 33;
export declare const EU_ERROR_CSP_FAILED = 34;
export declare const EU_ERROR_BAD_SIGNATURE = 35;
export declare const EU_ERROR_AUTH_FAILED = 36;
export declare const EU_ERROR_NOT_RECEIVER = 37;
export declare const EU_ERROR_STORAGE_FAILED = 49;
export declare const EU_ERROR_BAD_CERT = 50;
export declare const EU_ERROR_CERT_NOT_FOUND = 51;
export declare const EU_ERROR_INVALID_CERT_TIME = 52;
export declare const EU_ERROR_CERT_IN_CRL = 53;
export declare const EU_ERROR_BAD_CRL = 54;
export declare const EU_ERROR_NO_VALID_CRLS = 55;
export declare const EU_ERROR_GET_TIME_STAMP = 65;
export declare const EU_ERROR_BAD_TSP_RESPONSE = 66;
export declare const EU_ERROR_TSP_SERVER_CERT_NOT_FOUND = 67;
export declare const EU_ERROR_TSP_SERVER_CERT_INVALID = 68;
export declare const EU_ERROR_GET_OCSP_STATUS = 81;
export declare const EU_ERROR_BAD_OCSP_RESPONSE = 82;
export declare const EU_ERROR_CERT_BAD_BY_OCSP = 83;
export declare const EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND = 84;
export declare const EU_ERROR_OCSP_SERVER_CERT_INVALID = 85;
export declare const EU_ERROR_LDAP_ERROR = 97;
/**
 * Error information
 * @property <number> code - An error code.
 * @property <message> message - A localized error message.
 */
export declare class EndUserError {
    code: number;
    message: string;
}
