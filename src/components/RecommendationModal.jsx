import { XMarkIcon } from '@heroicons/react/24/outline';
import '../styles/RecommendationModal.css';

export default function RecommendationModal({
  isOpen,
  onClose,
  recommendation,
  loading,
  error
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Time for a Break! 🌟</h2>
          <button
            onClick={onClose}
            className="modal-close-button"
            aria-label="Close modal"
          >
            <XMarkIcon className="modal-close-icon" />
          </button>
        </div>

        <div className="modal-body">
          {loading && (
            <div className="modal-loading">
              <div className="loading-spinner"></div>
              <p>Finding awesome local spots for you...</p>
            </div>
          )}

          {error && (
            <div className="modal-error">
              <p className="error-icon">😕</p>
              <p className="error-message">{error}</p>
            </div>
          )}

          {!loading && !error && recommendation && (
            <div className="modal-recommendation">
              <p className="recommendation-intro">
                You've watched 40+ hours of movies! Here are some fun places near you to explore:
              </p>
              <div className="recommendation-text">
                {recommendation.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-action-button">
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
