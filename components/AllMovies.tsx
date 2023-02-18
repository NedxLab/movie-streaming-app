const AllMovies = () => {
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
        data-background="img/bg/movie_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-end mb-60">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE STREAMING</span>
                <h2 className="title">New Release Movies</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="movie-page-meta">
                <div className="tr-movie-menu-active text-center">
                  <button className="active" data-filter="*">
                    Animation
                  </button>
                  <button className="" data-filter=".cat-one">
                    Movies
                  </button>
                  <button className="" data-filter=".cat-two">
                    Romantic
                  </button>
                </div>
                <form action="#" className="movie-filter-form">
                  <select className="custom-select">
                    <option selected>English</option>
                    <option value="1">Blueray</option>
                    <option value="2">4k Movie</option>
                    <option value="3">Hd Movie</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row tr-movie-active">
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster01.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">Women's Day</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster02.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Perfect Match</a>
                    </h5>
                    <span className="date">2021</span>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <span className="quality">4k</span>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster03.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Dog Woof</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster04.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Easy Reach</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster05.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Cooking</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster06.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Hikaru Night</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster07.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Life Quotes</a>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src="img/poster/ucm_poster08.jpg" alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <a href="movie-details.html" className="btn">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <a href="movie-details.html">The Beachball</a>
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
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-30">
                <nav>
                  <ul>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
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
