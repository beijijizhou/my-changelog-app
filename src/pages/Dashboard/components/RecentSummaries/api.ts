// src/components/RecentSummaries/api.ts (adjust path as needed)
import axios from 'axios';
import { Repo, Summary } from '../../interface'; // Adjust path to your interface
import { BACKEND_ROUTE } from '../../../../util/constants/apiRoutes'; // Adjust path
export const fetchSummaries = async (selectedRepo: Repo | null): Promise<Summary[]> => {
  if (!selectedRepo) {
    return [];
  }

  try {
    const owner = selectedRepo.owner.login;
    const repo = selectedRepo.name;
    const url = `${BACKEND_ROUTE}/summaries/${owner}/${repo}`;
    const response = await axios.get(url);
    const data = response.data;

    return Array.isArray(data.summaries) ? data.summaries : null;
  } catch (err) {
    console.error('Error fetching summaries:', err);
    throw new Error('Failed to load summaries. Please try again.');
  }
};