export interface Repo {
  id: number;
  name: string;
  html_url: string;
  owner: {
    login: string
  };
  updated_at:Date;
}

export interface DropdownProps {
  repos: Repo[];
}

export interface Commit {
  message: string;
  date: string;
  id: string;
}

export interface CommitMessagesProps {
  commits: Commit[]; // Receive raw commit data
}

export interface Summary {
  commits: Commit[];
  summary: string;
}