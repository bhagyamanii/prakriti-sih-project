import React from "react";
import IMAGES from "..";

const cardStyle = {
  width: "18rem",
  border: "2px solid",
  height: "60vh"
  
};

const imgStyle={
    height: "30vh"
}

export default function TypesOfPrakriti() {
  return (
    <div className="container mx-5">
      <div className="row">
        <div className="col col-4">
          <div className="card" style={cardStyle}>
            <img style={imgStyle} src={IMAGES.vat} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-5"><strong>Vata Dosha</strong></h5>
              <p className="card-text fs-6">
                Primarly comprised of air and space but additionally have cold, dry and light components in it
              </p>
              <a href="#" className="btn btn-primary">
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className="col col-4">
          <div className="card" style={cardStyle}>
            <img style={imgStyle} src={IMAGES.pitt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-5"><strong>Pitta Dosha</strong></h5>
              <p className="card-text fs-6">
              Primarly comprised of fire and water but additionally have hot, sharp, oily and intense components in it
              </p>
              <a href="#" className="btn btn-primary">
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className="col col-4">
          <div className="card" style={cardStyle}>
            <img style={imgStyle} src={IMAGES.kaff} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-5"><strong>Kapha Dosha</strong></h5>
              <p className="card-text fs-6">
              Primarly comprised of earth and water but additionally have cold, heavy,stable and lubricating components in it
              </p>
              <a href="#" className="btn btn-primary">
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
