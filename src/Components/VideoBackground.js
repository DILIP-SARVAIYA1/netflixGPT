import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../Hooks/useMoviesTrailer";

const VideoBackground = ({ moviesId }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMoviesTrailer(moviesId);

  return (
    <iframe
      className="w-[100%] aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        movieTrailer?.key +
        "?si=XTL2868ONtXBPHpR" +
        "&autoplay=1&mute=1&controls=0"
      }
      allowFullScreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoBackground;
