export interface Commit {
    message: string;
    date: string;
    id:string;
  }
  
  export interface CommitMessagesProps {
    commits: Commit[]; // Receive raw commit data
  }