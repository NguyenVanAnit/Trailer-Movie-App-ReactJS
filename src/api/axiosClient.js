import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
