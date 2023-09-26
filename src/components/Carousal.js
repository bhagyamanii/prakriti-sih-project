import React from "react";
import IMAGES from "..";

const imgStyle = {
  width: "100%",
  height: "620px",
  opacity: "0.4",
};

function knowMoreClick() {}

export default function Carousal() {
  return (
    <>
      <div
     
        id="carouselExampleDark"
        className="carousel carousel-dark slide my-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={IMAGES.img1}
              className="d-block w-100 rounded"
              alt="..."
              style={imgStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fs-1 fw-bolder">{"What's"} प्रकृति?</h1>
              <p className="fs-5 fst-italic">
                In Ayurveda, determining an {"individual's"} Prakriti
                (constitution) involves assessing their dominant doshas, which
                are Vata, Pitta, and Kapha. Each dosha corresponds to certain
                qualities and characteristics, and the Prakriti is determined by
                the predominant dosha or doshas in an {"individual's"}{" "}
                constitution.
              </p>
              <a href="#" className="btn btn-lg btn-info">
                Learn more
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={IMAGES.img2}
              className="d-block w-100 rounded"
              alt="..."
              style={imgStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fs-1 fw-bolder">Elements of Ayurveda</h1>
              <p className="fs-5 fst-italic">
                In Ayurveda, the fundamental elements are Earth, Water, Fire,
                Air, and Ether (Space). These elements combine to form the three
                doshas (वात, पित्त, and कफ), which govern various aspects of
                health and well-being based on their unique qualities and
                interactions.
              </p>
              <a onClick={knowMoreClick} className="btn btn-lg btn-info">
                Learn more
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={IMAGES.img3}
              className="d-block w-100 rounded"
              alt="..."
              style={imgStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fs-1 fw-bolder">Ayurvedic Doshas</h1>
              <p className="fs-5 fst-italic">
                Ayurvedic doshas,<strong>वात, पित्त, and कफ</strong>, are
                bioenergetic forces representing distinct combinations of the
                five elements (earth, water, fire, air, and ether). They
                influence an {"individual's"} physical, mental, and emotional
                characteristics, and imbalances in these doshas are at the core
                of Ayurvedic diagnosis and treatment.
              </p>
              <a href="#" className="btn btn-lg btn-info">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
