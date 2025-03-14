/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { LocalStorageNames } from "./constants/localstorage";
export const configureAxiosInterceptors = () => {
  const token = localStorage.getItem(LocalStorageNames.TOKEN);
  axios.interceptors.request.use(
    async (config: any) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        console.log(token)
      }
      config.withCredentials = true;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
