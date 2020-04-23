import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from 'vuex/types/index';
import { IState } from './store.types';
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

Vue.use(Vuex)

export const makeStore = (): Store<IState> => new Vuex.Store<IState>({
    state: {
        version: 1,
        loginData: { email: '', password: '' },
        authUser: null,
    },
    actions,
    mutations,
    getters,
})