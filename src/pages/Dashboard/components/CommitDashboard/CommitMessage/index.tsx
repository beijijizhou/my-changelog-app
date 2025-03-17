import { useState } from "react";
import { groupCommitsByDate } from "./util";
import useRepoStore from "../../../repoStore";

export default function CommitMessages() {
  const { selectedCommits } = useRepoStore();
  const messagesByDate = groupCommitsByDate(selectedCommits!);
  const initialLimit = 2;

  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({});

  const toggleExpand = (date: string) => {
    setExpandedDates((prev) => ({ ...prev, [date]: !prev[date] }));
  };
  

  return (
    <div>
      <div className="flex justify-between items-center min-h-[48px] mb-4">
        <h1 className="text-2xl font-bold">Commit Messages</h1>
      </div>
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
