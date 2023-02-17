import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";

const TopRated = () => {
  const { topRatedMovies } = useSelector(
    (store: RootState) => store.topRatedMovies
  );
  const dispatch: AppDispatch = useDispatch();
  const imageUrl = "https://image.tmdb.org/t/p/original";

  // var topRatedMovies = [];
  // const [filteredTopRatedMovies, setFilteredTopRatedMovies] = useState([]);
  // const [active, setActive] = useState("");
  // const filterTopRatedMovies = (genre) => {
  //   setActive(genre);
  //   topRatedMovies = [];
  //   var movies = movieData.filter((movie) => movie.genre === genre);

  //   movies = movies.length < 1 ? movieData : movies;
  //   let topRated = movies.map((movie, index) => {
  //     return parseFloat(movie.rating);
  //   });
  //   topRated = topRated.sort(function (a, b) {
  //     return b - a;
  //   });

  //   topRated = topRated.slice(0, 4);
  //   // console.log(topRated);

  //   var filteredMovies = topRated.map((newmovie) => {
  //     // console.log(newmovie);
  //     return movies.filter((movie) => parseFloat(movie.rating) === newmovie);
  //   });

  //   filteredMovies.map((movie) => {
  //     if (Array.isArray(movie)) {
  //       movie.map((movie) => {
  //         topRatedMovies.push(movie);
  //       });
  //     } else {
  //       topRatedMovies.push(movie);
  //     }
  //   });
  //   // console.log([...new Set(topRatedMovies)]);
  //   topRatedMovies = [...new Set(topRatedMovies)];
  //   // console.log(topRatedMovies);

  //   // return (
  //   topRatedMovies = topRatedMovies.slice(0, 4);
  //   setFilteredTopRatedMovies(topRatedMovies);
  //   // );
  // // };
  // useEffect(() => {
  //   filterTopRatedMovies("all");
  // }, []);

  return (
    <section className="top-rated-movie tr-movie-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title text-dark">Top Rated Movies</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tr-movie-menu-active text-center">
              <button className={"active"}>All</button>
              <button className={""}>Series</button>
              <button className={""}>Action</button>
              <button className={""}>shows</button>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {topRatedMovies.map((movie: IMovieData, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item mb-3">
                <div className="movie-poster">
                  <a href="movie-details.html">
                    <Image
                      src={imageUrl + movie.poster_path}
                      alt="image"
                      width={600}
                      height={400}
                      className="rounded-2xl h-96"
                    />
                  </a>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">
                        {movie.original_title || movie.original_name}
                      </a>
                    </h5>
                    <span className="date">{movie.release_date}</span>
                  </div>
                  <div className="bottom">
                    <ul>
                      {/* <li>
                        <span className="quality">{movie.resolution}</span>
                      </li> */}
                      <li>
                        {/* <span className="duration">
                          <i className="far fa-clock"></i> {movie.duration}
                        </span> */}
                        <span className="rating">
                          <i className="fas fa-thumbs-up"></i>{" "}
                          {movie.vote_average}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopRated;
