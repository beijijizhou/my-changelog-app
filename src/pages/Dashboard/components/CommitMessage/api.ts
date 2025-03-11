
import axios from "axios";
import { BACKEND_ROUTE } from "../../../../util/constants/apiRoutes";
import { Commit } from "./interfaces";

export const getCommitSummary = async (commits: Commit[]) => {
    const url = `${BACKEND_ROUTE}/commits/summary`;
    const commitMessages = commits.map(commit => commit.message);
    const repsonse = await axios.post(url, { commitMessages });
    console.log(repsonse.data)
}