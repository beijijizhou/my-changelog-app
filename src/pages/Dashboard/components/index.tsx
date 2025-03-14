import { DropdownProps } from '../interface';
import useRepoStore from '../repoStore';
import CommitDashboard from './CommitDashboard';
import RecentSummaries from './RecentSummaries';

const RepoSelector = ({ repos }: DropdownProps) => {
  const { selectedRepo, setSelectedRepo, addNewSummaryState } = useRepoStore();

  const handleSelectRepo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const repo = repos.find((repo) => repo.id === selectedId);
    setSelectedRepo(repo!);
  };
  console.log(selectedRepo)
  return (
    <div className="flex flex-col items-center w-full">
      <div >
        <select
          id="repo-select"
          onChange={handleSelectRepo}
          value={selectedRepo ? selectedRepo.id : ''}
          className="px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-center w-full max-w-xs"
        >
          <option value="" disabled className="text-gray-500 text-center">
            Select a repository
          </option>
          {repos.map((repo) => (
            <option
              key={repo.id}
              value={repo.id}
              className="text-gray-700 hover:bg-blue-100 text-center"
            >
              {repo.name} ({new Date(repo.updated_at).toLocaleDateString()})

            </option>
          ))}
        </select>
      </div>
      <div>
        {addNewSummaryState ? <CommitDashboard /> : selectedRepo && <RecentSummaries />}
      </div>

    </div>

  );
};

export default RepoSelector;