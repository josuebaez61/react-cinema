import { createReducer } from "@reduxjs/toolkit";
import { hideSearchModal, showSearchModal } from "../actions/searchActions";
import { hideSidebar, showSidebar } from "../actions/sidebarActions";

const initialState = {
    show: false,
}

export const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(showSearchModal, (state) => ({...state, show: true}))
        .addCase(hideSearchModal, (state) => ({...state, show: false}))
        .addDefaultCase((state) => ({...state}))
});