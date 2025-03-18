
import axios from "axios";
import { BACKEND_ROUTE } from "../../../../../util/constants/apiRoutes";
import useRepoStore from "../../../repoStore";
import { Commit, Repo } from "../../../interface";
export const saveSummary = async () => {
    const { selectedRepo, selectedCommits, selectedSummary, summaryID } = useRepoStore.getState();
    if (!selectedRepo) throw new Error("No repository selected");
    const url = `${BACKEND_ROUTE}/summaries/${selectedRepo.owner.login}/${selectedRepo.name}`;
    const payload = { commits: selectedCommits, summary: selectedSummary };
    if (summaryID) {
        return (await axios.patch(`${url}/${summaryID}`, payload)).data;
    }
    return (await axios.post(url, payload)).data;
};


export const getCommitSummary = async (selectedRepo: Repo, commitMessages: Commit[]) => {
    const owner = selectedRepo.owner.login;
    const name = selectedRepo.name
    const url = `${BACKEND_ROUTE}/commits/${owner}/${name}/summary`;
    const repsonse = await axios.post(url, { commitMessages });
    return repsonse.data
}