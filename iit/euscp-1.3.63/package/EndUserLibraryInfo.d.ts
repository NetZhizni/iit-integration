/**
 * JavaScript library information.
 * @property <string> version - library version.
 * @property <boolean> supported - A boolean value that specifies whether library is supported.
 * @property <boolean> loaded - A boolean value that specifies whether library is loaded.
 */
export declare class EndUserLibraryInfoJS {
    version: string;
    supported: boolean;
    loaded: boolean;
    constructor();
}
/**
 * SignWeb library information.
 * @property <string> version - library version.
 * @property <boolean> supported - A boolean value that specifies whether library is supported.
 * @property <boolean> loaded - A boolean value that specifies whether library is loaded.
 * @property <boolean> isSignAgentSupported - A boolean value that specifies whether SignAgent is supported.
 * @property <boolean> isWebExtensionSupported - A boolean value that specifies whether web extension is supported.
 * @property <boolean> isNPAPISupported - A boolean value that specifies whether NPAPI is supported.
 * @property <boolean> isActiveXSupported - A boolean value that specifies whether ActiveX is supported.
 * @property <boolean> isWebExtensionInstalled - A boolean value that specifies whether web extension is installed.
 * @property <boolean> isNativeLibraryNeedUpdate - A boolean value that specifies whether native library is need update.
 * @property <string> nativeLibraryInstallURL - The URL of the native library installer.
 * @property <Array<string>> nativeLibraryInstallURLs - The array with URLs of the native library installer. Intended for operation systems that support more then 1 install package type, e.x. Linux: deb, rpm, tar.
 * @property <string> nativeLibraryUpdateURL - The URL of the native library updater.
 * @property <Array<string>> nativeLibraryUpdateURLs - The array with URLs of the native library updater. Intended for operation systems that support more then 1 update package type, e.x. Linux: deb, rpm, tar.
 * @property <string> webExtensionInstallURL - The URL of the web extension.
 * @property <string> helpURL - The URL of the help.
 */
export declare class EndUserLibraryInfoSW {
    version: string;
    supported: boolean;
    loaded: boolean;
    isSignAgentSupported: boolean;
    isWebExtensionSupported: boolean;
    isNPAPISupported: boolean;
    isActiveXSupported: boolean;
    isWebExtensionInstalled: boolean;
    isNativeLibraryNeedUpdate: boolean;
    nativeLibraryInstallURL: string;
    nativeLibraryInstallURLs: Array<string>;
    nativeLibraryUpdateURL: string;
    nativeLibraryUpdateURLs: Array<string>;
    webExtensionInstallURL: string;
    helpURL: string;
    constructor();
}
