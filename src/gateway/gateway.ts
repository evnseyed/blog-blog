import { IFirebase, IGatewayConfig, IFirebaseConfig, IGateway} from './gateway.types'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class Gateway implements IGateway {
    readonly auth: IFirebase.auth.Auth
    readonly database: IFirebase.database.Database
    constructor(config: IGatewayConfig) {
        const app: IFirebase.app.App = firebase.initializeApp(config.firebaseConfig);
        this.auth = app.auth()
        this.database = app.database()
    }
}

const firebaseConfig: IFirebaseConfig = {
    apiKey: "AIzaSyDwlIz-K0DT6QTzsZgfiQ87MndrNWDxnls",
    authDomain: "blog-1b.firebaseapp.com",
    databaseURL: "https://blog-1b.firebaseio.com",
    projectId: "blog-1b",
    storageBucket: "blog-1b.appspot.com",
    messagingSenderId: "642699427901",
    appId: "1:642699427901:web:7aeb32c55c52e6ccbc2a54"
}

const gatewayConfig: IGatewayConfig = { firebaseConfig }



export const gateway = new Gateway(gatewayConfig)