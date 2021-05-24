import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesService } from "../../services/MoviesService";

export const fetchNowPlaying = createAsyncThunk(
    '[MOVIES] Load movies',
    async () => {
        const { results } = await MoviesService.getNowPlaying();
        return results;
    }
)