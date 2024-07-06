import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, URL } from "../utility/constants";
import { addNowPlayingMovies } from "../utility/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  const getNowplayingMovies = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
