// App.tsx
import React from "react";
import GlobalStyle from "./theme/GlobalStyles";
import RoutesConfig from "./routes/RoutesConfig";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
