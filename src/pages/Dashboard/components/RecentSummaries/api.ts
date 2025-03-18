// src/components/RecentSummaries/api.ts (adjust path as needed)
import axios from 'axios';
import { Repo, Summary } from '../../interface'; // Adjust path to your interface
import { BACKEND_ROUTE } from '../../../../util/constants/apiRoutes'; // Adjust path
import useRepoStore from '../../repoStore';
import { toast } from 'react-toastify';
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
export const deleteSummary = async (summaryID: string) => {
  try {
    // Get state from Zustand store
    const { selectedRepo } = useRepoStore.getState();

    // Check if selectedRepo exists
    if (!selectedRepo) {
      throw new Error("No repository selected");
    }

    // Construct the URL using template literals
    const url = `${BACKEND_ROUTE}/summaries/${selectedRepo.owner.login}/${selectedRepo.name}`;

    // Make DELETE request and return the response data
    const response = await axios.delete(`${url}/${summaryID}`);
    toast.success("Delete succesfully")
    return response.data;

  } catch (error) {
    // Log the error for debugging
    console.error("Error deleting summary:", error);
    toast.success("There is an error on deleteing summary")
    // Re-throw the error for the caller to handle
    throw error instanceof Error ? error : new Error("An unknown error occurred");
  }
};