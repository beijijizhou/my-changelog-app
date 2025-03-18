// src/components/RecentSummaries/useSummaries.ts
import { fetchSummaries } from './api';
import { Repo} from '../../interface';
import { useQuery } from '@tanstack/react-query';

export const useSummaries = (selectedRepo: Repo | null) => {
  return useQuery({
    queryKey: ["summaries", selectedRepo?.name],
    queryFn: () => selectedRepo ? fetchSummaries(selectedRepo) : Promise.resolve([]),
    enabled: !!selectedRepo, // Prevent fetching if there's no repo
  });
};