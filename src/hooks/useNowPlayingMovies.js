import { useDispatch } from "react-redux";
import { API_OPTIONS, URL } from "../utility/constants";
import { addNowPlayingMovies } from "../utility/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowplayingMovies = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
