import { useState } from 'react';

export default function LazyImage({ src, alt, className, fallback }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="lazy-image-container">
      {!loaded && (
        <div className="lazy-image-placeholder" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'lazy-image-loaded' : 'lazy-image-loading'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
}
