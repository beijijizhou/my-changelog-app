// AISummaryButton.jsx (or .tsx if using TypeScript)
import { useState } from 'react';
import { toast } from 'react-toastify';
import useRepoStore from '../../repoStore';
import { getCommitSummary } from './api';

const AISummaryButton = () => {
  const { setSelectedSummary, selectedRepo, selectedCommits } = useRepoStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegenerateClick = async () => {
    setIsLoading(true);
    try {
      setSelectedSummary('Loading... Please wait.');
      const data = await getCommitSummary(selectedRepo!, selectedCommits!);
      setSelectedSummary(data.summary);
      toast.success('AI Summary generated successfully!');
    } catch (error) {
      console.error('Error while regenerating the summary:', error);
      setSelectedSummary('Failed to regenerate summary. Please try again.');
      toast.error('Failed to generate AI Summary.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleRegenerateClick}
      className={`px-4 py-2 rounded ml-4 text-white flex items-center ${
        isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Generating...
        </>
      ) : (
        'AI Summary'
      )}
    </button>
  );
};

export default AISummaryButton;