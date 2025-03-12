import { create } from 'zustand';
import { Repo } from './interface';
import { Commit } from './components/CommitMessage/interfaces';
interface RepoStore {
    selectedRepo: Repo | null;
    selectedSummary: string;
    selectedCommits: Commit[] | null,
    setSelectedRepo: (repo: Repo | null) => void;
    setSelectedSummary: (summary: string) => void,

    setSelectedCommits: (commits: Commit[]) => void,
}

const useRepoStore = create<RepoStore>((set) => ({
    selectedRepo: null,
    selectedSummary: "",
    selectedCommits: null,
    setSelectedRepo: (repo) => set({ selectedRepo: repo, selectedSummary: "" }),
    setSelectedSummary: (summary) => set({ selectedSummary: summary }),
    setSelectedCommits: (commits) => set({ selectedCommits: commits }),
}));

export default useRepoStore;
