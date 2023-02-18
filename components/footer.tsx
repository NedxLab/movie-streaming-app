import Image from "next/image";
import logo from "../public/bg/logo.png";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <a href="/">
                    <Image
                      src={logo}
                      width={100}
                      height={100}
                      alt="Logo"
                      className="inline self-center"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <a href="i/">Home</a>
                      </li>
                      <li>
                        <a href="/movies">Movie</a>
                      </li>
                      <li>
                        <a href="/tv-shows">tv show</a>
                      </li>

                      <li>
                        <a href="/pricing">Pricing</a>
                      </li>
                    </ul>
                    <div className="footer-search">
                      <form action="/">
                        <input type="text" placeholder="Find Favorite Movie" />
                        <button>
                          <BiSearch />
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Help Center</a>
                    </li>
                    <li>
                      <a href="/">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="/">
                        <FaFacebookF className="text-base inline" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaTwitter className="text-base inline" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaPinterest className="text-base inline" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaLinkedin className="text-base inline" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright &copy; NedxFilms {new Date().getFullYear()} All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
