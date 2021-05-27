import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err);
  }
);

export default axiosInstance;
