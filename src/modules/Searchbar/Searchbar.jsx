import { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState.js';

import css from "./Searchbar.module.css";

const MoviesPage = ({ onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(({ ...state }));
        setState({ ...initialState });
    };

    const { search } = state;

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    name="search"
                    placeholder="Search movies"
                    value={search}
                    onChange={handleChange}
                    required
                ></input>
                <button className={css.btn} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default MoviesPage;


MoviesPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};