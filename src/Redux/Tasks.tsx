import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface tasks {
  TaskList: string[];
  Id: string[];
  IsComplate: boolean[];
}

const initialState: tasks = {
  TaskList: [],
  Id: [],
  IsComplate: [],
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTaskList: (state, action: PayloadAction<string>) => {
      state.TaskList.push(action.payload);
      state.Id.push(Math.random().toString(36).substr(2, 8));
      state.IsComplate.push(false);
    },

    earseTaskFromList: (state, action: PayloadAction<number>) => {
      state.TaskList = state.TaskList.filter(
        (item, index) => index !== action.payload
      );
      state.Id = state.Id.filter((item, index) => index !== action.payload);
      state.IsComplate = state.IsComplate.filter(
        (item, index) => index !== action.payload
      );
    },

    changeStatus: (state, action: PayloadAction<number>) => {
      state.IsComplate[action.payload] = !state.IsComplate[action.payload];
    },
  },
});

export const { insertTaskList, earseTaskFromList, changeStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
