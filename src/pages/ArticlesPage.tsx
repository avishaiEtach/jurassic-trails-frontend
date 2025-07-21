import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Loader } from "../components/Loader/Loader";
import { useArticlesFilter } from "../components/ArticlesFilter/hooks/useArticlesFilter";
import { ArticlesFilter } from "../components/ArticlesFilter/ArticlesFilter";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";

export const ArticlesPage = () => {
  const articlesFilterHook = useArticlesFilter();
  return (
    <div>
      <PageHeader title="Articles" />
      <ArticlesFilter {...articlesFilterHook} />
      {articlesFilterHook.isLoading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <div
            data-items-length={articlesFilterHook.articlesToGrid.length}
            className="articles-cards-grid"
          >
            {articlesFilterHook.articlesToGrid.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
