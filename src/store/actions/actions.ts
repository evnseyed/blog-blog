import { IActions, Context } from './actions.types';

export const actions: IActions = {
    subscribeToUserAuth(context: Context): void {
        const storeAuthState = (user: any) => context.commit('setAuthUser', user)
        this.$services
            .login
            .connectAndSubscribeToFirebaseAuth( storeAuthState )
    },
    registerUser(context: Context): void {
        this.$services.login.register(context.state.loginData)
    },
    logIn(context: Context): void {
        this.$services.login.signIn(context.state.loginData)
    },
    logOut(context: Context): void {
        this.$services.login.signOut()
    }
}