import { useEffect, useMemo, useRef, useState } from "react";
import { articles, imageMap } from "../../../assets/data/consts";
import { Article } from "../../../types/article";
import frontMatter from "front-matter";
import { useParams } from "react-router-dom";

interface articleToPage {
  title: Article["title"];
  main_image: Article["main_image"];
  post_date: Article["post_date"];
  time_to_read: Article["time_to_read"];
  content: string;
}

export const useArticlePage = () => {
  const { id } = useParams();
  // const id = "2";
  const [articleToPage, setArticleToPage] = useState<articleToPage | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  //// UseEffect to get the relevant md file to the article id
  useEffect(() => {
    if (!id) return;
    getArticleFile();
  }, [id]);

  const getArticleFile = async () => {
    const article = articles.find((article) => article.id === id);
    if (article) {
      try {
        const articleFile = await fetch(
          `/content/articles/${article.fileName}.md`
        );
        const articleFileToText = await articleFile.text();
        if (articleFileToText) {
          const parsed = frontMatter(articleFileToText);
          setArticleToPage({ ...article, content: parsed.body });
        } else {
          throw new Error("Not found");
        }
      } catch (err) {
        console.log("err", err);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const articleDate = new Date(
    articleToPage?.post_date ?? new Date()
  ).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleHeroImage = useMemo(() => {
    if (articleToPage) {
      return imageMap[articleToPage.main_image.split("/").pop() as string];
    } else return "";
  }, [articleToPage]);

  return {
    articleToPage,
    loading,
    id,
    articleDate,
    articleHeroImage,
  };
};
