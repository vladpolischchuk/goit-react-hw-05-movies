import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Searchbar from "../../modules/Searchbar/Searchbar";
import MovieGallery from "../../modules/MovieGallery/MovieGallery";

import { searchMovies } from "../../shared/service/movieApi.js";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
        if (search) {
            const fetchSearchMovies = async () => {
                try {
                    const data = await searchMovies(search);
                    setMovies(data.results);
                }
                catch (search) {
                    setError(error.message);
                }
            };
            fetchSearchMovies();
        };
    }, [search, error]);

    const onSearchMovies = ({ search }) => {
        setSearchParams({ search })
        searchMovies([]);
    };

    return (
        <>
            <Searchbar onSubmit={onSearchMovies} />
            {error && <p className={css.error}>Something goes wrong. Please try again later.</p>}
            <MovieGallery trendingMovies={movies} title={""} />
        </>
    );
};

export default MoviesPage;
