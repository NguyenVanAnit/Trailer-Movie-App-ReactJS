import axiosClient from "./axiosClient";

const getMovieNowPlayingApi = (params) => {
    const paramString = `/now_playing?language=vi&page=${params}`;
    console.log('paramstring', paramString)
    return axiosClient.get(paramString);
}

export { getMovieNowPlayingApi };