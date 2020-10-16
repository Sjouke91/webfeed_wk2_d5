import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsArticleCard from "../NewsArticle/NewsArticleCard";
import axios from "axios";
import "./NewsFeed.scss";

export default function NewsFeed() {
  const [newsData, setNewsData] = useState(null);
  const [articleStatus, setArticleStatus] = useState({});

  useEffect(() => {
    console.log("useEffect starting");
    async function getNewsAPI() {
      try {
        const url =
          "http://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=ebcafbb30990429e9931d833c794f6b8";
        const response = await axios.get(url);
        const articles = response.data.articles;
        console.log(articles);
        setNewsData(articles);

        const statusObject = {};
        articles.forEach((article) => {
          statusObject[article.title] = "closed";
        });
        setArticleStatus(statusObject);
        // console.log(statusObject);
      } catch (error) {
        console.log("error message:", error.message);
        setNewsData(error.message);
      }
    }
    getNewsAPI();
  }, []);

  function forButtonClick(title) {
    setArticleStatus({ ...articleStatus, title: "open" });
  }

  // console.log("(render) checking articleStatus:", articleStatus);

  return (
    <div id="newsFeed">
      <h2>Latest News</h2>
      <div id="articleContainer">
        {!newsData
          ? "loading..."
          : typeof newsData === "string"
          ? newsData
          : newsData.map((article) => {
              return (
                <Link
                  key={article.title}
                  to={`/${article.publishedAt}`}
                  target="_blank"
                >
                  <NewsArticleCard
                    callBackProp={forButtonClick}
                    title={article.title}
                    description={article.description}
                    content={article.content}
                  />
                </Link>
              );
            })}
      </div>
    </div>
  );
}
