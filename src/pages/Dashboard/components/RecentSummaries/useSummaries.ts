// src/components/RecentSummaries/useSummaries.ts
import { useEffect, useState } from 'react';
import { fetchSummaries } from './api';
import { Repo, Summary } from '../../interface';

export const useSummaries = (selectedRepo: Repo | null) => {
  const [summaries, setSummaries] = useState<Summary[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSummaries = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedSummaries = await fetchSummaries(selectedRepo);
        setSummaries(fetchedSummaries);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load summaries.');
        setSummaries(null);
      } finally {
        setLoading(false);
      }
    };

    loadSummaries();
  }, [selectedRepo]);

  return { summaries, loading, error };
};