import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Tasks';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
