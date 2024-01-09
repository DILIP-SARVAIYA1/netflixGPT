import React from "react";
import { IMG_API } from "../utils/constants";

const MovieCard = ({ moviesList }) => {
  return (
    <div className="m-2 cursor-pointer">
      <img
        className="w-40"
        src={IMG_API + moviesList.poster_path}
        alt={"Img of " + moviesList.original_title}
      />
    </div>
  );
};

export default MovieCard;
