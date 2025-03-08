import { useState } from 'react';
import { DropdownProps, Repo } from '../interface';

const Dropdown = ({ repos }: DropdownProps) => {
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
    
  const handleSelectRepo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10); // Convert selectedId to integer
    const repo = repos.find((repo) => repo.id === selectedId);
    setSelectedRepo(repo || null); // Update the selected repo
  };
  return (
    <div className="relative inline-block w-64">
      <label htmlFor="repo-select" className="block text-gray-700 mb-2">
        Selected Repository: 
      </label>
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


    </div>
  );
};

export default Dropdown;
