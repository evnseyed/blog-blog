import { ActionTree, ActionContext, Store } from 'vuex';
import { IState, IRootState } from '../store.types';

export type Context = ActionContext<IState, IRootState>

export interface IActions extends ActionTree<IState, IState> {
    subscribeToUserAuth(this: Store<IState>, context: Context): void
    registerUser(this: Store<IState>, context: Context): void
    logIn(this: Store<IState>, context: Context): void
    logOut(this: Store<IState>, context: Context): void
}