import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  const popular = useSelector((store) => store.movies?.popularMovies);

  return (
    <div className="-mt-56 bg-black relative z-20">
      <h1 className="text-3xl  text-white">Now Playing</h1>
      <div className="flex overflow-auto">
        <MoviesList moviesData={nowPlaying} />
      </div>
      <h1 className="text-3xl  text-white">Popular Movies</h1>
      <div className="flex overflow-auto">
        <MoviesList moviesData={popular} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
