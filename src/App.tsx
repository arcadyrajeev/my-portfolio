import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
