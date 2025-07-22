///refrence website https://wordmarks.webflow.io/

///color plannte
// --text: #040316;
// --background: #ffffff;
// --primary: #a8c66c;
// --secondary: #847647;
// --accent: #e8e2d3;?react

import { AppHeader } from "./components/AppHeader/AppHeader";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./components/routes/routesConfig";
import "./assets/style/main.scss";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <main>
        <Routes>
          {routesConfig.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
