import Image from "next/image";
import SliderItem from "./MovieSliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { IMovieData } from "../types/types";

interface IProps {
  movies: IMovieData[];
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  draggable: true,
  easing: "easeInOutQuad",
  fade: true,
};
const Hero: React.FC<IProps> = ({ movies }) => {
  return (
    <div className="movie__slider">
      {movies.length === 0 ? (
        <SliderItem movie={null} />
      ) : (
        <Slider {...sliderSettings}>
          {movies.map((movie, index) => (
            <SliderItem
              key={movie.id || `movie_slider${index}`}
              movie={movie}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};
export default Hero;
