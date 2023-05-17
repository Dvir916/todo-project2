import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TasksState {
  TaskList: string[];
}

const initialState: TasksState = {
  TaskList: [],
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTaskList: (state, action: PayloadAction<string>) => {
      state.TaskList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertTaskList } = tasksSlice.actions;

export default tasksSlice.reducer;
