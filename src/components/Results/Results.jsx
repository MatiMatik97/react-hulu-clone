import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard";
import request from "../../services/MoviesService";
import FlipMove from "react-flip-move";

const Results = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await request.get(category);
      setMovies(response.data.results);
    })();
  }, [category]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
