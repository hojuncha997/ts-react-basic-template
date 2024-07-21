// App.tsx
import React from "react";
import { AuthProvider } from "./auth/JwtContext";
import GlobalStyle from "./theme/GlobalStyles";
import RoutesConfig from "./routes/RoutesConfig";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesConfig />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
