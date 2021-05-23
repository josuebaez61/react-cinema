import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from './reducers/searchReducer';
import { sidebarReducer } from './reducers/sidebarReducer'

const rootReducer = {
    sidebar: sidebarReducer,
    search: searchReducer
}

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>
