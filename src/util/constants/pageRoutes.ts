export const LOCAL_ROUTES = import.meta.env.VITE_API_FRONTEND_URL || "my-changelog-app.vercel.app";
console.log(LOCAL_ROUTES)
export const DASHBOARD = "/dashboard"
export const DASHBOARD_PAGE_ROUTES = LOCAL_ROUTES + DASHBOARD;




