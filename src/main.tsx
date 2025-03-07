import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
