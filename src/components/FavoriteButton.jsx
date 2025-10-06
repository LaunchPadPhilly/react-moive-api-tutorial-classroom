import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import '../styles/FavoriteButton.css';

export default function FavoriteButton({ isFavorite, onToggle, disabled }) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`favorite-button ${isFavorite ? 'is-favorite' : 'not-favorite'}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <HeartSolidIcon className="favorite-icon" />
      ) : (
        <HeartIcon className="favorite-icon" />
      )}
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}
