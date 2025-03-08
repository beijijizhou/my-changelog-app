import { create } from 'zustand';
import { Repo } from './interface';
interface RepoStore {
    selectedRepo: Repo | null;
    setSelectedRepo: (repo: Repo | null) => void;
}

const useRepoStore = create<RepoStore>((set) => ({
    selectedRepo: null,
    setSelectedRepo: (repo) => set({ selectedRepo: repo }),
}));

export default useRepoStore;
