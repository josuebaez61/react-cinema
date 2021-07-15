import { configureStore } from '@reduxjs/toolkit'
import { genresReducer } from './reducers/genresReducer';
import { authReducer } from './reducers/authReducer';
import { moviesReducer } from './reducers/moviesReducer';
import { searchReducer } from './reducers/searchReducer';
import { sidebarReducer } from './reducers/sidebarReducer'

const rootReducer = {
    sidebar: sidebarReducer,
    search: searchReducer,
    movies: moviesReducer,
    genres: genresReducer,
    auth: authReducer
}

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>
