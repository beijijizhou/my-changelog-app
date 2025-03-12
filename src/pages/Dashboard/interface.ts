export interface Repo {
  id: number;
  name: string;
  html_url: string;
  owner:{
    login:string
  }
}

export interface DropdownProps {
  repos: Repo[];
}

export interface Commit {
  message: string;
  date: string;
  id:string;
}

export interface CommitMessagesProps {
  commits: Commit[]; // Receive raw commit data
}

export interface Summary {
  commit: Commit;
  summary: string;
}