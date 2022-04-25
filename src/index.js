import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserContextProvider } from "./components/context/userContext";

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,

  document.getElementById("root")
);
