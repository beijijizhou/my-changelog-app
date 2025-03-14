import RepoSelector from "./components";
import { useGithubAuth } from "./useGithubAuth";
export default function Dashboard() {
  const { repos, loading } = useGithubAuth();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 m-10">Dashboard</h1>
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