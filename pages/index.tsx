import Head from "next/head";
import Hero from "../components/Hero";
import OnlineStream from "../components/OnlineStreaming";
import MovieAd from "../components/MovieAd";
import TopRated from "../components/TopRated";
import Live from "../components/Live";
import WorldBest from "../components/WorldBest";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/features/movieSlice";
import { getTopRatedMovies } from "../redux/features/topRatedSlice";
import { getPopularMovies } from "../redux/features/popularSlice";
import type { RootState, AppDispatch } from "../redux/store";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  const { topRatedMovies } = useSelector(
    (store: RootState) => store.topRatedMovies
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
  }, []);
  return (
    <>
      <Head>
        {" "}
        <title>Movie App</title>{" "}
      </Head>

      <Hero movies={topRatedMovies} />
      <OnlineStream />
      <MovieAd />
      <TopRated />
      <Live />
      <WorldBest />
      <main>
        <section className="newsletter-area newsletter-bg">
          <div className="container">
            <div className="newsletter-inner-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="newsletter-content">
                    <h4>Trial Start First 30 Days.</h4>
                    <p>
                      Enter your email to create or restart your membership.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="#" className="newsletter-form">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                    <button className="btn">get started</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Home;
