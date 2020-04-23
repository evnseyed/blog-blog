import { MIN_PASSWORD_LENGTH, ILogin, ILoginData, ILoginValidate } from './login.types'

export class Login implements ILogin {
    email: string
    password: string
    constructor(data: ILoginData) {
        this.email = data.email
        this.password = data.password
    }

    validate(): ILoginValidate {
        const passwordIsCorrect = this.validatePassword()
        return {
            passwordIsCorrect,
        }
    }

    validatePassword(): boolean {
        return this.password.length >= 6
    }
} 