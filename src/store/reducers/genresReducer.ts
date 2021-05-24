import { createReducer } from "@reduxjs/toolkit";
import { MovieGenre } from "../../models/Genre";
import { fetchGenres } from "../actions/genresActions";

interface MoviesState {
    genres: MovieGenre[],
    error: any,
    loading: boolean
}

const initialState: MoviesState = {
    genres: [],
    error: null,
    loading: false
}

export const genresReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchGenres.pending, (state) => ({...state, loading: true}))
        .addCase(fetchGenres.fulfilled, (state, {payload}) => ({...state, loading: false, genres: payload}))
        .addCase(fetchGenres.rejected, (state, { error }) => ({...state, loading: false, error}))
        .addDefaultCase((state) => ({...state}))
});