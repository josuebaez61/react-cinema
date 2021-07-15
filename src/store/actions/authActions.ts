import { createAction } from "@reduxjs/toolkit";

export const login = createAction('[AUTH] Log in', (displayName: string | null, email: string | null, uid: string | null) => ({ payload: { displayName, email, uid} }));

export const logout = createAction('[AUTH] Log out');