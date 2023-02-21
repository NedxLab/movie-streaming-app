import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/bg/logo.png";
import { BiSearch } from "react-icons/bi";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: { x: 0, height: "100vh", opacity: 1, display: "flex" },
  closed: {
    opacity: 1,
    x: 840,
    transitionEnd: {
      display: "none",
    },
  },
};

const Navbar = () => {
  const router = useRouter();
  const activeElement = router.pathname;
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <FaBars onClick={() => setToggle(true)} />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <a href="/">
                      <Image src={logo} width={100} height={100} alt="Logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className={activeElement === "/" ? "active" : " "}>
                        <a href="/">Home</a>
                      </li>
                      <li
                        className={activeElement === "/movies" ? "active" : " "}
                      >
                        <a href="/movies">Movies</a>
                      </li>
                      <li
                        className={
                          activeElement === "/tv-shows" ? "active" : " "
                        }
                      >
                        <a href="/tv-shows">tv shows</a>
                      </li>
                      <li
                        className={
                          activeElement === "/pricing" ? "active" : " "
                        }
                      >
                        <a href="/pricing">Pricing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="footer-search hidden lg:block">
                        <form action="/">
                          <input
                            type="text"
                            placeholder="Find Favorite Movie"
                          />
                          <button>
                            <BiSearch />
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <motion.div
                initial={{ height: "100vh", display: "none" }}
                animate={toggle ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="mobile-menu"
              >
                <div className="close-btn d-lg-none">
                  <FaTimes onClick={() => setToggle(false)} />
                </div>

                <nav className="menu-box d-lg-none">
                  <div className="nav-logo">
                    <a href="/">
                      <Image src={logo} width={100} height={100} alt="Logo" />
                    </a>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li className={activeElement === "/" ? "active" : " "}>
                        <a href="/">Home</a>
                      </li>
                      <li
                        className={activeElement === "/movies" ? "active" : " "}
                      >
                        <a href="/movies">Movies</a>
                      </li>
                      <li
                        className={
                          activeElement === "/tv-shows" ? "active" : " "
                        }
                      >
                        <a href="/tv-shows">tv shows</a>
                      </li>
                      <li
                        className={
                          activeElement === "/pricing" ? "active" : " "
                        }
                      >
                        <a href="/pricing">Pricing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="/">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaPinterest />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </motion.div>
              <div className="menu-backdrop"></div>
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
