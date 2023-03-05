import { useState, useEffect } from 'react';

import MovieGallery from '../../modules/MovieGallery/MovieGallery.jsx';

import { searchTrendingMovies } from "../../shared/service/movieApi.js";

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await searchTrendingMovies();
                setTrendingMovies(data.results);
            }
            catch (error) {
                setError(error.message);
            }
        };
        fetchTrendingMovies();
    }, [setTrendingMovies, setError]);

    const title = "Trending today";

    return error === '' ? (<MovieGallery trendingMovies={trendingMovies} title={title} />) : (<p>{error}</p>);

};

export default HomePage;