import { KakaoOAuthToken } from '@react-native-seoul/kakao-login';
import { signInWithKakao , getProfile } from '../../service/logins'
import { Dispatch } from 'react'
export interface UserModel {
    nickName : string;
}

export interface Login {
    type : 'LOGIN'
    payload : UserModel;
}

export interface LoginError {
    type : 'LOGIN_ERROR'
    payload : any;
}

export const kakaoLogin = () =>{
    return async (dispatch : Dispatch<UserAction>) => {
        try{
            signInWithKakao()
            .then(() => getProfile()
                        .then((profile) => {
                            dispatch({ 
                                type : 'LOGIN',
                                payload : {nickName : profile.nickname}
                            })
                        })
                        .catch(error => {
                            dispatch({
                                type : 'LOGIN_ERROR',
                                payload : error
                            })
                        }))
            .catch(error => {
                dispatch({
                    type : 'LOGIN_ERROR',
                    payload : error
                })
            })
        } catch (error){
            dispatch({
                type : 'LOGIN_ERROR',
                payload : error
            })
        }
    }
}
export type UserAction = Login | LoginError ;
