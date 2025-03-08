const PRODUCTION_FRONTEND_URL = "https://my-changelog-app.vercel.app"
export const LOCAL_ROUTES = import.meta.env.VITE_API_FRONTEND_URL || PRODUCTION_FRONTEND_URL;
console.log(LOCAL_ROUTES)
export const DASHBOARD = "/dashboard"
export const DASHBOARD_PAGE_ROUTES = LOCAL_ROUTES + DASHBOARD;




