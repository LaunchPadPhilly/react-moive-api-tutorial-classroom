import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { useFavorites } from '../hooks/useFavorites';
import { useWatchTime } from '../contexts/WatchTimeContext';
import { useGeolocation } from '../hooks/useGeolocation';
import { openaiApi } from '../services/openaiApi';
import LoadingSpinner from '../components/LoadingSpinner';
import FavoriteButton from '../components/FavoriteButton';
import WatchButton from '../components/WatchButton';
import RecommendationModal from '../components/RecommendationModal';
import '../styles/MovieDetailPage.css';

export default function MovieDetailPage() {
  const { imdbID } = useParams();
  const { data: movie, isLoading, error } = useMovieDetail(imdbID);
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const { isWatched, markAsWatched, unmarkAsWatched, getTotalHours, watchedMovies } = useWatchTime();
  const { location, requestLocation } = useGeolocation();

  const [modalOpen, setModalOpen] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [recommendationLoading, setRecommendationLoading] = useState(false);
  const [recommendationError, setRecommendationError] = useState(null);

  const handleFavoriteToggle = () => {
    if (!movie) return;

    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie.imdbID);
    }
  };

  const handleWatchToggle = async () => {
    if (!movie) return;

    if (isWatched(movie.imdbID)) {
      unmarkAsWatched(movie.imdbID);
    } else {
      markAsWatched(movie);

      // Check if we've reached 40 hours after marking as watched
      const totalHours = parseFloat(getTotalHours());
      if (totalHours >= 40) {
        // Trigger recommendation flow
        if (!location) {
          await requestLocation();
        }

        if (location) {
          setModalOpen(true);
          setRecommendationLoading(true);
          setRecommendationError(null);

          try {
            const result = await openaiApi.getLocalRecommendations(
              location.latitude,
              location.longitude,
              totalHours,
              watchedMovies
            );
            setRecommendation(result.recommendation);
          } catch (err) {
            setRecommendationError(err.message || 'Failed to get recommendations');
          } finally {
            setRecommendationLoading(false);
          }
        }
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !movie) {
    return (
      <div className="error-state">
        <div className="error-icon">😕</div>
        <h2 className="error-title">
          Movie not found
        </h2>
        <p className="error-text">
          The movie you're looking for could not be loaded.
        </p>
        <Link to="/" className="error-button">
          <ArrowLeftIcon className="back-icon" />
          Back to Search
        </Link>
      </div>
    );
  }

  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : null;

  return (
    <div className="movie-detail-page">
      <Link to="/" className="back-link">
        <ArrowLeftIcon className="back-icon" />
        Back to Search
      </Link>

      <div className="movie-detail-card">
        <div className="movie-detail-container">
          <div className="movie-poster-section">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={`${movie.Title} poster`}
                className="movie-detail-poster"
              />
            ) : (
              <div className="movie-poster-placeholder-large">
                <div className="movie-poster-placeholder-large-content">
                  <div className="movie-poster-placeholder-large-icon">🎬</div>
                  <div>No Poster Available</div>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info-section">
            <div className="movie-header">
              <div className="movie-title-section">
                <h1 className="movie-detail-title">
                  {movie.Title}
                </h1>
                <p className="movie-meta-info">
                  {movie.Year} • {movie.Type} • {movie.Rated}
                </p>
              </div>
              <div className="movie-actions">
                <FavoriteButton
                  isFavorite={isFavorite(movie.imdbID)}
                  onToggle={handleFavoriteToggle}
                />
                <WatchButton
                  isWatched={isWatched(movie.imdbID)}
                  onToggle={handleWatchToggle}
                />
              </div>
            </div>

            {movie.Plot && (
              <div className="movie-plot-section">
                <h2 className="section-title">Plot</h2>
                <p className="plot-text">{movie.Plot}</p>
              </div>
            )}

            <div className="movie-details-grid">
              {movie.Director && (
                <div className="detail-item">
                  <span className="detail-label">Director</span>
                  <span className="detail-value">{movie.Director}</span>
                </div>
              )}

              {movie.Actors && (
                <div className="detail-item">
                  <span className="detail-label">Cast</span>
                  <span className="detail-value">{movie.Actors}</span>
                </div>
              )}

              {movie.Genre && (
                <div className="detail-item">
                  <span className="detail-label">Genre</span>
                  <span className="detail-value">{movie.Genre}</span>
                </div>
              )}

              {movie.Runtime && (
                <div className="detail-item">
                  <span className="detail-label">Runtime</span>
                  <span className="detail-value">{movie.Runtime}</span>
                </div>
              )}

              {movie.Released && (
                <div className="detail-item">
                  <span className="detail-label">Released</span>
                  <span className="detail-value">{movie.Released}</span>
                </div>
              )}

              {movie.Language && (
                <div className="detail-item">
                  <span className="detail-label">Language</span>
                  <span className="detail-value">{movie.Language}</span>
                </div>
              )}
            </div>

            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="ratings-section">
                <h3 className="section-title">Ratings</h3>
                <div className="ratings-list">
                  {movie.Ratings.map((rating, index) => (
                    <div key={index} className="rating-item">
                      <span className="rating-source">{rating.Source}</span>
                      <span className="rating-value">{rating.Value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <RecommendationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        recommendation={recommendation}
        loading={recommendationLoading}
        error={recommendationError}
      />
    </div>
  );
}
