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