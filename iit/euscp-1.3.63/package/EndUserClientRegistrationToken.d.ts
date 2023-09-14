/**
 * Client registration token.
 */
export declare class EndUserClientRegistrationToken {
    version: number;
    type: number;
    serverId: string;
    serverName: string;
    clientType: number;
    clientName: string;
    rawSign: string;
    expiration: Date;
    token: string;
    qrCode: string;
}
