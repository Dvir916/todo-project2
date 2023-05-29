import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "../interfaceTyps";

const initialState: tasks[] = [];

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTaskList: (state, action: PayloadAction<string>) => {
      state.push({
        TaskList: action.payload,
        Id: Math.random().toString(36).substr(2, 8),
        IsComplate: false,
      });
    },

    earseTaskFromList: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },

    changeStatus: (state, action: PayloadAction<number>) => {
      state[action.payload].IsComplate = !state[action.payload].IsComplate;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertTaskList, earseTaskFromList, changeStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
