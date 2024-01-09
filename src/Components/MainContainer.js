import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTItle from "./VideoTItle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;

  return (
    <div className="">
      <VideoTItle title={original_title} overview={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
