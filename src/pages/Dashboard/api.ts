import axios from "axios";
import { BACKEND_ROUTE } from "../../util/constants/apiRoutes";

export const fetchCommits = async (owner:string, repoName:string) => {
  try {
    const response = await axios.get(`${BACKEND_ROUTE}/commits/${owner}/${repoName}`);
    return response.data; // Handle the response data
  } catch (error) {
    console.error('Error fetching commits:', error);
  }
};

