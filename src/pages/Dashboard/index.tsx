import RepoSelector from "./components";
import { useGithubAuth } from "./useGithubAuth";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { repos, loading } = useGithubAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing user data, tokens)
    // After that, navigate to home
    navigate('/');
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  
  return (
    <div>
      {/* Use flex to align the title and the logout button next to each other */}
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 m-10">Dashboard</h1>
        
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      </div>

      {repos ? (
        <div>
          <RepoSelector repos={repos} />
        </div>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}
