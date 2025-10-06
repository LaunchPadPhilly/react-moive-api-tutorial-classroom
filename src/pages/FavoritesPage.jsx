import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useFavorites } from '../hooks/useFavorites';
import { omdbApi } from '../services/omdbApi';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/FavoritesPage.css';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const { data: favoriteMovies, isLoading } = useQuery({
    queryKey: ['favorites', favorites.map(f => f.imdbID)],
    queryFn: async () => {
      if (favorites.length === 0) return [];

      const moviePromises = favorites.map(favorite =>
        omdbApi.getMovieDetails(favorite.imdbID)
      );

      return Promise.all(moviePromises);
    },
    enabled: favorites.length > 0,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Your Favorites</h1>

      {favorites.length === 0 ? (
        <div className="favorites-empty-state">
          <div className="favorites-empty-icon">💙</div>
          <h2 className="favorites-empty-title">
            No favorites yet
          </h2>
          <p className="favorites-empty-text">
            Start building your collection by searching for movies and adding them to your favorites.
          </p>
          <Link to="/" className="favorites-browse-button">
            Browse Movies
          </Link>
        </div>
      ) : (
        <div>
          <p className="favorites-count">
            You have {favorites.length} favorite movie{favorites.length !== 1 ? 's' : ''}
          </p>

          {favoriteMovies && (
            <div className="favorites-grid">
              {favoriteMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
