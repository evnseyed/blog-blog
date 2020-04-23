import { IGetters } from './getters.types';
import { IState } from '../store.types';
import { ILogin, Login } from '@/entity';

export const getters: IGetters = {
    getLoginData(state: IState): ILogin {
        return new Login(state.loginData)
    },
    getAuthUserData(state: IState): any {
        return state.authUser
    }
}