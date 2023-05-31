import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Tasks";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import InitializeData from "../Components/InitializeData";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <InitializeData />
  </Provider>,
  document.getElementById("root")
);
export type RootState = ReturnType<typeof store.getState>;
