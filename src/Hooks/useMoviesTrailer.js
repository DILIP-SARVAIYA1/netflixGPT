import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMoviesTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moviesId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filtered = json.results.filter((e) => e.type === "Trailer");
    const trailer = filtered.length ? filtered[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMoviesTrailer;
