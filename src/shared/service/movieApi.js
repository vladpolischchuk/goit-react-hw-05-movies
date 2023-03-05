import axios from "axios";

const BASE_KEY = "4e47c6b84e3558dc0b7a4e4e5f8f705d";

const instanceTrendingMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?",
});

export const searchTrendingMovies = async () => {
    const { data } = await instanceTrendingMovies.get("/", {
        params: {
            api_key: BASE_KEY,
        }
    });
    return data;
};

export const searchMovies = async (search) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${BASE_KEY}&query=${search}&language=en-US&page=1&include_adult=false`);
    return data;
};

export const searchMovieDetails = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${BASE_KEY}&language=en-US`);
    return data;
};

export const searchMovieCast = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${BASE_KEY}&language=en-US`);
    return data;
};

export const searchMovieReviews = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${BASE_KEY}&language=en-US&page=1`);
    return data;
};