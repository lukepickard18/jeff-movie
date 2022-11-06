import MovieCard from "./MovieCard";
import instance from "../utils/axios";
import endpoints from "../utils/endpoints";
import { useState, useEffect } from "react";



export default function Dashboard() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        const req = await instance.get(endpoints[0].url);
        setMovies(req.data.results);
        return req;
        }
        fetchData();
    }, []);
    
    return (
        <div>
        {movies.map((movie) => (
            <MovieCard movie={movie} />
        ))}
        </div>
    );
    }

