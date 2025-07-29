import ReactMarkdown from "react-markdown";
import DateIcon from "../../assets/images/date.svg?react";
import ClockIcon from "../../assets/images/clock.svg?react";
import { useArticlePage } from "./hooks/useArticlePage";
import { ArticlePageComps } from "./hooks/ArticlePageComps";

export const ArticlePage = () => {
  const { articleToPage, loading, id, articleDate, articleHeroImage } =
    useArticlePage();
  const {
    markdownComponents,
    ArticlePageLoadingComp,
    ArticlePageNotFoundComp,
  } = ArticlePageComps();

  if (loading) {
    return <ArticlePageLoadingComp />;
  }

  if (!id || !articleToPage) {
    return <ArticlePageNotFoundComp />;
  }
  return (
    <div>
      <section className="article-page-header-container">
        <div className="wrapper article-page-header">
          <h1>{articleToPage.title}</h1>
          <ul>
            <li>
              <div></div>
            </li>
            <li>
              <ClockIcon />
              <span>{articleToPage.time_to_read} min read</span>
            </li>
            <li>
              <DateIcon />
              <span>{articleDate}</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="wrapper">
        <div data-aos="fade-up" className="article-page-hero-container">
          <div
            className="article-page-hero-blur-bg"
            style={{
              background: `url(${articleHeroImage}) center center / cover no-repeat`,
            }}
          ></div>
          <img
            src={articleHeroImage}
            className="article-page-hero-image"
            alt="Hero"
          />
        </div>
        <article data-aos="fade-up" className="article-page-content-container">
          <ReactMarkdown components={markdownComponents}>
            {articleToPage.content}
          </ReactMarkdown>
        </article>
      </section>
    </div>
  );
};
