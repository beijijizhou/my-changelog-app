/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { LocalStorageNames } from "./constants/localstorage";
export const configureAxiosInterceptors = () => {

  axios.interceptors.request.use(
   
    async (config: any) => {
      const token = localStorage.getItem(LocalStorageNames.TOKEN);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      config.withCredentials = true;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
