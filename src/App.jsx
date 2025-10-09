import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundary';
import AppShell from './components/AppShell';
import SearchPage from './pages/SearchPage';
import MovieDetailPage from './pages/MovieDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { WatchTimeProvider } from './contexts/WatchTimeContext';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      cacheTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <WatchTimeProvider>
          <Router>
            <AppShell>
              <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
              </Routes>
            </AppShell>
          </Router>
        </WatchTimeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
