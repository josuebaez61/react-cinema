import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";


interface LoginState { displayName: string | null, email: string | null, uid: string | null }

const initialState: LoginState = {
    displayName: null,
    email: null,
    uid: null
};

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, { payload }) => ({ ...state, ...payload }))
        .addCase(logout, (state) => initialState)
        .addDefaultCase((state) => ({ ...state }))
});