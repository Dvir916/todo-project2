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
        id: state.length + 1,
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

    insertDataFromDB: (state, action: PayloadAction<Tasks[]>) => {
      if (action.payload) {
        return action.payload;
      }
    },
  },
});

export const { insertTask, eraseTaskFromList, toggleStatus, insertDataFromDB } =
  tasksSlice.actions;

export default tasksSlice.reducer;