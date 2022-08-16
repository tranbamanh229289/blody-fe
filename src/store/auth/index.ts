import { IUser } from '../../../type/index';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IStateAuth{
    isAuthenticate: boolean
    user: boolean
}

const initialState: IStateAuth = {
    isAuthenticate: false,
    user: false
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state, action: PayloadAction<IUser>){
            return state;
        }
    }
})

export const {register} = authReducer.actions