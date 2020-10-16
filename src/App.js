import React from "react";
import CommentFeed from "./components/comments/CommentFeed";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentFeed />
      </header>
    </div>
  );
}

export default App;
