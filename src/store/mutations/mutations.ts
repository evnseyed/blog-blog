import { IMutations } from './mutations.types';
import { IState } from '../store.types';
import { ILogin, ILoginData } from '@/entity';

export const mutations: IMutations = {
    setLoginEmail(state: IState, payload: string): void {
        state.loginData.email = payload
    },
    setLoginPassword(state: IState, payload: string): void {
        state.loginData.password = payload
    },
    setAuthUser(state: IState, payload: any): void {
        state.authUser = payload
    }
}