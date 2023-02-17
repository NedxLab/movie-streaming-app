import { IMovieData } from "../../types/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

const baseUrl = "https://api.themoviedb.org/3/movie";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const imageUrl = "https://image.tmdb.org/t/p/original";

const MovieDetails = ({ movies, similar }) => {
  console.log(similar);

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
        data-background="img/bg/episode_bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="movie-episode-wrap">
                <div className="episode-top-wrap">
                  <div className="section-title">
                    <span className="sub-title">ONLINE STREAMING</span>
                    <h2 className="title">Watch Full Episode</h2>
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
                          <span className="text-left season">Season 2</span>
                          <span className="video-count">5 Full Episodes</span>
                        </button>
                      </div>
                      <div className=" show" aria-labelledby="headingOne">
                        <div className="card-body">
                          <ul>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 1 - The
                                World Is Purple
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 2 -
                                Meaner Than Evil
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 3 - I
                                Killed a Man Today
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 4 -
                                Cowboys and Dreamers
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 5 -
                                Freight Trains and Monsters
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button
                          className="btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="season">Season 1</span>
                          <span className="video-count">5 Full Episodes</span>
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 1 - The
                                World Is Purple
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 2 -
                                Meaner Than Evil
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 3 - I
                                Killed a Man Today
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 4 -
                                Cowboys and Dreamers
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video"
                              >
                                <i className="fas fa-play"></i> Episode 5 -
                                Freight Trains and Monsters
                              </a>{" "}
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
                              </span>
                            </li>
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
                <img src="img/images/episode_img.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="movie-history-wrap">
                <h3 className="title">
                  About <span>History</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything errassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- episode-area-end --> */}

      {/* <!-- tv-series-area --> */}
      <section
        className="tv-series-area tv-series-bg"
        data-background="img/bg/tv_series_bg02.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Watch More?</span>
                <h2 className="title text-dark">Similar movies</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-7">
            {similar.map((series: IMovieData, i: number) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 " key={i}>
                <div className="movie-item mb-5">
                  <div className="movie-poster">
                    <a href="movie-detals.html">
                      <Image
                        src={imageUrl + series.poster_path}
                        width={800}
                        height={800}
                        alt="movie"
                      />
                    </a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <a href="movie-details.html" className="text-dark">
                          {series.original_title}
                        </a>
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
  // console.log(context);
  const { params } = context;
  console.log(params.slug);
  // const router = useRouter();
  let url = params.slug;
  url = parseInt(url);
  const res = await fetch(
    `${baseUrl}/${url}?api_key=${API_KEY}&language=en-US`
  );
  const similarResponse = await fetch(
    `${baseUrl}/${url}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );

  const movies = await res.json();
  let similar = await similarResponse.json();
  similar = similar.results;

  return {
    props: {
      movies,
      similar,
    },
  };
};

export default MovieDetails;
