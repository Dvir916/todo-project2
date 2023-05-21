import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface tasks {
  TaskList: string[];
  Id: string[];
}

const initialState: tasks = {
  TaskList: [],
  Id: [],
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTaskList: (state, action: PayloadAction<string>) => {
      state.TaskList.push(action.payload);
      state.Id.push(Math.random().toString(36).substr(2, 8));
    },

    earseTaskFromList: (state, action: PayloadAction<number>) => {
      console.log("text", state.TaskList, "id", state.Id);
      state.TaskList = state.TaskList.filter(
        (item, index) => index !== action.payload
      );
      state.Id = state.Id.filter((item, index) => index !== action.payload);
      console.log("text2", state.TaskList, "id2", state.Id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertTaskList, earseTaskFromList } = tasksSlice.actions;

export default tasksSlice.reducer;
