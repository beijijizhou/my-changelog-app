const REMOTE_BACKEND_ROUTE = "https://my-changelog-backend.vercel.app";
export const BACKEND_ROUTE = import.meta.env.VITE_API_BACKEND_URL || REMOTE_BACKEND_ROUTE;
export const GITHUB_CALLBACK = "/callback"
export const GITHUB_CALLBACK_API_ROUTE = BACKEND_ROUTE + GITHUB_CALLBACK;


