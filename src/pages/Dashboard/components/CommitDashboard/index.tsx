import useRepoStore from '../../repoStore';
import { useCommits } from '../../api'; // Import the useCommits hook
import Editor from './Editor';
import CommitMessages from './CommitMessage';
// import Editor from './Editor';

export default function CommitDashboard() {
  const { selectedRepo, setAddNewSummaryState } = useRepoStore(); // Get selectedRepo from Zustand store

  const { data: commitData, isLoading, isError } = useCommits(
    selectedRepo!.owner.login,
    selectedRepo!.name
  );
  if (isLoading) {
    return <div>Loading commit messages...</div>;
  }

  if (isError) {
    return <div>Error fetching commit messages.</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
      {commitData?.commitMessages?.length ? (
        <>
          <CommitMessages commits={commitData.commitMessages} />
          <div>{commitData && <Editor />}</div>
        </>
      ) : (
        <div className="col-span-2 text-center text-gray-500 font-semibold">
          🎉 All caught up! No new changes.
          <div className="mt-4">
            <button
              onClick={() => setAddNewSummaryState(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Return to Recent Changelogs
            </button>
          </div>
        </div>

      )}
    </div>


  );
}