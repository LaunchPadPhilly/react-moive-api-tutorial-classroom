import { useState } from 'react';
import { useWatchTime } from '../contexts/WatchTimeContext';
import { useGeolocation } from '../hooks/useGeolocation';
import { openaiApi } from '../services/openaiApi';
import RecommendationModal from '../components/RecommendationModal';
import { ChartBarIcon, MapPinIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import '../styles/AnalyticsPage.css';

export default function AnalyticsPage() {
  const {
    watchedMovies,
    getTotalHours,
    getTotalMinutes,
    resetWatchTime,
  } = useWatchTime();

  const { location, error: locationError, loading: locationLoading, requestLocation } = useGeolocation();

  const [modalOpen, setModalOpen] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [recommendationLoading, setRecommendationLoading] = useState(false);
  const [recommendationError, setRecommendationError] = useState(null);

  const totalHours = parseFloat(getTotalHours());
  const totalMinutes = getTotalMinutes();
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const progressPercentage = Math.min((totalHours / 40) * 100, 100);

  const handleGetRecommendations = async () => {
    if (!location) {
      await requestLocation();
      return;
    }

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
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your watch time? This cannot be undone.')) {
      resetWatchTime();
      setRecommendation(null);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <ChartBarIcon className="analytics-header-icon" />
        <h1 className="analytics-title">Watch Time Analytics</h1>
      </div>

      <div className="analytics-stats-card">
        <div className="stats-overview">
          <div className="stat-item">
            <p className="stat-label">Total Watch Time</p>
            <p className="stat-value">
              {hours}h {minutes}m
            </p>
            <p className="stat-subtext">{totalHours} hours total</p>
          </div>

          <div className="stat-item">
            <p className="stat-label">Movies Watched</p>
            <p className="stat-value">{watchedMovies.length}</p>
            <p className="stat-subtext">
              {watchedMovies.length === 0 ? 'No movies yet' : 'Keep it up!'}
            </p>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <p className="progress-label">Progress to 40-hour milestone</p>
            <p className="progress-percentage">{progressPercentage.toFixed(0)}%</p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {totalHours >= 40
              ? '🎉 You've reached 40 hours! Time for a break!'
              : `${(40 - totalHours).toFixed(1)} hours until milestone`}
          </p>
        </div>

        <div className="action-buttons">
          <button
            onClick={handleGetRecommendations}
            className="recommendation-button"
            disabled={totalHours < 40}
          >
            <MapPinIcon className="button-icon" />
            {location ? 'Get Local Recommendations' : 'Enable Location & Get Recommendations'}
          </button>

          <button
            onClick={handleReset}
            className="reset-button"
            disabled={watchedMovies.length === 0}
          >
            <ArrowPathIcon className="button-icon" />
            Reset Watch Time
          </button>
        </div>

        {locationError && (
          <div className="location-error">
            <p>📍 {locationError}</p>
            <p className="location-error-hint">
              Please enable location permissions to get personalized recommendations
            </p>
          </div>
        )}

        {totalHours < 40 && (
          <div className="info-message">
            <p>
              💡 Recommendations unlock at 40 hours of watch time. Keep watching and marking movies as watched!
            </p>
          </div>
        )}
      </div>

      {watchedMovies.length > 0 && (
        <div className="watched-movies-section">
          <h2 className="section-title">Watched Movies</h2>
          <div className="watched-movies-list">
            {watchedMovies.map((movie) => (
              <div key={movie.imdbID} className="watched-movie-item">
                <div className="watched-movie-info">
                  <p className="watched-movie-title">{movie.title}</p>
                  <p className="watched-movie-meta">
                    {movie.runtime} • {new Date(movie.watchedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {watchedMovies.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">🎬</div>
          <h2 className="empty-state-title">No movies watched yet</h2>
          <p className="empty-state-text">
            Start marking movies as watched to track your watch time!
          </p>
        </div>
      )}

      <RecommendationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        recommendation={recommendation}
        loading={recommendationLoading}
        error={recommendationError}
      />
    </div>
  );
}
