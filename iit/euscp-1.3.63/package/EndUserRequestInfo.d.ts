import { EndUserRequestTypes, EndUserCertKeyType, EndUserSubjectType, EndUserSubjectCAServerSubType } from "./EndUserConstants";
/**
 * Certificate request information.
 */
export declare class EndUserRequestInfo {
    isFilled: boolean;
    data: Uint8Array;
    type: EndUserRequestTypes;
    fileName: string;
    isSimple: boolean;
    subject: string;
    subjCN: string;
    subjOrg: string;
    subjOrgUnit: string;
    subjTitle: string;
    subjState: string;
    subjLocality: string;
    subjFullName: string;
    subjAddress: string;
    subjPhone: string;
    subjEMail: string;
    subjDNS: string;
    subjEDRPOUCode: string;
    subjDRFOCode: string;
    subjNBUCode: string;
    subjSPFMCode: string;
    subjOCode: string;
    subjOUCode: string;
    subjUserCode: string;
    certBeginTime: Date;
    certEndTime: Date;
    isPrivKeyTimesAvail: boolean;
    privKeyBeginTime: Date;
    privKeyEndTime: Date;
    publicKeyType: EndUserCertKeyType;
    publicKeyBits: number;
    RSAModul: string;
    RSAExponent: string;
    publicKey: string;
    publicKeyID: string;
    extKeyUsages: string;
    crlDistribPoint1: string;
    crlDistribPoint2: string;
    isSubjTypeAvail: boolean;
    subjType: EndUserSubjectType;
    subjSubType: EndUserSubjectCAServerSubType;
    isSelfSigned: boolean;
    signIssuer: string;
    signSerial: string;
    subjUNZR: string;
    subjCountry: string;
    isQSCD: boolean;
}
