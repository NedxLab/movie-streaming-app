import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";
import Link from "next/link";

import { AiFillEye, AiFillStar } from "react-icons/ai";

const WorldBest = () => {
  const { fetchedPopularMovies } = useSelector(
    (store: RootState) => store.popularMovies
  );
  const dispatch: AppDispatch = useDispatch();
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <section className="ucm-area ucm-bg mt-5">
      <div className="ucm-bg-shape"></div>
      <div className="container stream">
        <div className="row align-items-end mb-55">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-left">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title text-black">Popular Movies</h2>
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
            <div className="ucm-active flex overflow-x-auto">
              {fetchedPopularMovies.map((movie: IMovieData, i: number) => (
                <div className="movie-item m-4 " key={i}>
                  <div className=" ">
                    <Link href={`/movie/${movie.id}`}>
                      <Image
                        src={imageUrl + movie.poster_path}
                        alt="image"
                        height={600}
                        width={600}
                        className="rounded-2xl min-w-[14rem] max-w-[14rem] w-56 h-60"
                      />
                    </Link>
                  </div>
                  <div className="movie-content mt-3 ">
                    <div className="top">
                      <h5 className="title capitalize text-dark">
                        <Link href={`/movie/${movie.id}`}>
                          {movie.original_title || movie.original_name}
                        </Link>
                      </h5>
                      <span className="date">
                        {movie.release_date.slice(0, 4)}
                      </span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">
                            {movie.original_language}
                          </span>
                        </li>
                        <li>
                          <span className="duration">
                            <AiFillEye /> {movie.vote_count}
                          </span>
                          <span className="rating">
                            <AiFillStar />
                            {movie.vote_average}
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
  );
};

export default WorldBest;
