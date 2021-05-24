import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movies";
import { fetchNowPlaying } from "../actions/moviesActions";
import { hideSearchModal, showSearchModal } from "../actions/searchActions";

interface MoviesState {
    results: Array<Movie>,
    error: any,
    loading: boolean
}

const initialState: MoviesState = {
    results: [],
    error: null,
    loading: false
}

export const moviesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchNowPlaying.pending, (state) => ({...state, loading: true}))
        .addCase(fetchNowPlaying.fulfilled, (state, {payload}) => ({...state, loading: false, results: payload}))
        .addCase(fetchNowPlaying.rejected, (state, { error }) => ({...state, loading: false, error}))
        .addDefaultCase((state) => ({...state}))
});