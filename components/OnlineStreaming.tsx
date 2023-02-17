import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";
import { AiFillStar } from "react-icons/ai";

const OnlineStream = () => {
  const { fetchedMovies } = useSelector((store: RootState) => store.movies);
  const dispatch: AppDispatch = useDispatch();
  console.log(fetchedMovies);

  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <section className="ucm-area ucm-bg2">
        <div className="container">
          <div className="row align-items-end mb-55">
            <div className="col-lg-6">
              <div className="section-title title-style-three text-center text-lg-left">
                <span className="sub-title">ONLINE STREAMING</span>
                <h2 className="title text-dark text-3xl font-bold">
                  New Release Movies
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ucm-nav-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="tvShow-tab"
                      data-toggle="tab"
                      href="#tvShow"
                      role="tab"
                      aria-controls="tvShow"
                      aria-selected="true"
                    >
                      TV Shows
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="movies-tab"
                      data-toggle="tab"
                      href="#movies"
                      role="tab"
                      aria-controls="movies"
                      aria-selected="false"
                    >
                      Movies
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="anime-tab"
                      data-toggle="tab"
                      href="#anime"
                      role="tab"
                      aria-controls="anime"
                      aria-selected="false"
                    >
                      Anime
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tvShow"
              role="tabpanel"
              aria-labelledby="tvShow-tab"
            >
              <div className="ucm-active-two flex flex-row space-x-5 mt-4">
                {fetchedMovies.map((movie: IMovieData, i: number) => (
                  <div className="movie-item movie-item-two mb-30" key={i}>
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <Image
                          src={imageUrl + movie.poster_path}
                          alt="image"
                          height={600}
                          width={400}
                          className="rounded-2xl min-w-[14rem] max-w-[14rem] w-56 h-60"
                        />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="rating text-center flex flex-row space-x-1">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <h5 className="title">
                        <a href="movie-details.html">
                          {movie.original_title || movie.original_name}
                        </a>
                      </h5>
                      <span className="rel">Adventure</span>
                      <div className="movie-content-bottom">
                        <ul>
                          <li className="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span className="flex flex-row space-x-3 items-center">
                              <AiFillStar /> {movie.vote_average}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineStream;
