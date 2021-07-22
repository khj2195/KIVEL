export interface UserModel {
    firstName : string;
    lastName : string;
}

export interface Login {
    type : 'LOGIN'
    payload : UserModel;
}

export interface LoginError {
    type : 'LOGIN_ERROR'
    payload : any;
}

export type UserAction = Login | LoginError ;
