import useRepoStore from '../repoStore';
import { useCommits } from '../api'; // Import the useCommits hook
import Editor from './Editor';
import CommitMessages from './CommitMessage/CommitMessages';
// import Editor from './Editor';

export default function CommitDashboard() {
  const { selectedRepo, } = useRepoStore(); // Get selectedRepo from Zustand store

  const { data: commitData, isLoading, isError } = useCommits(
    selectedRepo!.owner.login,
    selectedRepo!.name
  );

  const handleRegenerateClick = async () => {
  };

  if (isLoading) {
    return <div>Loading commit messages...</div>;
  }

  if (isError) {
    return <div>Error fetching commit messages.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* Commit Messages on the Left */}
      <CommitMessages messagesByDate={commitData?.recentCommits || []} />
      <div>
        {commitData && <Editor initialContent={commitData.commitSummary} />}
      </div>

      {/* Action Buttons on the Right */}
      <div className="flex flex-col items-end">
        <div className="mb-2">
          <button
            onClick={handleRegenerateClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Regenerate Summary
          </button>
        </div>
      </div>
    </div>
  );
}