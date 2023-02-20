import ImageLoader from "./ImageLoader";
import { IMovieData } from "../types/types";
import React from "react";
import { getCSSVar } from "../helpers";
import type { RootState, AppDispatch } from "../redux/store";
import { HiStar } from "react-icons/hi";
import LazyLoad from "react-lazy-load";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Link from "next/link";

const tmdbPosterPath = "https://image.tmdb.org/t/p/w300_and_h450_face/";
const tmdbBackdropPath = "https://image.tmdb.org/t/p/original";

const MovieSliderItem: React.FC<{ movie: IMovieData }> = ({ movie }) => {
  const { fetchedMovies } = useSelector((store: RootState) => store.movies);

  return (
    <SkeletonTheme
    // color={getCSSVar("--skeleton-theme-color")}
    // highlightColor={getCSSVar("--skeleton-theme-highlight")}
    >
      <div className="container__wrapper movie__slider-wrapper">
        {movie && (
          <div className="movie__slider-backdrop">
            <img alt="" src={tmdbBackdropPath + movie.backdrop_path} />
          </div>
        )}
        <div className="movie__slider-content">
          <div className="movie__slider-description text-3xl">
            <h1>
              <Link href={`/movie/${movie?.id}`}>
                {movie?.original_title || <Skeleton width={"50%"} />}
              </Link>
            </h1>
            <p className="movie__slider-rating text-base">
              {movie?.vote_average ? (
                <>
                  <HiStar className="movie__slider-rating-star text-xl" />
                  &nbsp;{movie.vote_average} Rating
                </>
              ) : (
                <Skeleton width={"30%"} />
              )}
            </p>
            {/* <p className="movie__slider-genre">
              {movie?.genre_ids ? movie.genre_ids?.map(a => (
                <Link className="movie__slider-genre-pill" to={`/genre/${genres.find(b => b.id === a)?.name}/${a}`}>
                  {genres.find(b => b.id === a)?.name}
                </Link>
              )) : (
                <Skeleton width={'25%'} />
              )}
            </p> */}
            <p className="view__overview mt-0 text-lg">
              {movie?.overview || <Skeleton count={4} />}
            </p>
            <br />
          </div>
          <div className="view__poster">
            {movie ? (
              <ImageLoader
                alt={movie.original_title || movie.original_name || movie.title}
                imgId={movie.id}
                src={
                  movie.poster_path
                    ? `${tmdbPosterPath + movie.poster_path}`
                    : "/img-placeholder.jpg"
                }
              />
            ) : (
              <Skeleton width={"100%"} height={"100%"} />
            )}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MovieSliderItem;
