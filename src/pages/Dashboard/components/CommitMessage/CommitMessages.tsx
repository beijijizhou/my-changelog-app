import { useState } from "react";
import useRepoStore from "../../repoStore";
import { getCommitSummary } from "./api";
import { CommitMessagesProps } from "./interfaces";
import { groupCommitsByDate } from "./util";

export default function CommitMessages({ commits }: CommitMessagesProps) {
  const { setSelectedSummary, selectedRepo } = useRepoStore();
  const messagesByDate = groupCommitsByDate(commits);
  const initialLimit = 2;

  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({});

  const toggleExpand = (date: string) => {
    setExpandedDates((prev) => ({ ...prev, [date]: !prev[date] }));
  };
  const handleRegenerateClick = async () => {
    try {
      setSelectedSummary("Loading... Please wait."); // Set loading message
      const data = await getCommitSummary(selectedRepo!, commits);
      setSelectedSummary(data.summary);
    } catch (error) {
      console.error("Error while regenerating the summary:", error);
      setSelectedSummary("Failed to regenerate summary. Please try again.");
    }
  };


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Commit Messages
        <button
          onClick={handleRegenerateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4"
        >
          AI Summary
        </button>
      </h2>
      {Object.entries(messagesByDate).map(([date, commits]) => {
        const isExpanded = expandedDates[date];
        const displayedCommits = isExpanded ? commits : commits.slice(0, initialLimit);

        return (
          <div key={date} className="mb-4">
            <h3 className="text-lg font-semibold">{date}</h3>
            <ul className="list-disc pl-5">
              {displayedCommits.map((commit, index) => (
                <li key={index} className="mb-1">{commit.message}</li>
              ))}
            </ul>
            {commits.length > initialLimit && (
              <button
                onClick={() => toggleExpand(date)}
                className="text-blue-500 hover:underline"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        );
      })}


    </div>
  );
}
