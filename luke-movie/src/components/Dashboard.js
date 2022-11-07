import MovieCard from "./MovieCard";
import instance from "../utils/axios";
import endpoints from "../utils/endpoints";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";



export default function Dashboard() {
    const [movies, setMovies] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        async function fetchData() {
        const req = await instance.get(endpoints[0].url);
        setMovies(req.data.results);
        return req;
        }
        fetchData(); //Async functions have to be wrapped in a function
    }, []); //This is a dependency array, it tells the useEffect hook to only run once when the component mounts
    
    return (
        <div className={classes.movies}>
        {movies.map((movie) => (
            <MovieCard movie={movie} />
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
        
            


