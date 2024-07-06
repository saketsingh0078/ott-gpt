import React, { useRef } from "react";
import lang from "../utility/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utility/openai";
import { API_OPTIONS, OPENAI_API } from "../utility/constants";
import { addGptMovieResult } from "../utility/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMovieTMDB = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "kgf&include_adult=false&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an gtp api call
    const gptquery =
      "Act as a movie recommendation system  and suggest some movies for this query " +
      searchText.current.value +
      ". only give 5 movies, comma separted like the example result given ahead. Example Result : Gadar,Don,Kgf,Golmaal,Dil chahe more";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TOOD: write an error Handling
    }

    console.log(gptResults);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie i will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="w-full py-2 mx-4 flex justify-center pt-[8%]">
      <form
        className="w-1/2 bg-black p-2 rounded-md "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-[85%] text-lg px-4 py-2 border-2 mr-1 border-black rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-[14%] text-lg bg-red-600 px-4 py-2 rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
