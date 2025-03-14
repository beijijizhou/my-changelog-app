import { useEffect, useState } from "react";
import { groupCommitsByDate } from "./util";
import useRepoStore from "../../../repoStore";
import { CommitMessagesProps } from "../../../interface";

export default function CommitMessages({ commits }: CommitMessagesProps) {
  const { setSelectedCommits } = useRepoStore();
  const messagesByDate = groupCommitsByDate(commits);
  const initialLimit = 2;

  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({});

  const toggleExpand = (date: string) => {
    setExpandedDates((prev) => ({ ...prev, [date]: !prev[date] }));
  };
  useEffect(() => {
    if (commits) {
      setSelectedCommits(commits)
    }
  }, [commits, setSelectedCommits])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Commit Messages
        {/* <AISummaryButton /> */}
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
