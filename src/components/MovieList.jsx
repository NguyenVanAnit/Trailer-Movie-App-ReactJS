import { useCallback, useEffect, useState } from "react";
import imgTest from "../assets/temp-1.jpg";
import useMovieListStore from "../hooks/movieList";
import { Carousel } from "antd";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const { getMovieList } = useMovieListStore();

  const fetchData = useCallback(async () => {
    try {
      const response = await getMovieList(2);
      console.log("response", response);
      if (response) {
        setMovieList(response.data.results ?? []);
        console.log(movieList);
      } else {
        console.log("Lỗi lấy danh sách");
      }
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black p-6">
      <h3 className="uppercase text-white font-bold pb-4">PHIM HOT</h3>
      <div>
        <Carousel
          slidesToShow={7}
          slidesToScroll={1}
          infinite={false}
          dots={true}
          arrows
          responsive={[
            {
              breakpoint: 1680,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 880,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              },
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              },
            },
          ]}
        >
          {movieList.map((item) => (
            <div key={item.id} className="flex justify-center mx-auto">
              <div className="bg-red-300 w-[200px] h-[300px] group relative mx-auto">
                <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    alt="img-test"
                    className="w-full h-full object-cover"
                  />
                  <p className="absolute bottom-4 left-4 text-white text-md">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList;
