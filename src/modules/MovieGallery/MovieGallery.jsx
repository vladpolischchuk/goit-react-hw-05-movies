import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from "./MovieGallery.module.css";

const MovieGallery = ({ trendingMovies, title }) => {
    const location = useLocation();

    const movie = trendingMovies.map(({ id, name, title, }) => <Link key={id} to={`/movies/${id}`} className={css.link} state={{ from: location }}>
        <li className={css.item}>
            {title === undefined ? name : title}
        </li>
    </Link>);

    return (
        <div>
            <h1 className={css.title}>{title}</h1>
            <ul className={css.list}>
                {movie}
            </ul>
        </div>
    );
};

export default MovieGallery;

MovieGallery.defaultProps = {
    trendingMovies: []
};

MovieGallery.propTypes = {
    title: PropTypes.string.isRequired,
    trendingMovies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        title: PropTypes.string,
    }))
}