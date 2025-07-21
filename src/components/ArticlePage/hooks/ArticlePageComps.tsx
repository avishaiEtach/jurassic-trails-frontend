import React from "react";
import { Components } from "react-markdown";
import { Loader } from "../../Loader/Loader";

export const ArticlePageComps = () => {
  const markdownComponents: Components = {
    p({ node, children }) {
      if (
        node?.children.length === 1 &&
        node?.children[0].type === "element" &&
        node?.children[0].tagName === "img"
      ) {
        return <p data-image-state="standalone">{children}</p>;
      }
      return <p className="paragraph">{children}</p>;
    },
  };

  const ArticlePageLoadingComp = () => {
    return <Loader />;
  };

  const ArticlePageNotFoundComp = () => {
    return (
      <div className="wrapper">
        <h2>Article not found.</h2>
      </div>
    );
  };

  return {
    markdownComponents,
    ArticlePageLoadingComp,
    ArticlePageNotFoundComp,
  };
};
