import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layouts/App/App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);