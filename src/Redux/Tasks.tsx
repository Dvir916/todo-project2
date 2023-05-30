import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tasks } from "../interfaceTypes";

const initialState: Tasks[] = [];

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTask: (state, action: PayloadAction<string>) => {
      state.push({
        taskText: action.payload,
        id: state.length + 1,
        isComplate: false,
      });
    },

    earseTaskFromList: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },

    changeStatus: (state, action: PayloadAction<number>) => {
      state[action.payload].isComplate = !state[action.payload].isComplate;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertTask, earseTaskFromList, changeStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
