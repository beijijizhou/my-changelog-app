import useRepoStore from "../../../repoStore";

export default function CancelButton() {
    const { setAddNewSummaryState, setSelectedSummary } = useRepoStore();

    const handleCancel = () => {
        setAddNewSummaryState(false);
        setSelectedSummary("");
    };

    return (
        <button
            onClick={handleCancel}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Cancel
        </button>
    );
}
