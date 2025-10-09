import { EyeIcon } from '@heroicons/react/24/solid';
import { EyeIcon as EyeIconOutline } from '@heroicons/react/24/outline';
import '../styles/WatchButton.css';

export default function WatchButton({ isWatched, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`watch-button ${isWatched ? 'watched' : ''}`}
      aria-label={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
      title={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
    >
      {isWatched ? (
        <>
          <EyeIcon className="watch-icon" />
          <span className="watch-button-text">Watched</span>
        </>
      ) : (
        <>
          <EyeIconOutline className="watch-icon" />
          <span className="watch-button-text">Mark as Watched</span>
        </>
      )}
    </button>
  );
}
