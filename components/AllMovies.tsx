import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import bg from "../public/bg/pricing_bg.jpg";
import { getTopRatedMovies } from "../redux/features/topRatedSlice";
import { BsEyeFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { showMoviePage } from "../redux/features/topRatedSlice";
import { IMovieData } from "../types/types";

const AllMovies = () => {
  const pages = [1, 2, 3, 4, 5, 6];
  const { topRatedMovies } = useSelector(
    (store: RootState) => store.topRatedMovies
  );
  const dispatch: AppDispatch = useDispatch();
  const [elements, setElement] = useState(1);
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  function dispatchFilters(value: number) {
    if (value === 7) {
      dispatch(showMoviePage(6));
      dispatch(getTopRatedMovies());
      setElement(6);
    } else {
      dispatch(showMoviePage(value));
      dispatch(getTopRatedMovies());
      setElement(value);
    }
  }
  return (
    <main>
      <section className="breadcrumb-area breadcrumb-bg bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">
                  Our <span>Movies</span>
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Watch and browse our lists of collections on interesting
                      and blockbuster movies.
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="movie-area movie-bg"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div className="row align-items-end mb-6">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE STREAMING</span>
                <h2 className="title">Latest TV Shows</h2>
              </div>
            </div>
          </div>
          <div className="row tr-movie-active">
            {topRatedMovies.map((show: IMovieData, i) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two my-3">
                <div className="movie-item movie-item-three mb-50">
                  <div className="movie-poster">
                    <Image
                      src={imageUrl + show.poster_path}
                      alt="image"
                      height={303}
                      width={430}
                      className="rounded-2xl "
                    />
                    <ul className="overlay-btn">
                      <li className="rating">
                        <AiFillStar className="inline" />
                        <AiFillStar className="inline" />
                        <AiFillStar className="inline" />
                        <AiFillStar className="inline" />
                        <AiFillStar className="inline" />
                      </li>
                      <li>
                        <a href="/" className="popup-video btn">
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <Link
                          className="btn"
                          href={`/movie/${encodeURIComponent(show.id)}`}
                        >
                          Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <Link href={`/movie/${encodeURIComponent(show.id)}`}>
                          {show.original_title}
                        </Link>
                      </h5>
                      <span className="date">{show.release_date}</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">hd</span>
                        </li>
                        <li>
                          <span className="duration">
                            <BsEyeFill /> {show.vote_count}
                          </span>
                          <span className="rating">
                            <BsFillHandThumbsUpFill /> {show.vote_average}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-30">
                <nav>
                  <ul>
                    {pages.map((page, i) => (
                      <li
                        className={elements === page ? " active" : ""}
                        key={i}
                      >
                        <button onClick={() => dispatchFilters(page)}>
                          {page}
                        </button>
                      </li>
                    ))}

                    <li>
                      <button onClick={() => dispatchFilters(elements + 1)}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AllMovies;
