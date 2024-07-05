import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div className=" overflow-x-hidden">
      <Header />
      <GptSearchPage />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
