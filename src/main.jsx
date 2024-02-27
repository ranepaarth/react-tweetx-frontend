import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import Loading from "./components/Loading/Loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        {/* <Loading /> */}
      </Provider>
    </React.StrictMode>
  </Suspense>
);
