import { ILoginData } from '@/entity';

export interface ILoginService {
    connectAndSubscribeToFirebaseAuth: (storeAuthState: any) => void
    register: (loginData: ILoginData) => void
    signIn: (loginData: ILoginData) => void
    signOut: () => void
}