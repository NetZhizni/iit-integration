import { EndUserKSP, EndUserKSPClientIdType } from "./EndUserConstants";
/**
 * CA configuration.
 * @property <Array<string>> issuerCNs - An array with CA common names.
 * @property <string> address - CA server address.
 * @property <string | null> ocspAccessPointAddress - CA OCSP server access point address.
 * @property <string | null> ocspAccessPointPort - CA OCSP server access point port.
 * @property <string | null> cmpAddress - CA CMP server address.
 * @property <string | null> tspAddress - CA TSP server address.
 * @property <string | null> tspAddressPort - CA TSP server port.
 * @property <boolean> directAccess - A boolean value that specifies whether CA server supports direct access without Proxy-handler.
 * @property <boolean> certsInKey - A boolean value that specifies whether the private key container can have certificates.
 * @property <number> cmpCompatibility - CA CMP server compatibility level.
 * @property <boolean> qscdSNInCert - A boolean value that specifies whether CA server supports QSCD serial number in user certificate.
 */
export declare class CASettings {
    issuerCNs: Array<string>;
    address: string;
    ocspAccessPointAddress: string;
    ocspAccessPointPort: string;
    cmpAddress: string;
    tspAddress: string;
    tspAddressPort: string;
    directAccess: boolean;
    certsInKey: boolean;
    cmpCompatibility: number;
    qscdSNInCert: boolean;
}
/**
 * KSP configuration.
 * @property <string> name - KSP name.
 * @property <EndUserKSP> ksp - KSP type.
 * @property <string | null> address - KSP server address.
 * @property <string | null> port - KSP server port.
 * @property <boolean | false> directAccess - A boolean value that specifies whether KSP server supports direct access without Proxy-handler.
 * @property <string | null> clientIdPrefix - Client ID prefix that is added to all client IDs to identify calling system.
 * @property <string | null> confirmationURL - KSP server operation confirmation URL.
 * @property <string | null> mobileAppName - KSP server mobile application name.
 * @property <number | null> pollingInterval - KSP server polling interval in seconds.
 * @property <string | null> systemId - System identifier (website, system name, etc).
 * @property <EndUserKSPClientIdType | null> clientIdType -  Client ID type (name, phone, email).
 * @property <string | null> registrationURL - KSP server user registration URL.
 */
export declare class KSPSettings {
    name: string;
    ksp: EndUserKSP;
    address?: string;
    port?: string;
    directAccess?: boolean;
    clientIdPrefix?: string;
    confirmationURL?: string;
    mobileAppName?: string;
    pollingInterval?: number;
    systemId?: string;
    clientIdType?: EndUserKSPClientIdType;
    registrationURL?: string;
}
/**
 * Settings to configure EndUser library.
 * @property <string> language - The language of error description. Possible values "uk", "ru", "en".
 * @property <string> encoding - The encoding of string data. Possible values "UTF-8", "UTF-16LE".
 * @property <string> httpProxyServiceURL - The URL of the http proxy service (Proxy-handler) that redirects requests to the CA. Using by JavaScript and MobileID libraries.
 * @property <boolean> directAccess - A boolean value that specifies whether library supports direct access without Proxy-handler for CAs that support direct access.
 * @property <Array<CASettings> | string> CAs - An array or URL with CAs configurations.
 * @property <Uint8Array | string> CACertificates - A binary array or URL with CAs certificates.
 * @property <string> TSLAddress - A string that contains TSLs URLs in format "2-letter_country_code:url;", e.x. "UA:https://czo.gov.ua/download/tl/TL-UA-DSTU.xml;UA:https://czo.gov.ua/download/tl/TL-UA-EC.xml;EU:https://ec.europa.eu/tools/lotl/eu-lotl.xml".
 * @property <Array<string> | null> allowedKeyMediaTypes - A string array with allowed key media types. Using by SignWeb library.
 * @property <Array<{type:string, devices:Array<string>}> | null> allowedKeyMediaDevices - A string array with allowed key media devices. Using by SignWeb library.
 * @property <string> mssServiceURL - The URL of the mobile signature service (mss). Using by MobileID and KSP library (deprecated).
 * @property <string> passwordRequirements - The string with regular expression with private key password requirements.
 * @property <Array<KSPSettings>> KSPs - An array with KSPs configurations.
 * @property <boolean> allowMakeNewCertOnNewKeyMedia - A boolean value that specifies whether allow make new certificate on new key media.
 * @property <boolean> allowMakeNewCertOnFileKeyMedia - A boolean value that specifies whether allow make new certificate on file key media.
 * @property <string> downloadsURL - The URL of the SignWeb library downloads location. Allows override default SignWeb downloads location.
 * @property <boolean> supportAdvancedCertificates - A boolean value that specifies whether library support advanced certificates (not implemented).
 * @property <boolean> signInfoTmpl - An object or URL with sign info template (not implemented).
 * @property <number> connectionTimeout - Timeout for connections to CA servers in ms. Affects only for SW library type. By default set to 60s.
 * @property <number> ocspResponseExpireTime - The time interval during which the cryptolibrary trust for the response from the OCSP server in seconds. By default set to 0s, recomended 30s (used on the https://czo.gov.ua/verify), max value 3600s.
*/
export declare class EndUserSettings {
    language: string;
    encoding: string;
    httpProxyServiceURL: string;
    directAccess: boolean;
    CAs: Array<CASettings> | string;
    CACertificates: Uint8Array | string;
    TSLAddress?: string;
    allowedKeyMediaTypes?: Array<string>;
    allowedKeyMediaDevices?: Array<{
        type: string;
        devices: Array<string>;
    }>;
    mssServiceURL?: string;
    passwordRequirements?: string;
    KSPs?: Array<KSPSettings>;
    allowMakeNewCertOnNewKeyMedia?: boolean;
    allowMakeNewCertOnFileKeyMedia?: boolean;
    downloadsURL?: string;
    supportAdvancedCertificates?: boolean;
    signInfoTmpl?: any | string;
    connectionTimeout?: number;
    ocspResponseExpireTime?: number;
}
/**
 * Settings to configure EndUser library proxy server.
 * @property <boolean> useProxy - boolean value that specifies whether library use proxy server to access to the CA.
 * @property <string> address - The DNS-name or IP-address of the proxy server.
 * @property <string> port - The port of the proxy server.
 * @property <boolean> anonymous - A boolean value that specifies whether library use authentication on proxy server to access to the CA.
 * @property <string> user - The user name of the proxy server.
 * @property <string> password - The user password of the proxy server.
 * @property <boolean> savePassword - A boolean value that specifies whether library save user password.
 */
export declare class EndUserProxySettings {
    useProxy: boolean;
    address: string;
    port: string;
    anonymous: boolean;
    user: string;
    password: string;
    savePassword: boolean;
}
