import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../Hooks/useMoviesTrailer";

const VideoBackground = ({ moviesId }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMoviesTrailer(moviesId);

  return (
    <div className=" ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?si=XTL2868ONtXBPHpR" +
          "&autoplay=1&mute=1&controls=0&loop=1"
        }
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
