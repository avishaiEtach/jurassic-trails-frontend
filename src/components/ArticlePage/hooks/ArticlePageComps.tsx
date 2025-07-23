import React from "react";
import { Components } from "react-markdown";
import { Loader } from "../../Loader/Loader";
import { Error404Page } from "../../../pages/Error404Page";

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
    return <Error404Page />;
  };

  return {
    markdownComponents,
    ArticlePageLoadingComp,
    ArticlePageNotFoundComp,
  };
};
