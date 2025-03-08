// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { Repository } from '../Home/api';
import axios from 'axios';

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);  
  console.log("dashboard")
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
      
        if (code && !token) {
            axios
                .post('http://localhost:5000/callback', { code })
                .then((res) => {
                    setToken(res.data.token);
                    setRepos(res.data.repos);
                    localStorage.setItem('repos', JSON.stringify(res.data.repos));
                    // navigate(DASHBOARD_PAGE_ROUTES);
                })
                .catch((err) => {
                    console.error('Error while fetching data from backend:', err.response || err.message);
                });
        }
    }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      {repos.length > 0 ? (
        <div>
          <h2>Your Repositories:</h2>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}