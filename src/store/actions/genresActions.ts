import { createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesService } from "../../services/MoviesService";

export const fetchGenres = createAsyncThunk(
   '[GENRES] Load genres',
   async () => {
       return await MoviesService.getGenres().then((response) => response.genres);
   }
);