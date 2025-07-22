import { AboutUsPage } from "../../pages/AboutUsPage";
import { ArticlesPage } from "../../pages/ArticlesPage";
import { ContactUsPage } from "../../pages/ContactUsPage";
import { DinosaursPage } from "../../pages/DinosaursPage";
import { HomePage } from "../../pages/HomePage";
import { ArticlePage } from "../ArticlePage/ArticlePage";
import { ROUTES } from "./routes";

export const routesConfig = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    showInNav: false,
  },
  {
    path: ROUTES.ARTICLES,
    element: <ArticlesPage />,
    label: "Articles",
    showInNav: true,
  },
  {
    path: `${ROUTES.ARTICLES}/:id`,
    element: <ArticlePage />,
    showInNav: false,
  },
  {
    path: ROUTES.DINOSAURS,
    element: <DinosaursPage />,
    label: "Dinosaurs",
    showInNav: true,
  },
  {
    path: ROUTES.ABOUT_US,
    element: <AboutUsPage />,
    label: "About",
    showInNav: true,
  },
  {
    path: ROUTES.CONTACT_US,
    element: <ContactUsPage />,
    label: "Contact",
    showInNav: true,
  },
];

export const navRoutes = routesConfig.filter((r) => r.showInNav);
