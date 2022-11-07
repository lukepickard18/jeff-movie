/**
 * This is the Dashboard component. It is responsible for displaying the list of movies.
 * 
 */


import MovieCard from "./MovieCard";
import instance from "../utils/axios";
import endpoints from "../utils/endpoints";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";



export default function Dashboard() {
    const [movies, setMovies] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        async function fetchMovies() {
        const req = await instance.get(endpoints[0].url);
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
        
            


