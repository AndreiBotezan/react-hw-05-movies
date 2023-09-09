import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesListItem from '../../MoviesListItem/MoviesListItem';
import normalizedData from '../../services/normalized-data';
import { fetchTrendingMovies } from '../../services/movies-api';

export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(data => {
                setMovies(normalizedData(data.results));
            });
    }, [])

    return <MoviesList>
        <MoviesListItem data={movies} />
    </MoviesList>
}