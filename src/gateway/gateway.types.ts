/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as IFirebase from 'firebase/app'

export { IFirebase }
export interface IFirebaseConfig { [key: string]: string | number | boolean }
export interface IGatewayConfig { readonly firebaseConfig: IFirebaseConfig }

export interface IGateway {
    readonly auth: IFirebase.auth.Auth;
    readonly database: IFirebase.database.Database;
}