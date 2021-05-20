import { configureStore } from '@reduxjs/toolkit'
import { sidebarReducer } from './reducers/sidebarReducer'

const rootReducer = {
    sidebar: sidebarReducer
}

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>
