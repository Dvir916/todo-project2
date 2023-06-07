import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../interfaceTypes";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTask: (
      state,
      action: PayloadAction<{ text: string; id: number }>
    ) => {
      state.push({
        text: action.payload.text,
        id: action.payload.id,
        isComplete: false,
      });
    },

    eraseTaskFromList: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    toggleStatus: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].isComplete = !state[index].isComplete;
    },

    setTasks: (_state, action: PayloadAction<Task[]>) => {
      return action.payload;
    },
  },
});

export const { insertTask, eraseTaskFromList, toggleStatus, setTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
