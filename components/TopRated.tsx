import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";
import Link from "next/link";
import { getFilter } from "../redux/features/topRatedSlice";
import { getTopRatedMovies } from "../redux/features/topRatedSlice";

const TopRated = () => {
  const [elements, setElement] = useState<string>("all");
  const { topRatedMovies } = useSelector(
    (store: RootState) => store.topRatedMovies
  );

  const newTopRatedMovies = topRatedMovies.slice(0, 8);
  const dispatch: AppDispatch = useDispatch();
  const imageUrl = "https://image.tmdb.org/t/p/original";

  function dispatchFilters(value: number, element: string) {
    dispatch(getFilter(value));
    setElement(element);
  }
  function allFilters() {
    dispatch(getTopRatedMovies());
    setElement("all");
  }

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
                className={elements === "all" ? " active" : ""}
                onClick={() => allFilters()}
              >
                All
              </button>
              <button
                className={elements === "comedy" ? " active" : ""}
                onClick={() => dispatchFilters(35, "comedy")}
              >
                Comedy
              </button>
              <button
                className={elements === "action" ? " active" : ""}
                onClick={() => dispatchFilters(28, "action")}
              >
                Action
              </button>
              <button
                className={elements === "crime" ? " active" : ""}
                onClick={() => dispatchFilters(80, "crime")}
              >
                Crime
              </button>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {newTopRatedMovies.map((movie: IMovieData, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item movie-item-two  mb-3">
                <div className="movie-poster">
                  <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                    <Image
                      src={imageUrl + movie.poster_path}
                      alt="image"
                      width={600}
                      height={300}
                      className="rounded-2xl h-96"
                    />
                  </Link>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                        {movie.original_title || movie.original_name}
                      </Link>
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
