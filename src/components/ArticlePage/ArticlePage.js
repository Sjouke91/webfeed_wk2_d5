import React, { useState, useEffect } from "react";
import CommentFeed from "../comments/commentFeed";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ArticlePage.scss";

export default function ArticlePage() {
  const param = useParams().article;
  console.log("param:", param);

  const [article, setArticle] = useState(null);

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

        let correctArticle;
        articles.forEach((article) => {
          if (article.publishedAt === param) {
            console.log("success", param, article);
            correctArticle = article;
          }
        });
        setArticle(correctArticle);
      } catch (error) {
        console.log("error message:", error.message);
        setArticle(error.message);
      }
    }
    getNewsAPI();
  }, []);

  return (
    <div id="articlePage">
      <div id="article">
        {!article ? (
          "Loading..."
        ) : typeof article === "string" ? (
          article
        ) : (
          <div id="articleContainer">
            <div id="articleContent">
              <h1>{article.title}</h1>
              <div className="highlight">
                <strong>Author:</strong> {article.author}
              </div>
              <div className="highlight">
                <strong>Date:</strong> {article.publishedAt}
              </div>
              <p>{article.description}</p>
              <p>{article.content}</p>
              <img src={article.urlToImage} />
              <a href={article.url} target="_blank">
                <p>Read the full article</p>
              </a>
              <p>And discuss it here...</p>
            </div>
          </div>
        )}
      </div>

      <div id="comments">
        <CommentFeed />
      </div>
    </div>
  );
}
