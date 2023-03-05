import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchMovieReviews } from "../../shared/service/movieApi";

import css from "./ReviewsPage.module.css";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchMoviesReviews = async () => {
            try {
                const data = await searchMovieReviews(id);
                setReviews(data.results);
            }
            catch (error) {
                console.log(error.message);
            }
        };
        fetchMoviesReviews();
    }, [setReviews, id]);

    const review = reviews.map(({ id, author, content }) => (
        <li key={id}>
            <h3 className={css.avtor}>{`Author: ${author}`}</h3>
            <p className={css.review}>{content}</p>
        </li>
    ));

    return (
        <ul className={css.list}>
            {reviews.length > 0 ? review : <p className={css.warning}>Sorry. We don't have any reviews for this movie.</p>}
        </ul>
    );
};

export default ReviewsPage;