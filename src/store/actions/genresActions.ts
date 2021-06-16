import { createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesService } from "../../services/MoviesService";

export const fetchGenres = createAsyncThunk(
   '[GENRES] Load genres',
   async () => {
    const { genres } = await MoviesService.getGenres();
    return genres;
   }
);