import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../interfaceTypes";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTask: (state, action: PayloadAction<string>) => {
      state.push({
        taskText: action.payload,
        id: state.length + 1,
        isComplete: false,
      });
    },

    eraseTaskFromList: (state, action: PayloadAction<number>) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
    },

    toggleStatus: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].isComplete = !state[index].isComplete;
    },
  },
});

export const { insertTask, eraseTaskFromList, toggleStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
