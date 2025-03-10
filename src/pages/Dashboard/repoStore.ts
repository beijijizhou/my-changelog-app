import { create } from 'zustand';
import { Repo } from './interface';
interface RepoStore {
    selectedRepo: Repo | null;
    selectedSummary:string;
    setSelectedRepo: (repo: Repo | null) => void;
    setSelectedSummary:(summary:string) =>void,

}

const useRepoStore = create<RepoStore>((set) => ({
    selectedRepo: null,
    selectedSummary:"",
    setSelectedRepo: (repo) => set({ selectedRepo: repo }),
    setSelectedSummary:(summary) =>set({selectedSummary:summary}),
}));

export default useRepoStore;
