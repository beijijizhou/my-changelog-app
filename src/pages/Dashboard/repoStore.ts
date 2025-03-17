import { create } from "zustand";
import { Commit, Repo, Summary } from "./interface";

interface RepoStore {
    selectedRepo: Repo | null;
    selectedSummary: string;
    selectedCommits: Commit[] | null;
    addNewSummaryState: boolean;
    summaryID: string | null;
    setSelectedRepo: (repo: Repo | null) => void;
    setSelectedSummary: (summary: string) => void;
    setSelectedCommits: (commits: Commit[]) => void;
    setAddNewSummaryState: (state: boolean) => void;
    setSummaryID: (id: string) => void;  // Setter for summaries

}

const useRepoStore = create<RepoStore>((set) => ({
    selectedRepo: null,
    selectedSummary: "",
    selectedCommits: null,
    summaryID: null,
    addNewSummaryState: false,  // New state
    setSelectedRepo: (repo) => set({ selectedRepo: repo, selectedSummary: "" }),
    setSelectedSummary: (summary) => set({ selectedSummary: summary }),
    setSelectedCommits: (commits) => set({ selectedCommits: commits }),
    setAddNewSummaryState: (state) => set({ addNewSummaryState: state }), // Setter
    setSummaryID: (id) => set({ summaryID: id }), // Setter function

}));

export default useRepoStore;
