import { toast } from "react-toastify";
import { saveSummary } from "./api"; // Adjust path as needed
import useRepoStore from "../../../repoStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const SaveButton = () => {
  const { selectedSummary, resetState } = useRepoStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: saveSummary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commits"] });
      toast.success("Summary saved successfully!");
      resetState();
    },
    onError: () => {
      toast.error("Failed to save summary.");
    },
  });

  const isDisabled = isPending || selectedSummary === "";

  return (
    <button
      onClick={() => mutate()}
      className={`px-4 py-2 rounded ml-4 text-white flex items-center 
        ${isDisabled ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      disabled={isDisabled}
    >
      {isPending ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Saving...
        </>
      ) : (
        "Save"
      )}
    </button>
  );
};

export default SaveButton;
