import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Store
import { Provider } from "react-redux";
import { store } from "./store";
// Persist Store
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
// Router
import { BrowserRouter } from "react-router-dom";


let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
