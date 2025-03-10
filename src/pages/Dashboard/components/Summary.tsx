import { useState, useEffect } from 'react';
import useRepoStore from '../repoStore';
import { fetchCommits } from '../api';

export default function Summary() {
  const { selectedRepo } = useRepoStore.getState(); // Get selectedRepo from Zustand store
  const [commitMessages, setCommitMessages] = useState<string[]>([]); // Store commit messages
  const [commitSummary, setCommitSummary] = useState<string>(''); // Store AI-generated commit summary
  const [isSummaryEditable, setIsSummaryEditable] = useState<boolean>(false); // Flag to toggle edit mode
  useEffect(() => {
    const fetchData = async () => {
      if (selectedRepo) {
        // Fetch commit messages when a repo is selected
        const owner = selectedRepo.owner.login;
        const name = selectedRepo.name;
        try {
          // console.log(selectedRepo)
          const data = await fetchCommits(owner, name);
          const { commitMessages, commitSummary } = data
          // console.log(commitMessages, commitSummary);
          setCommitMessages(commitMessages);
          setCommitSummary(commitSummary)
        } catch (error) {
          console.error('Error fetching commit messages:', error);
        }
      }
    };

    fetchData(); // Call the async function
  }, [selectedRepo]);

  const handleRegenerateClick = () => {
    setIsSummaryEditable(true); // Allow the user to edit the summary
  };

  const handleSaveSummary = () => {
    // Optionally save the edited summary to your backend
    setIsSummaryEditable(false); // Disable edit mode after saving
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* Commit Messages on the Left */}
      <div>
        <h2 className="text-xl font-bold mb-4">Commit Messages</h2>
        <div>
          {commitMessages.map((msg, index) => (
            <p key={index} className="mb-2">{msg}</p>
          ))}
        </div>
      </div>
  
      {/* Commit Summary in the Middle */}
      <div>
        <h2 className="text-xl font-bold mb-4">Commit Summary</h2>
        {isSummaryEditable ? (
          <textarea
            value={commitSummary}
            onChange={(e) => setCommitSummary(e.target.value)}
            rows={6}
            cols={60}
            className="w-full p-2 border rounded"
          />
        ) : (
          <div className="p-2 border rounded">{commitSummary}</div>
        )}
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
        <div>
          {isSummaryEditable && (
            <button
              onClick={handleSaveSummary}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Summary
            </button>
          )}
        </div>
      </div>
    </div>
  );
  
}

