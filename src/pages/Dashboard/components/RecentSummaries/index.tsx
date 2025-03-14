// src/components/RecentSummaries/RecentSummaries.tsx
import useRepoStore from '../../repoStore';
import Summary from './Summary';
import { useSummaries } from './useSummaries'; // Import custom hook

const RecentSummaries = () => {
  const { selectedRepo, setAddNewSummaryState } = useRepoStore();
  const { summaries, loading, error } = useSummaries(selectedRepo);

  if (loading) return <div>Loading Recent Changelogs</div>;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-between text-gray-800">
        Recent Changelogs
        <button
          onClick={() => setAddNewSummaryState(true)}
          className="px-4 py-2 rounded m-2 text-white flex items-center bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg font-semibold"
        >
          +
        </button>
      </h2>


      {error ? (
        <p className="text-red-500">{error}</p>
      ) : summaries ? (
        summaries.map((s, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">
              {new Date(s.commits[0].date).toLocaleDateString()}
            </h3>
            <Summary summary={s.summary} />
          </div>
        ))
      ) : (
        <p>No Changelog available for this repository</p>
      )}
    </div>
  );
};

export default RecentSummaries;