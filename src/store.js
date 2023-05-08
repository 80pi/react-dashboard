import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/Dashboard/DashboardSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})