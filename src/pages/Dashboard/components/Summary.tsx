import { useState, useEffect } from 'react';
import useRepoStore from '../repoStore';
import { fetchCommits } from '../api';

export default function Summary() {
  const { selectedRepo } = useRepoStore.getState(); // Get selectedRepo from Zustand store
  const [commitMessages, setCommitMessages] = useState<string[]>([]); // Store commit messages
  const [commitSummary, setCommitSummary] = useState<string>(''); // Store AI-generated commit summary
  const [isSummaryEditable, setIsSummaryEditable] = useState<boolean>(false); // Flag to toggle edit mode
  console.log("summary ")
  useEffect(() => {
    const fetchData = async () => {
      if (selectedRepo) {
        // Fetch commit messages when a repo is selected
        const owner = selectedRepo.owner.login;
        const name = selectedRepo.name;
        try {
          // console.log(selectedRepo)
          const data = await fetchCommits(owner, name); 
          console.log(data)
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
    <div>
      <h2>Commit Messages</h2>
      <div>
        {commitMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <h2>Commit Summary</h2>
      {isSummaryEditable ? (
        <textarea
          value={commitSummary}
          onChange={(e) => setCommitSummary(e.target.value)}
          rows={6}
          cols={60}
        />
      ) : (
        <div>{commitSummary}</div>
      )}

      <div>
        <button onClick={handleRegenerateClick}>Regenerate Summary</button>
        {isSummaryEditable && <button onClick={handleSaveSummary}>Save Summary</button>}
      </div>
    </div>
  );
}

