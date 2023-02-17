import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import OnlineStream from "../components/OnlineStreaming";
import MovieAd from "../components/MovieAd";
import TopRated from "../components/TopRated";
import Live from "../components/Live";
import WorldBest from "../components/WorldBest";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/features/movieSlice";
import { getTopRatedMovies } from "../redux/features/topRatedSlice";
import { getPopularMovies } from "../redux/features/popularSlice";
import type { RootState, AppDispatch } from "../redux/store";

export default function Home() {
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
      <Navbar />
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
      <Footer />
    </>
  );
}
