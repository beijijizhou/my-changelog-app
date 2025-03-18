// src/components/RecentSummaries/RecentSummaries.tsx
import useRepoStore from '../../repoStore';
import SummaryComponent from './Summary';
import { useSummaries } from './useSummaries'; // Import custom hook

const RecentSummaries = () => {
  const { selectedRepo, setAddNewSummaryState } = useRepoStore();
  const { data: summaries, isLoading, error } = useSummaries(selectedRepo);
  if (isLoading) return <div>Loading Recent Changelogs</div>;
  if (error) return <div>Failed to load Recent Changelogs, Please try this later</div>;
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
              {new Date(summaries[0].commits[0].date).toISOString().split("T")[0]}
            </h3>
            <SummaryComponent {...s} showDeleteButton={index === 0}/>
          </div>
        ))
      ) : (
        <p>No Changelog available for this repository</p>
      )}
    </div>
  );
};

export default RecentSummaries;