import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import store from "./modules/config/store";
import { Provider } from "react-redux";
import { router } from "./modules/config/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
