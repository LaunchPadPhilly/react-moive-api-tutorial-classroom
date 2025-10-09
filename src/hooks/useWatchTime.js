import { useState, useCallback } from 'react';

const WATCH_TIME_KEY = 'movieapp:watchtime:v1';

// Helper to parse runtime string like "120 min" to minutes
const parseRuntime = (runtime) => {
  if (!runtime || runtime === 'N/A') return 0;
  const match = runtime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const useWatchTime = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  const markAsWatched = useCallback((movie) => {
    const runtimeMinutes = parseRuntime(movie.Runtime);

    const watchedMovie = {
      imdbID: movie.imdbID,
      title: movie.Title,
      runtime: movie.Runtime,
      runtimeMinutes,
      watchedAt: new Date().toISOString(),
    };

    setWatchedMovies(prev => {
      // Avoid duplicates
      if (prev.some(m => m.imdbID === movie.imdbID)) {
        return prev;
      }
      return [...prev, watchedMovie];
    });
  }, []);

  const unmarkAsWatched = useCallback((imdbID) => {
    setWatchedMovies(prev => prev.filter(m => m.imdbID !== imdbID));
  }, []);

  const isWatched = useCallback((imdbID) => {
    return watchedMovies.some(m => m.imdbID === imdbID);
  }, [watchedMovies]);

  const getTotalMinutes = useCallback(() => {
    return watchedMovies.reduce((total, movie) => total + movie.runtimeMinutes, 0);
  }, [watchedMovies]);

  const getTotalHours = useCallback(() => {
    const totalMinutes = getTotalMinutes();
    return (totalMinutes / 60).toFixed(1);
  }, [getTotalMinutes]);

  const resetWatchTime = useCallback(() => {
    setWatchedMovies([]);
  }, []);

  const getWatchedMovies = useCallback(() => {
    return watchedMovies;
  }, [watchedMovies]);

  return {
    watchedMovies,
    markAsWatched,
    unmarkAsWatched,
    isWatched,
    getTotalMinutes,
    getTotalHours,
    resetWatchTime,
    getWatchedMovies,
  };
};
