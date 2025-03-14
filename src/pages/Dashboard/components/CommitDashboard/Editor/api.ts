
import axios from "axios";
import { BACKEND_ROUTE } from "../../../../../util/constants/apiRoutes";
import useRepoStore from "../../../repoStore";
import { Commit, Repo } from "../../../interface";
export const saveSummary = async () => {
    const selectedRepo = useRepoStore.getState().selectedRepo!;
    const commits = useRepoStore.getState().selectedCommits;
    const summary = useRepoStore.getState().selectedSummary!;
    const owner = selectedRepo.owner.login;
    const name = selectedRepo.name
    const url = `${BACKEND_ROUTE}/summaries/${owner}/${name}`;
    const repsonse = await axios.post(url, { commits, summary });
    return repsonse.data
}

export const getCommitSummary = async (selectedRepo: Repo, commitMessages: Commit[]) => {
    const owner = selectedRepo.owner.login;
    const name = selectedRepo.name
    const url = `${BACKEND_ROUTE}/commits/${owner}/${name}/summary`;
    const repsonse = await axios.post(url, { commitMessages });
    return repsonse.data
}