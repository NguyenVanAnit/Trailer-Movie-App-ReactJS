import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

function App() {
  // const [movie, setMoive] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "https://api.themoviedb.org/3/movie/now_playing?language=vi&page=1";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  //       },
  //     };

  //     const response = await fetch(url, options);
  //     const data = await response.json();

  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div>
        <Header />
        <Banner />
        <MovieList />
        <MovieList />
      </div>
    </>
  );
}

export default App;
