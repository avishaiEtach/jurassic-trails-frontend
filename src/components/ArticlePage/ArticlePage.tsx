import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DateIcon from "../../assets/images/date.svg?react";
import ClockIcon from "../../assets/images/clock.svg?react";
import { useArticlePage } from "./hooks/useArticlePage";
import { ArticlePageComps } from "./hooks/ArticlePageComps";
import { imageMap } from "../../assets/data/consts";

export const ArticlePage = () => {
  const { articleToPage, loading, id, articleDate, imageRef } =
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
    console.log("aaaa");
    console.log(loading);

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
        <div
          style={{
            backgroundImage: `url(${
              imageMap[articleToPage.main_image.split("/").pop() as string]
            })`,
          }}
          className="article-page-main-image"
          ref={imageRef}
        >
          {/* <img src={articleToPage.main_image} alt="" /> */}
        </div>
        <article className="article-page-content-container">
          <ReactMarkdown components={markdownComponents}>
            {articleToPage.content}
          </ReactMarkdown>
        </article>
      </section>
    </div>
  );
};
