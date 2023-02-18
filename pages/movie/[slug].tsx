import { IMovieData } from "../../types/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import firstBg from "../../public/bg/tv_series_bg02.jpg";
import secondBg from "../../public/bg/episode_bg.jpg";
import Link from "next/link";

const baseUrl = "https://api.themoviedb.org/3/movie";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const imageUrl = "https://image.tmdb.org/t/p/original";

const MovieDetails = ({ movies, similar, release }) => {
  release = release.slice(1, 6);
  console.log(movies);

  return (
    <main>
      <section
        className="movie-details-area"
        style={{
          backgroundImage: `url(${imageUrl + movies.backdrop_path})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-3 col-lg-4">
              <div className="movie-details-img">
                <Image
                  src={imageUrl + movies.poster_path}
                  width={800}
                  height={800}
                  alt="movie"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="movie-details-content">
                <h5>New Episodes</h5>
                <h2 className="capitalize">{movies.title}</h2>
                <div className="banner-meta">
                  <ul>
                    <li className="quality">
                      <span>Pg 18</span>
                      <span>{movies.resolution}</span>
                    </li>
                    <li className="category">
                      <a href="#">Romance,</a>
                      <a href="#">Drama</a>
                    </li>
                    <li className="release-time">
                      <span>
                        <i className="far fa-calendar-alt"></i> {movies.year}
                      </span>
                      <span>
                        <i className="far fa-clock"></i> {movies.duration}
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-base">{movies.overview} </p>
                <div className="movie-details-prime">
                  <ul>
                    <li className="share">
                      <a href="#">
                        <i className="fas fa-share-alt"></i> Share
                      </a>
                    </li>
                    <li className="streaming">
                      <h6>Prime Video</h6>
                      <span>Streaming Channels</span>
                    </li>
                    <li className="watch">
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="btn popup-video"
                      >
                        <i className="fas fa-play"></i> Watch Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- movie-details-area-end --> */}

      {/* <!-- episode-area --> */}
      <section
        className="episode-area episode-bg"
        style={{
          backgroundImage: `url(${secondBg.src})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="movie-episode-wrap">
                <div className="episode-top-wrap">
                  <div className="section-title">
                    <span className="sub-title">ONLINE STREAMING</span>
                    <h2 className="title">Find Your Location Release Date.</h2>
                  </div>
                  <div className="total-views-count">
                    <p>
                      2.7 million <i className="far fa-eye"></i>
                    </p>
                  </div>
                </div>
                <div className="episode-watch-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <button
                          className="btn-block m-0 flex justify-between w-full"
                          type="button"
                        >
                          <span className="text-left season">Location</span>
                          <span className="video-count">Release Dates</span>
                        </button>
                      </div>
                      <div className=" show" aria-labelledby="headingOne">
                        <div className="card-body">
                          <ul>
                            {release.map((releases, i) => (
                              <li key={i}>
                                <a href="/" className="popup-video">
                                  <i className="fas fa-play"></i>
                                  {releases.iso_3166_1} -{" "}
                                  {releases.release_dates[0].note
                                    ? releases.release_dates[0].note
                                    : "Not yet announced"}
                                </a>{" "}
                                <span className="duration">
                                  <i className="far fa-clock"></i>{" "}
                                  {releases.release_dates[0].release_date.slice(
                                    0,
                                    -14
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="episode-img">
                <Image
                  src={imageUrl + movies.poster_path}
                  width={800}
                  height={800}
                  alt="movie"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="movie-history-wrap">
                <h3 className="title">
                  About <span>{movies.original_title}</span>
                </h3>
                <p className="text-lg">{movies.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- episode-area-end --> */}

      {/* <!-- tv-series-area --> */}
      <section
        className="tv-series-area tv-series-bg"
        style={{
          backgroundImage: `url(${firstBg.src})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Watch More?</span>
                <h2 className="title">Similar movies</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-7">
            {similar.map((series: IMovieData, i: number) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 " key={i}>
                <div className="movie-item mb-5">
                  <div className="movie-poster">
                    <Link href={`/movie/${encodeURIComponent(series.id)}`}>
                      <Image
                        src={imageUrl + series.poster_path}
                        width={800}
                        height={800}
                        alt="movie"
                      />
                    </Link>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <Link href={`/movie/${encodeURIComponent(series.id)}`}>
                          {series.original_title}
                        </Link>
                      </h5>
                      <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">hd</span>
                        </li>
                        <li>
                          <span className="duration">
                            <i className="far fa-clock"></i> 128 min
                          </span>
                          <span className="rating">
                            <i className="fas fa-thumbs-up"></i> 3.5
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
      {/* <!-- tv-series-area-end --> */}

      {/* <!-- newsletter-area --> */}
      <section
        className="newsletter-area newsletter-bg"
        data-background="img/bg/newsletter_bg.jpg"
      >
        <div className="container">
          <div className="newsletter-inner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="newsletter-content">
                  <h4>Trial Start First 30 Days.</h4>
                  <p>Enter your email to create or restart your membership.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#" className="newsletter-form">
                  <input type="email" required placeholder="Enter your email" />
                  <button className="btn">get started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- newsletter-area-end --> */}
    </main>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const url = params.slug;
  const res = await fetch(
    `${baseUrl}/${url}?api_key=${API_KEY}&language=en-US`
  );
  const similarResponse = await fetch(
    `${baseUrl}/${url}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );
  const releaseResponse = await fetch(
    `${baseUrl}/${url}/release_dates?api_key=${API_KEY}&language=en-US&page=1`
  );

  const movies = await res.json();
  let similar = await similarResponse.json();
  similar = similar.results;
  let release = await releaseResponse.json();
  release = release.results;

  return {
    props: {
      movies,
      similar,
      release,
    },
  };
};

export default MovieDetails;
