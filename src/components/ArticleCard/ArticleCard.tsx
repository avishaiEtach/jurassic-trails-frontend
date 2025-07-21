import React from "react";
import { Button, Focusable, Pressable } from "react-aria-components";
import DateIcon from "../../assets/images/date.svg?react";
import ClockIcon from "../../assets/images/clock.svg?react";
import { Article } from "../../types/article";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Pressable>
      <div className="article-card-container">
        <div
          className="article-card-image"
          style={{ backgroundImage: `url(${article.main_image})` }}
        ></div>
        <h3 className="article-card-header">{article.title}</h3>
        <div className="flex article-card-details-main-container">
          <div className="flex align-center article-card-details-container">
            <DateIcon />
            <span>
              {new Date(article.post_date).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex align-center article-card-details-container">
            <ClockIcon />
            <span>{article.time_to_read} min read</span>
          </div>
        </div>
        <Button className="article-card-button">
          <span>read more {"->"}</span>
        </Button>
      </div>
    </Pressable>
  );
};
