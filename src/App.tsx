import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import { configureAxiosInterceptors } from './util/interceptor';

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  configureAxiosInterceptors(); // Set up Axios interceptors for your API requests

  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your app in QueryClientProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
