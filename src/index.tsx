import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/Store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as FetchProvider } from "use-http";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FetchProvider url="http://localhost:4000/data">
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </FetchProvider>
  </React.StrictMode>
);
