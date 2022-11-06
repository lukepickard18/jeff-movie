import { forwardRef } from "react";
import { createUseStyles } from "react-jss";
import TextTruncate from 'react-text-truncate';

/*
Referencing how I formatted line 38-39 from the following link:
*Author - Borislav Hadzhiev
*Title - Capitalize the first letter of a String in React
*Date - May 2nd 2022
*Code Version - N/A
*Availability - https://bobbyhadz.com/blog/react-capitalize-first-letter#:~:text=To%20capitalize%20the%20first%20letter%20of%20a%20string%20in%20React%3A&text=Call%20the%20toUpperCase()%20method,Concatenate%20the%20results.
*/
const MovieCard = forwardRef(({ movie }, ref) => {
  const classes = useStyles();

  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div ref={ref} className={classes.card}>
      <img
        src={`${BASE_URL}/${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />
      {
        <TextTruncate
          line={2}
          element="p"
          truncateText="…"
          text={movie.overview}
        />
      /* 
        Declare the TextTruncate component from the react-text-truncate dependency. This components has four props that you need to use:
          - line: The number of lines to truncate the text to
          - element: The element to wrap the text in
          - truncateText: The text to append to the end of the truncated text
          - text: The text to truncate
      */}

      <h2>{movie.title || movie.original_name}</h2>

      {
        <span className={classes.stats}>
          {`${movie.media_type.charAt(0).toUpperCase() + movie.media_type.slice(1)} • `}
          Release \ First Air Date {movie.release_date || movie.first_air_date} •
          <button className={classes.button}>⭐ {movie.vote_count}</button>
        </span>
      /* 
        Declare a span element with the className value - classes.stats. This element will contain the movie's media type,
        release date or first air date and vote count.
      */}
    </div>
  );
});
const useStyles = createUseStyles({
  card: {
    color: "#ffffff",
    width: 500,
    height: 400,
    padding: 20,
    transition: "transform 100ms",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:hover > span": {
      display: "inline",
    },
    "& > img": {
      height: 300,
      objectFit: "contain",
      width: 500,
    },
    "& > h2": {
      paddingTop: 10,
    },
  },
  stats: {
    display: "none",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    outline: "none",
  },
});

export default MovieCard;
