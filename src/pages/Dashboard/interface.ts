export interface Repo {
  id: number;
  name: string;
  html_url: string;
}

export interface DropdownProps {
  repos: Repo[];
}