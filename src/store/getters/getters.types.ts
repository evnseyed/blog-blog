import { GetterTree, Store } from 'vuex';
import { IState, IRootState } from '@/store'
import { ILogin } from '@/entity';

export interface IGetters extends GetterTree<IState, IRootState> {
    getLoginData( this: Store<IState>, state: IState ): ILogin
    getAuthUserData( this: Store<IState>, state: IState ): any
}