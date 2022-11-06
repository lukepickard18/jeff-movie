import MovieCard from "./MovieCard";
import instance from "../utils/axios";
import { useState, useEffect } from "react";



export default function Dashboard() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        async function fetchData() {
        const request = await instance.get(`/trending/all/week`, {
            params: {
            api_key: process.env.REACT_APP_API_KEY,
            page: page,
            },
        });
        setMovies(request.data.results);
        return request;
        }
        fetchData();
    }, [page]);
    
    const handleClick = (direction) => {
        if (direction === "left") {
        setPage(page > 1 ? page - 1 : page);
        } else {
        setPage(page + 1);
        }
    };
    
    return (
        <div>
        <div className="trending">
            {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
        </div>
        <div className="pagination">
            <button onClick={() => handleClick("left")}>Previous</button>
            <button onClick={() => handleClick("right")}>Next</button>
        </div>
        </div>
    );
}

