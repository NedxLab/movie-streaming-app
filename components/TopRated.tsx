import movieData from "./stream";
import Image from "next/image";
import { log } from "console";
import React, { useState, useEffect } from "react";

const TopRated = () => {
  var topRatedMovies = [];
  const [filteredTopRatedMovies, setFilteredTopRatedMovies] = useState([]);
  const [active, setActive] = useState("");
  const filterTopRatedMovies = (genre) => {
    setActive(genre);
    topRatedMovies = [];
    var movies = movieData.filter((movie) => movie.genre === genre);

    movies = movies.length < 1 ? movieData : movies;
    let topRated = movies.map((movie, index) => {
      return parseFloat(movie.rating);
    });
    topRated = topRated.sort(function (a, b) {
      return b - a;
    });

    topRated = topRated.slice(0, 4);
    // console.log(topRated);

    var filteredMovies = topRated.map((newmovie) => {
      // console.log(newmovie);
      return movies.filter((movie) => parseFloat(movie.rating) === newmovie);
    });

    filteredMovies.map((movie) => {
      if (Array.isArray(movie)) {
        movie.map((movie) => {
          topRatedMovies.push(movie);
        });
      } else {
        topRatedMovies.push(movie);
      }
    });
    // console.log([...new Set(topRatedMovies)]);
    topRatedMovies = [...new Set(topRatedMovies)];
    // console.log(topRatedMovies);

    // return (
    topRatedMovies = topRatedMovies.slice(0, 4);
    setFilteredTopRatedMovies(topRatedMovies);
    // );
  };
  useEffect(() => {
    filterTopRatedMovies("all");
  }, []);

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
              <button
                className={active === "all" ? "active" : ""}
                onClick={() => filterTopRatedMovies("all")}
              >
                All
              </button>
              <button
                className={active === "series" ? "active" : ""}
                onClick={() => {
                  filterTopRatedMovies("series");
                }}
              >
                Series
              </button>
              <button
                className={active === "action" ? "active" : ""}
                onClick={() => filterTopRatedMovies("action")}
              >
                Action
              </button>
              <button
                className={active === "shows" ? "active" : ""}
                onClick={() => filterTopRatedMovies("shows")}
              >
                shows
              </button>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {filteredTopRatedMovies.map((movie, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item mb-3">
                <div className="movie-poster">
                  <a href="movie-details.html">
                    <Image
                      src={movie.image}
                      alt="image"
                      className="rounded-2xl h-96"
                    />
                  </a>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">{movie.title}</a>
                    </h5>
                    <span className="date">{movie.year}</span>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <span className="quality">{movie.resolution}</span>
                      </li>
                      <li>
                        <span className="duration">
                          <i className="far fa-clock"></i> {movie.duration}
                        </span>
                        <span className="rating">
                          <i className="fas fa-thumbs-up"></i> {movie.rating}
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
