import movieData from "./stream";
import Image from "next/image";
import { log } from "console";

const TopRated = () => {
  let topRated = movieData.map((movie, index) => {
    return parseFloat(movie.rating);
  });
  topRated = topRated.sort(function (a, b) {
    return a - b;
  });
  topRated = topRated.slice(Math.max(topRated.length - 5, 0));
  const filteredMovies = topRated.map((newmovie) => {
    return movieData.filter((movie) => parseFloat(movie.rating) === newmovie);
    // console.log(newmovie);
  });

  console.log(filteredMovies);

  return (
    <section className="top-rated-movie tr-movie-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">Top Rated Movies</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tr-movie-menu-active text-center">
              <button className="active" data-filter="*">
                TV Shows
              </button>
              <button className="" data-filter=".cat-one">
                Movies
              </button>
              <button className="" data-filter=".cat-two">
                documentary
              </button>
              <button className="" data-filter=".cat-three">
                sports
              </button>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {movieData.map((movie, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item mb-3">
                <div className="movie-poster">
                  <a href="movie-details.html">
                    <Image
                      src={movie.image}
                      alt="image"
                      className="rounded-2xl h-96"
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
export default TopRated;
