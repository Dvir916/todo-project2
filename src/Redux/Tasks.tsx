import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tasks } from "../interfaceTypes";

const initialState: Tasks[] = [];

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

    earseTaskFromList: (state, action: PayloadAction<number>) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
    },

    changeStatus: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].isComplete = !state[index].isComplete;
    },

    insertDataFromDB: (state, action: PayloadAction<Tasks[]>) => {
      return action.payload;
    },
  },
});

export const { insertTask, earseTaskFromList, changeStatus, insertDataFromDB } =
  tasksSlice.actions;

export default tasksSlice.reducer;
