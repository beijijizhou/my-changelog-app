import { create } from "zustand";
import { Commit, Repo } from "./interface";

interface RepoStore {
    selectedRepo: Repo | null;
    selectedSummary: string;
    selectedCommits: Commit[] | null;
    addNewSummaryState: boolean;
    setSelectedRepo: (repo: Repo | null) => void;
    setSelectedSummary: (summary: string) => void;
    setSelectedCommits: (commits: Commit[]) => void;
    setAddNewSummaryState: (state: boolean) => void;
}

const useRepoStore = create<RepoStore>((set) => ({
    selectedRepo: null,
    selectedSummary: "",
    selectedCommits: null,
    addNewSummaryState: false,  // New state
    setSelectedRepo: (repo) => set({ selectedRepo: repo, selectedSummary: "" }),
    setSelectedSummary: (summary) => set({ selectedSummary: summary }),
    setSelectedCommits: (commits) => set({ selectedCommits: commits }),
    setAddNewSummaryState: (state) => set({ addNewSummaryState: state }), // Setter
}));

export default useRepoStore;
