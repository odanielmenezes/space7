import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components/footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <App />
    <Footer />
  </Fragment>
);
