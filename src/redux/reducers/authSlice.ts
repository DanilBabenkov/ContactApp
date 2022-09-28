import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthType} from "../../types/authType";
import {authAction} from "../actionCreators/authAction";

const initialState: IAuthType = {
    login: '',
    password: '',
    isAuth: false,
    isLoading: false,
    error: ''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: {
        [authAction.pending.type]: (state) => {
            state.isLoading = true
        },
        [authAction.fulfilled.type]: (state, action: PayloadAction<IAuthType>) => {
            state.isLoading = false
            state.login = action.payload.login
            state.password = action.payload.password
        },
        [authAction.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const isAuthAction = () => {
   return  authSlice.actions.isAuth(true)
}


export default authSlice.reducer
