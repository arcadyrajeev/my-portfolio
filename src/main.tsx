import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/themeContext.tsx";
import { NavProvider } from "./contexts/navContext.tsx";
import SmoothScrollProvider from "./utils/smoothScrollProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScrollProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  </StrictMode>
);
