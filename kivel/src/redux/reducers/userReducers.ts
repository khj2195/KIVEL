import { UserModel, UserAction } from "../actions/userActions";

type UserState ={
    user : UserModel;
    error : string | undefined
}

const initialState = {
    user: {} as UserModel,
    error : undefined,
}
 


export const UserReducer = (state : UserState = initialState, action : UserAction) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user : action.payload
            }
        case 'LOGIN_ERROR' :
            return {
                ...state,
                error : action.payload
            }           
        default:
            return state
    }
}

