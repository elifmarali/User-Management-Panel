import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { FormProvider } from "./context/FormContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FormProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </FormProvider>
);
