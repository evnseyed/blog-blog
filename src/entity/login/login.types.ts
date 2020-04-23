export interface ILoginData {
    email: string
    password: string
}

export interface ILoginValidate {
    passwordIsCorrect: boolean
}

export interface ILogin extends ILoginData {
    validate: () => ILoginValidate
    validatePassword: () => boolean
}

export const MIN_PASSWORD_LENGTH = 6