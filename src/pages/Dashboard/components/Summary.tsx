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
          // const data = await fetchCommits(owner, name);
          // const { commitMessages, commitSummary } = data
          // // console.log(commitMessages, commitSummary);
          // setCommitMessages(commitMessages);
          // setCommitSummary(commitSummary)
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
    <div className="grid grid-cols-3 gap-4">
      {/* Left Column - Commit Messages */}
      <div className="border p-4">
        <h2 className="text-lg font-semibold">Commits Message</h2>
      </div>
  
      {/* Middle Column - Commit Summary */}
      <div className="border p-4">
        <h2 className="text-lg font-semibold">Commit Summary</h2>
      </div>
  
      {/* Right Column - Action Buttons */}
      <div className="border p-4">
        <h2 className="text-lg font-semibold">Actions</h2>
      </div>
    </div>
  );
}

