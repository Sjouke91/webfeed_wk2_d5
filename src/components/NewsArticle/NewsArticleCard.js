import React from "react";
import "./NewsArticleCard.scss";

export default function NewsArticleCard({
  title,
  description,
  content,
  callBackProp,
}) {
  // function handleArticleButton() {
  //   console.log("article button being clicked");
  //   callBackProp(title);
  // }

  return (
    <div className="newsArticle">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <button onClick={handleArticleButton} id="articleButton">
        Learn more / Open / Whatever
      </button> */}
    </div>
  );
}
