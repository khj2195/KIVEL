import { combineReducers } from "redux";
import { UserReducer } from "./userReducers";

export const rootReducer = combineReducers({
    userReducer: UserReducer,
    //some more reducer will come here
})

export type ApplicationState = ReturnType<typeof rootReducer>
