import React, { useEffect, useMemo, useState } from "react";
import { Dinosaur } from "../../../types/dinosaur";
import { articles, dinosaurs } from "../../../assets/data/consts";
import { Key } from "react-aria-components";
import { Article } from "../../../types/article";

export type ArticleSortKey = "UPABC" | "DWABC" | "UPD" | "DWD" | "UPT" | "DWT";

export type ArticleSortKeyMap = Record<
  ArticleSortKey,
  {
    title: string;
    icon: "up" | "down" | null;
    sortFunc: (a: Article, b: Article) => number;
  }
>;

const sortMap: ArticleSortKeyMap = {
  UPABC: {
    title: "ABC",
    icon: "up",
    sortFunc: (a, b) => a.title.localeCompare(b.title),
  },
  DWABC: {
    title: "ABC",
    icon: "down",
    sortFunc: (a, b) => b.title.localeCompare(a.title),
  },
  UPD: {
    title: "Date",
    icon: "up",
    sortFunc: (a, b) =>
      new Date(a.post_date).getTime() - new Date(b.post_date).getTime(),
  },
  DWD: {
    title: "Date",
    icon: "down",
    sortFunc: (a, b) =>
      new Date(b.post_date).getTime() - new Date(a.post_date).getTime(),
  },
  UPT: {
    title: "Time to read",
    icon: "up",
    sortFunc: (a, b) => a.time_to_read - b.time_to_read,
  },
  DWT: {
    title: "Time to read",
    icon: "down",
    sortFunc: (a, b) => b.time_to_read - a.time_to_read,
  },
};

export const useArticlesFilter = () => {
  const [searchedArticle, setSearchedArticle] = useState<null | Article>(null);
  const [sort, setSort] = useState<ArticleSortKey | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const articlesMap = useMemo(() => {
    const map = new Map<string, Article>();
    articles.forEach((article) => {
      map.set(article.id, article);
    });
    return map;
  }, [articles]);

  const articlesToGrid = useMemo(() => {
    if (searchedArticle) {
      return [searchedArticle];
    }
    let articlesArray = [...articles];
    articlesArray =
      sort && sortMap[sort]
        ? articlesArray.sort(sortMap[sort].sortFunc)
        : articlesArray;
    return articlesArray;
  }, [articles, searchedArticle, sort]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [articlesToGrid]);

  const handleOnSelectionChange = (dinoId: Key | null) => {
    if (!dinoId) return setSearchedArticle(null);
    const searchedArticle = articlesMap.get(dinoId as string);
    if (searchedArticle) {
      setSearchedArticle(searchedArticle);
      setSort(null);
    } else {
      setSearchedArticle(null);
    }
  };

  const handleClearAutocomplete = () => {
    setSearchedArticle(null);
  };

  const handleOnSelectionBlur = (
    ev: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    if (ev.target.value === "") {
      setSearchedArticle(null);
    }
  };

  const onClearAllFilter = (ev: React.MouseEvent) => {
    setSort(null);
  };

  const onClearSort = (ev: React.MouseEvent) => {
    setSort(null);
  };

  return {
    articlesMap,
    searchedArticle,
    sort,
    sortMap,
    handleOnSelectionChange,
    handleClearAutocomplete,
    handleOnSelectionBlur,
    setSearchedArticle,
    setSort,
    articlesToGrid,
    onClearAllFilter,
    isLoading,
    onClearSort,
  };
};
