import { DropdownProps } from '../interface';
import useRepoStore from '../repoStore';
import CommitDashboard from '.';

const Dropdown = ({ repos }: DropdownProps) => {
  const { selectedRepo, setSelectedRepo } = useRepoStore();

  const handleSelectRepo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10); // Convert selectedId to integer
    const repo = repos.find((repo) => repo.id === selectedId);

    setSelectedRepo(repo!); // Update the selected repo
  };
  return (
    <>
      <select
        id="repo-select"
        onChange={handleSelectRepo}
        value={selectedRepo ? selectedRepo.id : ''}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      >
        <option value="" disabled className="text-gray-500">
          Select a repository
        </option>
        {repos.map((repo) => (
          <option
            key={repo.id}
            value={repo.id}
            className="text-gray-700 hover:bg-blue-100"
          >
            {repo.name}
          </option>
        ))}
      </select>
      {selectedRepo && <CommitDashboard></CommitDashboard>}

    </>
  );
};

export default Dropdown;
