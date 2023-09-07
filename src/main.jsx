import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/mediaQ/Tablets.css";
import "./styles/mediaQ/Desktop.css";
import "./styles/mediaQ/Phones.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
