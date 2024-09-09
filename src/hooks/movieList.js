// import { useSelector } from "react-redux"
import { getMovieNowPlayingApi } from "../api/movieList"

const useMovieListStore = () => {
    // const moiveListState = useSelector((state) => state.moiveList);

    const getMovieList = async (params) => {
        try {
            const response = await getMovieNowPlayingApi(params);
            console.log('hook response', response);
            return response;
            // if (response) {
            //     return response;
            // } else {
            //     console.log('Lấy danh sách phim thất bại');
            //     return response;
            // }
        } catch (e) {
            console.log('Lỗi hệ thống: ', e);
        }
    }

    return {
        // moiveListState,
        getMovieList
    }

}

export default useMovieListStore;