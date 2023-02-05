import movieData from "./stream";
import Image from "next/image";

const OnlineStream = () => {
  return (
    <section className="ucm-area ucm-bg">
      <div className="ucm-bg-shape"></div>
      <div className="container stream">
        <div className="row align-items-end mb-55">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-left">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title text-black">Upcoming Movies</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ucm-nav-wrap">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="tvShow-tab"
                    data-toggle="tab"
                    href="#tvShow"
                    role="tab"
                    aria-controls="tvShow"
                    aria-selected="true"
                  >
                    TV Shows
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="movies-tab"
                    data-toggle="tab"
                    href="#movies"
                    role="tab"
                    aria-controls="movies"
                    aria-selected="false"
                  >
                    Movies
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="anime-tab"
                    data-toggle="tab"
                    href="#anime"
                    role="tab"
                    aria-controls="anime"
                    aria-selected="false"
                  >
                    Anime
                  </a>
                </li>
              </ul>
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
              {movieData.map((movie, i) => (
                <div className="movie-item m-4 " key={i}>
                  <div className=" ">
                    <a href="#">
                      <Image
                        src={movie.image}
                        alt="image"
                        className="rounded-2xl min-w-[14rem] max-w-[14rem] w-56 h-60"
                      />
                    </a>
                  </div>
                  <div className="movie-content mt-3 ">
                    <div className="top">
                      <h5 className="title capitalize text-dark">
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
                          <span className="duration text-dark">
                            <i className="far fa-clock "></i> {movie.duration}
                          </span>
                          <span className="rating text-dark">
                            <i className="fas fa-thumbs-up "></i> {movie.rating}
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

export default OnlineStream;
