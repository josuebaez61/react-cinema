import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from './reducers/moviesReducer';
import { searchReducer } from './reducers/searchReducer';
import { sidebarReducer } from './reducers/sidebarReducer'

const rootReducer = {
    sidebar: sidebarReducer,
    search: searchReducer,
    movies: moviesReducer
}

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>
