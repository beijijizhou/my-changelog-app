import { DASHBOARD_PAGE_ROUTES } from "../../util/constants/pageRoutes";

export default function Home() {
  const handleLogin = () => {
    const REMOTE_CLIENT_ID = "Ov23liDwZL9ZP50lMr16";
    const clientId = import.meta.env.VITE_API_LOCAL_CLIENT_ID || REMOTE_CLIENT_ID;
    const redirectUri = DASHBOARD_PAGE_ROUTES;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Welcome to Changelog AI
        </h1>
        <p className="text-gray-600 mb-6">
          Changelog AI helps you summarize your recent commits and stay
          organized with your repositories.
        </p>
        <button
          onClick={handleLogin}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
