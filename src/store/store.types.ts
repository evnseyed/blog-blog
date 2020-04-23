import { ILoginData } from '@/entity';
import { Store } from 'vuex'

export interface IRootState {
    version: number
}

export interface IState extends IRootState {
    loginData: ILoginData,
    authUser: any,
}

export type IStore = Store<IState> 