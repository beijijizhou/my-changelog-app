// src/api.ts
import axios from 'axios';

export interface CallbackResponse {
  token: string;
  repos: Repository[];
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
}

export const fetchTokenAndRepos = async (code: string): Promise<CallbackResponse> => {
  const response = await axios.post<CallbackResponse>('http://localhost:5000/callback', { code });
  return response.data;
};