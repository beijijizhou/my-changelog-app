interface CommitMessagesProps {
    messagesByDate: Record<string, { message: string; date: string }[]>;
  }
  
  export default function CommitMessages({ messagesByDate }: CommitMessagesProps) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Commit Messages</h2>
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
  