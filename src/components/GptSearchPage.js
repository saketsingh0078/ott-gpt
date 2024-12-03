import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utility/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div>
      {/* gpt search bar */}
      {/* content of the gpt search*/}
      <img
        src={BG_IMG}
        alt="bg-image"
        className="absolute -z-10 w-[100vw] h-[100vh]"
      />
      {/* <GptSearchBar /> */}
      {/* <GptMovieSuggestion /> */}
    </div>
  );
};

export default GptSearchPage;
