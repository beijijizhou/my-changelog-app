interface Commit {
  message: string;
  date: string;
}

interface CommitMessagesProps {
  commits: Commit[]; // Receive raw commit data
}

export default function CommitMessages({ commits }: CommitMessagesProps) {
  // Sort commits by date (newest first) and group them by date (YYYY-MM-DD)
  const messagesByDate = commits
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort in descending order
    .reduce<Record<string, Commit[]>>((acc, commit) => {
      const commitDate = commit.date.split('T')[0]; // Extract YYYY-MM-DD
      if (!acc[commitDate]) {
        acc[commitDate] = [];
      }
      acc[commitDate].push(commit);
      return acc;
    }, {});

  const handleRegenerateClick = async () => {
    // Functionality for regenerating AI summary
    console.log("ai")
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
      {Object.entries(messagesByDate).map(([date, commits]) => (
        <div key={date} className="mb-4">
          <h3 className="text-lg font-semibold">{date}</h3>
          <ul className="list-disc pl-5">
            {commits.map((commit, index) => (
              <li key={index} className="mb-1">
                {commit.message}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
