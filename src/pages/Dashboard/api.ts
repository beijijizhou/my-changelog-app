import axios from "axios";
import { BACKEND_ROUTE } from "../../util/constants/apiRoutes";
import { useQuery } from "@tanstack/react-query";

export const fetchCommits = async (owner: string, repoName: string) => {
  try {
    const response = await axios.get(`${BACKEND_ROUTE}/commits/${owner}/${repoName}`);
    return response.data; // Handle the response data
  } catch (error) {
    console.error("Error fetching commits:", error);
    throw error; // Re-throw the error so React Query can handle it
  }
};

export const useCommits = (owner: string, repoName: string) => {
  return useQuery({
    queryKey: ["commits", owner, repoName], // Query key to uniquely identify the query
    queryFn: () => fetchCommits(owner, repoName), // The fetch function
    enabled: !!owner && !!repoName, // Only run the query if the owner and repoName are available
  });
};