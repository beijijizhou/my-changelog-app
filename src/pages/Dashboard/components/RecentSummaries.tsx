import { useEffect, useState } from 'react';
import useRepoStore from '../repoStore';
import axios from 'axios';
import { Commit } from '../interface';
interface Summary {
  commit: Commit;
  summary: string;
}

const RecentSummaries = () => {
  const { selectedRepo } = useRepoStore();
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummaries = async () => {
      if (!selectedRepo) {
        setSummaries([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const owner = selectedRepo.owner.login; // Adjust if structure differs
        const repo = selectedRepo.name;
        const url = `http://localhost:5000/summaries/${owner}/${repo}`; // Hardcoded for now
        const response = await axios.get(url);
        const data = response.data;

        // Ensure data.summaries exists and is an array
        setSummaries(Array.isArray(data.summaries) ? data.summaries : []);
      } catch (err) {
        console.error('Error fetching summaries:', err);
        setError('Failed to load summaries. Please try again.');
        setSummaries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSummaries();
  }, [selectedRepo]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Summaries</h2>
      {loading ? (
        <p>Loading summaries...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : summaries.length > 0 ? (
        summaries.map((s, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">
              {new Date(s.commit.date).toLocaleDateString()} - {s.commit.message}
            </h3>
            <div 
            className="ql-editor" // Match Quill's rendering class
            dangerouslySetInnerHTML={{ __html: s.summary }} />
          </div>
        ))
      ) : (
        <p>No summaries available for this repository.</p>
      )}
    </div>
  );
};

export default RecentSummaries;