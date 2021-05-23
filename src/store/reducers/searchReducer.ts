import { createReducer } from "@reduxjs/toolkit";
import { hideSearchModal, showSearchModal } from "../actions/searchActions";

const initialState = {
    show: false,
}

export const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(showSearchModal, (state) => ({...state, show: true}))
        .addCase(hideSearchModal, (state) => ({...state, show: false}))
        .addDefaultCase((state) => ({...state}))
});