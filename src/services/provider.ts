import { IProvider } from './provider.types';
import { LoginService } from './login';

export const provider = (): IProvider => ({
    login: new LoginService()
}) 