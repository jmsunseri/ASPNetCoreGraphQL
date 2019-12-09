import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

registerServiceWorker();
