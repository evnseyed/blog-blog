import { ILoginService } from './login.types'
import { IFirebase, gateway } from '@/gateway'
import { ILoginData } from '@/entity'


const auth: IFirebase.auth.Auth = gateway.auth

export class LoginService implements ILoginService {
    connectAndSubscribeToFirebaseAuth(storeAuthState: any): void {
        auth.onAuthStateChanged(storeAuthState)
    }
    register(loginData: ILoginData): void {
        auth.createUserWithEmailAndPassword(loginData.email, loginData.password)
    }
    signIn(loginData: ILoginData): void {
        auth.signInWithEmailAndPassword(loginData.email, loginData.password)
    }
    signOut(): void {
        auth.signOut()
    }
}