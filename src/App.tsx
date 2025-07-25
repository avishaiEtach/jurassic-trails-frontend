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
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/style/main.scss";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="app-container">
      <ScrollToTop />
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
