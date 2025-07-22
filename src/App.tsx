///refrence website https://wordmarks.webflow.io/

///color plannte
// --text: #040316;
// --background: #ffffff;
// --primary: #a8c66c;
// --secondary: #847647;
// --accent: #e8e2d3;?react

import { AppHeader } from "./components/AppHeader/AppHeader";
import "./assets/style/main.scss";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { AboutUsPage } from "./pages/AboutUsPage";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./components/ArticlePage/ArticlePage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { dietArray, dinosaurs } from "./assets/data/consts";
import { DinoCard } from "./components/DinoCard/DinoCard";
import {
  Button,
  ComboBox,
  Focusable,
  Input,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Pressable,
  Select,
  SelectValue,
} from "react-aria-components";
import { useMemo, useState } from "react";
import { Dinosaur } from "./types/dinosaur";

import ArrowUpIcon from "./assets/images/arrow_up.svg?react";
import ArrowDownIcon from "./assets/images/arrow_down.svg?react";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { DinosFilter } from "./components/DinosFilter/DinosFilter";
import { useDinosFilter } from "./components/DinosFilter/hooks/useDinosFilter";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { Loader } from "./components/Loader/Loader";
import { DinosaursPage } from "./pages/DinosaursPage";
import { ArticlesPage } from "./pages/ArticlesPage";

function App() {
  return (
    <div className="app-container">
      {/* <AppHeader /> */}
      <main>
        <HomePage />
        {/* <AboutUsPage /> */}
        {/* <ArticlePage /> */}
        {/* <ContactUsPage /> */}
        {/* <DinosaursPage /> */}
        {/* <ArticlesPage /> */}
      </main>
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
