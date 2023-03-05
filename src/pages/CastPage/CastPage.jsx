import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchMovieCast } from "../../shared/service/movieApi";

import css from "./CastPage.module.css";

const MovieCast = () => {
    const [casts, setCasts] = useState([]);
    const { id } = useParams();

    const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const POSTER_URL = 'https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-04.jpg';

    useEffect(() => {
        const fetchMoviesCast = async () => {
            try {
                const data = await searchMovieCast(id);
                setCasts(data.cast);
            }
            catch (error) {
                console.log(error.message);
            }
        };
        fetchMoviesCast();
    }, [setCasts, id]);

    const cast = casts.map(({ cast_id, profile_path, name, character }) => <li key={cast_id} className={css.item}>
        <img
            className={css.img}
            src={profile_path ? `${BASE_POSTER_URL}${profile_path}` : POSTER_URL}
            alt="actor face"
        />
        <div className={css.wrapper}>
            <h3 className={css.title}>~ {name}</h3>
            <p className={css.desc}>Character: {character}</p>
        </div>
    </li>);

    return (
        <ul className={css.list}>
            {casts.length > 0 ? cast : <p className={css.warning}> Sorry.We don't have any cast for this movie.</p>}
        </ul>
    );
};

export default MovieCast;