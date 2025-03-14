import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_ROUTE, GITHUB_CALLBACK_API_ROUTE } from '../../util/constants/apiRoutes';
import { Repo } from './interface';
import { LocalStorageNames } from '../../util/constants/localstorage';

const GITHUB_REPOS_API_ROUTE = `${BACKEND_ROUTE}/repos`;

export const useGithubAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [repos, setRepos] = useState<Repo[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRepos = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(GITHUB_REPOS_API_ROUTE);
            if (response.data) {
                setRepos(response.data.repos);
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
            setRepos(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const localToken = localStorage.getItem(LocalStorageNames.TOKEN);

        const fetchGithubData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.post(GITHUB_CALLBACK_API_ROUTE, { code });
                const { token, repos } = response.data;
                console.log(token)
                if (token) {
                    localStorage.setItem(LocalStorageNames.TOKEN, token);
                    setToken(token); // Then set in state
                    setRepos(repos);
                }

            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to authenticate with GitHub');
                setToken(null);
                setRepos(null);
            } finally {
                setLoading(false);
            }
        };

        if (code && !localToken ) {
            // Always fetch fresh token with code, even if localToken exists
            fetchGithubData();
        } else if (localToken && !repos) {
            setToken(localToken);
            fetchRepos();
        } else {
            setLoading(false); // No code or token, stop loading
        }
    },[repos]); // Empty array to run once on mount

    return { token, repos, loading, error };
};