import { Hero } from "../components/Hero/Hero";
import { FeaturedDinos } from "../components/FeaturedDinos/FeaturedDinos";
import { PopularArticles } from "../components/PopularArticles/PopularArticles";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedDinos />
      <PopularArticles />
    </div>
  );
};
