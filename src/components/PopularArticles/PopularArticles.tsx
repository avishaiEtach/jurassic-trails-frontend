import { articles } from "../../assets/data/consts";
import { Button } from "react-aria-components";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export const PopularArticles = () => {
  const popularArticles = articles.slice(0, 6);
  const navigate = useNavigate();
  return (
    <section className="wrapper popular-articles-container">
      <div className="popular-articles-header-container">
        <h2 className="popular-articles-header">popular articles</h2>
        <Button
          onClick={() => {
            navigate(ROUTES.ARTICLES);
          }}
          className="popular-articles-see-all-button"
        >
          <span>see all {"->"}</span>
        </Button>
      </div>
      <div data-aos="fade-up" className="popular-articles-cards-container">
        {popularArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
