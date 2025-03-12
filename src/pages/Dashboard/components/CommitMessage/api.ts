
import axios from "axios";
import { BACKEND_ROUTE } from "../../../../util/constants/apiRoutes";
import { Repo } from "../../interface";
import { Commit } from "./interfaces";
export const getCommitSummary = async (selectedRepo: Repo, commitMessages: Commit[]) => {
    const owner = selectedRepo.owner.login;
    const name = selectedRepo.name
    const url = `${BACKEND_ROUTE}/commits/${owner}/${name}/summary`;
    const repsonse = await axios.post(url, { commitMessages });
    return repsonse.data
}
