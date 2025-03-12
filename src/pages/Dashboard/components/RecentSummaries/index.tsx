// src/components/RecentSummaries/RecentSummaries.tsx
import useRepoStore from '../../repoStore';
import { useSummaries } from './useSummaries'; // Import custom hook

const RecentSummaries = () => {
  const { selectedRepo } = useRepoStore();
  const { summaries, loading, error } = useSummaries(selectedRepo);

  if (loading) return <div>Loading Recent Changelog</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Summaries</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : summaries.length > 0 ? (
        summaries.map((s, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">
              {new Date(s.commit.date).toLocaleDateString()} - {s.commit.message}
            </h3>
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: s.summary }} />
          </div>
        ))
      ) : (
        <p>No summaries available for this repository.</p>
      )}
    </div>
  );
};

export default RecentSummaries;