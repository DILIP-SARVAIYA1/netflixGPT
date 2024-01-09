import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ moviesData }) => {
  if (!moviesData) return;
  return (
    <div className="flex flex-none">
      {moviesData.map((m) => (
        <MovieCard key={m.id} moviesList={m} />
      ))}
    </div>
  );
};

export default MoviesList;
