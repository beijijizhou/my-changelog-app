import { DASHBOARD_PAGE_ROUTES } from "../../util/constants/pageRoutes";

export default function Home() {
   // Store repos
    
    const handleLogin = () => {
        const clientId = 'Ov23liDwZL9ZP50lMr16';
        const redirectUri = DASHBOARD_PAGE_ROUTES; // Redirect back to home page
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
    };
    return (
        <div>
            <button onClick={handleLogin}>Login with GitHub</button>
        </div>
    );
}
