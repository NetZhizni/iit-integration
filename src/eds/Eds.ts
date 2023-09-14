import {
  EndUser,
  EndUserConstants,
  EndUserOwnerInfo,
  EndUserSettings,
  NamedData,
} from 'euscp';
import { FileConverter } from '@/eds/FileConverter';

export interface IEds {
  instance: EndUser;
  config: EndUserSettings;
  defaultConfig: EndUserSettings;
  isInitialized: boolean;
  init(): Promise<void>;
  readPrivateKey(
    keyFile: File,
    password: string,
    certs?: Uint8Array[],
    caCN?: string,
  ): Promise<EndUserOwnerInfo>;
  signData(
    data: string | Uint8Array | NamedData | (string | Uint8Array | NamedData)[],
    detached: boolean,
    asBase64: boolean,
  ): Promise<string | Uint8Array | NamedData | (string | Uint8Array | NamedData)[]>
}

export class Eds implements IEds {
  defaultConfig: EndUserSettings = {
    language: 'uk',
    encoding: 'utf-8',
    httpProxyServiceURL: './iit/ProxyHandler.php',
    directAccess: true,
    CAs: './iit/CAs.json',
    CACertificates: './iit/CACertificates.p7b',
  }

  config: EndUserSettings;

  instance: EndUser;

  isInitialized= false;

  constructor(config?: EndUserSettings) {
    this.config = config || this.defaultConfig;
    this.instance = new EndUser('iit/euscp.worker.ex.js', EndUserConstants.EndUserLibraryType.JS);
  }

  async init(): Promise<void> {
    try {
      await this.instance.Initialize(this.config);
      this.isInitialized = await this.instance.IsInitialized();
    } catch (e) {
      console.error(e);
    }
  }

  async readPrivateKey(
    keyFile: File,
    password: string,
    certs?: Uint8Array[],
    caCN?: string,
  ): Promise<EndUserOwnerInfo> {
    const privateKey = await FileConverter.toArrayBuffer(keyFile);
    if (privateKey.file.name.endsWith('.jks')) {
      const pkCertificates = [];
      const jksKeys = await this.instance.GetJKSPrivateKeys(privateKey.data);
      const pkIndex = 0;
      for (let i = 0; i < jksKeys[pkIndex].certificates.length; i += 1) {
        pkCertificates.push(jksKeys[pkIndex].certificates[i].data);
      }

      return this.instance.ReadPrivateKeyBinary(
        jksKeys[pkIndex].privateKey,
        password,
        pkCertificates,
        caCN,
      );
    }

    return this.instance.ReadPrivateKeyBinary(privateKey.data, password, certs, caCN);
  }

  async signData(
    data: string | Uint8Array | NamedData | (string | Uint8Array | NamedData)[],
    detached = true,
    asBase64 = true,
  ): Promise<string | Uint8Array | NamedData | (string | Uint8Array | NamedData)[]> {
    await this.instance.SetRuntimeParameter('???', EndUserConstants.EndUserSignType.CAdES_X_Long_Trusted);
    await this.instance.SetRuntimeParameter('???', EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311);
    const res = await this.instance.SignDataInternal(detached, data, asBase64);
    return res;
  }
}
