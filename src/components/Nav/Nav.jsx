import React from "react";
import "./Nav.css";
import urls from "../../services/urls";

const Nav = ({ setCategory }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setCategory(urls.fetchTrendingMovies)}>Trending</h2>
      <h2 onClick={() => setCategory(urls.fetchTopRatedMovies)}>Top Rated</h2>
      <h2 onClick={() => setCategory(urls.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setCategory(urls.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setCategory(urls.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setCategory(urls.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={() => setCategory(urls.fetchMysteryMovies)}>Mystery</h2>
      <h2 onClick={() => setCategory(urls.fetchSciFiMovies)}>Sci-fi</h2>
      <h2 onClick={() => setCategory(urls.fetchAnimationMovies)}>Animation</h2>
      <h2 onClick={() => setCategory(urls.fetchWesternMovies)}>Western</h2>
    </div>
  );
};

export default Nav;
