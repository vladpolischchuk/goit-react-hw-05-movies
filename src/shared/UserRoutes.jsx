import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const CastPage = lazy(() => import("../pages/CastPage/CastPage.jsx"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage/ReviewsPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>Loading page...</p>}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<CastPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;
