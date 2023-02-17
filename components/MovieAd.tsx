import Image from "next/image";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";

const MovieAd = () => {
  const { fetchedMovies } = useSelector((store: RootState) => store.movies);
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [noMovies, setNoMovies] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    if (fetchedMovies.length < 1) {
      setNoMovies(false);
    } else {
      setNoMovies(true);
    }
    setRandomNumber(Math.floor(Math.random() * 15));
  }, [fetchedMovies]);

  return (
    <section
      className="services-area services-bg"
      style={{ background: "black" }}
    >
      {noMovies && (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-img-wrap">
                <Image
                  src={imageUrl + fetchedMovies[randomNumber].backdrop_path}
                  width={900}
                  height={400}
                  alt="movie trailer"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-content-wrap">
                <div className="section-title title-style-two mb-20">
                  <span className="sub-title">featured movie</span>
                  <h2 className="title">
                    {fetchedMovies[randomNumber].original_title}
                  </h2>
                </div>
                <p>{fetchedMovies[randomNumber].overview}</p>
                <div className="services-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-television"></i>
                      </div>
                      <div className="content">
                        <h5>Enjoy on Your TV.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-video-camera"></i>
                      </div>
                      <div className="content">
                        <h5>Watch Everywhere.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default MovieAd;
