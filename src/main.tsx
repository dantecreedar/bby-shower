import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css"; // Si estás usando estilos globales

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
