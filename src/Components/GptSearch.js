import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { APP_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="object-cover h-screen w-screen -z-10 absolute"
        src={APP_BACKGROUND}
        alt="App background"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
