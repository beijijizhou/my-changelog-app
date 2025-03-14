import { useEffect, useState } from 'react';
import axios from 'axios';
import { Repo } from './interface';
import Dropdown from './components';
import { GITHUB_CALLBACK_API_ROUTE } from '../../util/constants/apiRoutes';
import { LocalStorageNames } from '../../util/constants/localstorage';

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  // Fetch token and repos from localStorage if they exist
  useEffect(() => {
    const storedToken = localStorage.getItem(LocalStorageNames.TOKEN);
    const storedRepos = localStorage.getItem(LocalStorageNames.REPOS);

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedRepos) {
      setRepos(JSON.parse(storedRepos));
    }
  }, []);

  // Fetch data from backend if the code exists
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code && !token && !repos) {
      axios
        .post(GITHUB_CALLBACK_API_ROUTE, { code })
        .then((res) => {
          const { token, repos } = res.data;
          setToken(token);
          setRepos(repos);

          // Store the token and repos in localStorage for persistence
          localStorage.setItem('token', token);
          localStorage.setItem('repos', JSON.stringify(repos));
        })
        .catch((err) => {
          console.error('Error while fetching data from backend:', err.response || err.message);
        });
    }
  }, [token, repos]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 m-10">Dashboard</h1>
      {repos.length >= 0 ? (
        <div>
          <Dropdown repos={repos} />
        </div>
      ) : (
        <p>No repositories found.</p>
      )}

    </div>
  );
}
