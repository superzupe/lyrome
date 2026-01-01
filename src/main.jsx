import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LyricsProvider } from "./context/LyricsContext.jsx";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LyricsProvider>
      <App />
    </LyricsProvider>
  </StrictMode>
);
