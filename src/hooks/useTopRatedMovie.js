import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utility/moviesSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movies.topRatedMovie);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const getTopRatedMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovie && getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
