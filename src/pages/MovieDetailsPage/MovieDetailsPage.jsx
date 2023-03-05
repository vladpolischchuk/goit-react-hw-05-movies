import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

import { searchMovieDetails } from '../../shared/service/movieApi';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import css from "./MovieDetailsPage.module.css";

const MovieDetails = () => {
    const [movieDetails, setmovieDetails] = useState({});
    const { id } = useParams();
    const [error, setError] = useState('');
    const navigation = useNavigate();
    const location = useLocation();
    const { from } = location.state;

    const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const POSTER_URL = 'https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-04.jpg';

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await searchMovieDetails(id);
                setmovieDetails(data);
            }
            catch (error) {
                setError(error.message);
            }
        };
        fetchTrendingMovies();
    }, [setmovieDetails, setError, id]);

    const {
        title,
        name,
        poster_path,
        vote_average,
        overview,
        release_date,
        first_air_date,
        genres,
    } = movieDetails;

    const movieReleaseDate = release_date ?? first_air_date;
    const movieReleaseYear = movieReleaseDate !== undefined ? movieReleaseDate.slice(0, 4) : "";

    const genresMovie = genres
        ? genres.map(genre => genre.name).join(', ')
        : 'Genre not specified';

    return error === "" ? (
        <>
            <button className={css.btn__goBack} onClick={() => navigation(from)}>
                <FaLongArrowAltLeft className={css.icon} /> Go back
            </button>
            <div className={css.container}>
                <img
                    className={css.img}
                    src={poster_path ? `${BASE_POSTER_URL}${poster_path}` : POSTER_URL}
                    alt={movieDetails.title}
                />
                <div className={css.wrapper}>
                    <h2 className={css.title}>{title ?? name} ({movieReleaseYear})</h2>
                    <p className={css.score}>Use Score: {Math.round(vote_average * 10)}%</p>
                    <h3 className={css.sub_title}>Overview</h3>
                    <p className={css.desc}>{overview}</p>
                    <h3 className={css.sub_title}>Genres</h3>
                    <p className={css.desc}>{genresMovie}</p>
                </div>
            </div>
            <div className={css.details_container}>
                <h3 className={`${css.sub_title} ${css.details_title}`}>Additional information</h3>
                <ul className={css.list}>
                    <li className={css.desc}>
                        <Link to="cast"
                            state={{ from }}
                            className={css.link}>
                            Cast
                        </Link>
                    </li>
                    <li className={css.desc}>
                        <Link
                            to="reviews"
                            state={{ from }}
                            className={`${css.link} `}
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>
                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    ) : (<p>Помилка</p>);
};

export default MovieDetails;