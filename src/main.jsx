import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@unocss/reset/tailwind.css";
import { ColorModeProvider } from "./useColorMode";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
