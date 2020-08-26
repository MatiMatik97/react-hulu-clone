import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import urls from "./services/urls";

const App = () => {
  const [category, setCategory] = useState(urls.fetchTrendingMovies);

  return (
    <div className="app">
      <Header />
      <Nav setCategory={setCategory} />
      <Results category={category} />
    </div>
  );
};

export default App;
