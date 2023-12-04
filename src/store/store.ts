import { configureStore } from '@reduxjs/toolkit'
import { hospitalState } from './hospital.store'

// Create a Redux store
export const store = configureStore({
  reducer: {
    hospitals: hospitalState.reducer,
  },
})

// Type for the Redux store state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
