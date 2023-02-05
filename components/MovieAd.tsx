import Image from "next/image";
import project from "../public/project.jpg";

const MovieAd = () => {
  return (
    <section
      className="services-area services-bg"
      style={{ background: "black" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="services-img-wrap">
              <Image src={project} alt="movie trailer" />

              <a
                href="../public/images/services_img.jpg"
                className="download-btn"
                download
              >
                Download <img src="fonts/download.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-content-wrap">
              <div className="section-title title-style-two mb-20">
                <span className="sub-title">Our Services</span>
                <h2 className="title">Download Your Shows Watch Offline.</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod tempor.There are many variations of passages of lorem
                Ipsum available, but the majority have suffered alteration in
                some injected humour.
              </p>
              <div className="services-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="flaticon-television"></i>
                    </div>
                    <div className="content">
                      <h5>Enjoy on Your TV.</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-video-camera"></i>
                    </div>
                    <div className="content">
                      <h5>Watch Everywhere.</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieAd;
