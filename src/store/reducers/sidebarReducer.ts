import { createReducer } from "@reduxjs/toolkit";
import { hideSidebar, showSidebar } from "../actions/sidebarActions";

const initialState = {
    show: false,
}

export const sidebarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(showSidebar, (state) => ({...state, show: true}))
        .addCase(hideSidebar, (state) => ({...state, show: false}))
        .addDefaultCase((state) => ({...state}))
});