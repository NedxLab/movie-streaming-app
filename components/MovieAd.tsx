import Image from "next/image";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";
import { GiSteampunkGoggles } from "react-icons/gi";
import { TbDeviceTvOld } from "react-icons/tb";
import Link from "next/link";

const MovieAd = () => {
  const { unfilteredMovies } = useSelector((store: RootState) => store.movies);
  const imageUrl = "https://image.tmdb.org/t/p/original";
  let fetchedMovies = unfilteredMovies;
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
  let featuredMovie: IMovieData = fetchedMovies[randomNumber];
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
                  src={imageUrl + featuredMovie.backdrop_path}
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
                    <Link
                      href={`/movie/${encodeURIComponent(featuredMovie.id)}`}
                    >
                      {featuredMovie.original_title}
                    </Link>
                  </h2>
                </div>
                <p>{featuredMovie.overview}</p>
                <div className="services-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <TbDeviceTvOld className="text-5xl inline" />
                      </div>
                      <div className="content">
                        <h5>Enjoy on Your TV.</h5>
                        <p>
                          No need for a Satellite, with us, be rest assured your
                          TV won't be boring to watch.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <GiSteampunkGoggles className="text-5xl inline" />
                      </div>
                      <div className="content">
                        <h5>Watch Everywhere.</h5>
                        <p>
                          Enjoy the best of movies at your comfort, anytime you
                          want.
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
