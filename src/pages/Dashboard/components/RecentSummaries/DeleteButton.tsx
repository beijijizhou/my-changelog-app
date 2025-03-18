import { useMutation, useQueryClient } from "@tanstack/react-query";
import useRepoStore from "../../repoStore";
import { deleteSummary } from "./api";

export default function DeleteButton({ summaryID }: { summaryID: string }) {
    const { resetState } = useRepoStore();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteSummary(summaryID),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["summaries"] }); // Refetch summaries
            resetState();
        },
    });

    return (
        <button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 font-semibold"
        >
            {mutation.isPending ? "Deleting..." : "Delete"}
        </button>
    );
}
