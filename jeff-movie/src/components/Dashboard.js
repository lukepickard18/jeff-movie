/**
 * This is the Dashboard component. It is responsible for displaying the list of movies.
 * It uses the axios instance to make API calls. It then uses the useState hook to store the data.
 * It then maps through the new usestate of movies and renders a moviecard component for each movie.
 *
 */

import MovieCard from "./MovieCard";
import instance from "../utils/axios";
import endpoints from "../utils/endpoints";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

export default function Dashboard() {
  const [movies, setMovies] = useState([]); //useState hook to store the data
  const classes = useStyles();
  useEffect(() => {
    async function fetchMovies() {
      //async function to make API calls
      
      const req = await instance.get(endpoints[0].url); //await the axios instance to make API calls
      setMovies(req.data.results);
      return req;
    }
    fetchMovies(); //Async functions have to be wrapped in a function
  }, []); //This is a dependency array it tells the useEffect hook to only run once when the component mounts


  return (
    <div className={classes.movies}>
      {movies.map((movie) => (
        <MovieCard movie={movie} /> //This is a prop that is being passed to the MovieCard component
      ))}
    </div>
  );
}
const useStyles = createUseStyles({
  movies: {
    margin: "20%",
    rowGap: 50,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 0,
  },
});
