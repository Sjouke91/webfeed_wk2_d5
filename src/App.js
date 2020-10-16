import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import NavBar from "./components/Header/NavBar";
import ArticlePage from "./components/ArticlePage/ArticlePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/:article" component={ArticlePage} />
        <Route path="/" component={NewsFeed} />
      </Switch>
    </div>
  );
}

export default App;
