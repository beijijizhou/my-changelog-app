import { Commit } from "../../../interface";

export const groupCommitsByDate = (commits: Commit[]): Record<string, Commit[]> => {
    return commits
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort in descending order
        .reduce<Record<string, Commit[]>>((acc, commit) => {
            const commitDate = commit.date.split('T')[0]; // Extract YYYY-MM-DD
            (acc[commitDate] ||= []).push(commit);
            return acc;
        }, {});
}
