import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = () => {
    const clientId = 'Ov23liDwZL9ZP50lMr16';
    const redirectUri = 'http://localhost:5173';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
  };

  useEffect(() => {
    // Extract the code from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
   
    // If a code is present and we don't already have a token, send it to the backend
    if (code && !token) {
      console.log("Logging in with GitHub...");
      axios
        .post('http://localhost:5000/callback', { code })  // Send the code to the backend
        .then((res) => {
          setToken(res.data.token);  // Set the token when received from backend
          window.history.pushState({}, document.title, '/');  // Clear the URL of the code parameter
        })
        .catch((err) => console.error('Error:', err));
    }
  }, [token]);

  return (
    <div>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
}

export default App;
