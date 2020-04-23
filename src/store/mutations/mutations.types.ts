import { MutationTree, Store } from 'vuex';
import { IState } from '../store.types';
import { ILogin } from '@/entity';

export interface IMutations extends MutationTree<IState> {
    setLoginEmail(this: Store<IState>, state: IState, payload: string): void
    setLoginPassword(this: Store<IState>, state: IState, payload: string): void
    setAuthUser(this: Store<IState>, state: IState, payload: any): void
}