import movieData from "./stream";
import Image from "next/image";
import series from "../public/bg/tv_series_bg.jpg";

const WorldBest = () => {
  const movieSeries = movieData.filter((movie) => movie.genre === "series");

  return (
    <section
      className="tv-series-area tv-series-bg"
      style={{ backgroundImage: `url(${series.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Best TV Series</span>
              <h2 className="title">World Best TV Series</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {movieSeries.map((movie, i) => (
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="movie-item mb-50">
                <div className="movie-poster">
                  <a href="movie-details.html">
                    <Image
                      src={movie.image}
                      alt="movie"
                      className="rounded-2xl min-w-[14rem] max-w-[14rem] w-56 h-60"
                    />
                  </a>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">{movie.title}</a>
                    </h5>
                    <span className="date">{movie.year}</span>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <span className="quality">{movie.resolution}</span>
                      </li>
                      <li>
                        <span className="duration">
                          <i className="far fa-clock"></i> {movie.duration}
                        </span>
                        <span className="rating">
                          <i className="fas fa-thumbs-up"></i> {movie.rating}
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

export default WorldBest;
