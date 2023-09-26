import React from "react";
import IMAGES from "..";

const conclusionContainerStyle = {
  background: "white",
  borderRadius: "10px",
  // background: "linear-gradient(to bottom, white, #00b33c)",
  background: "radial-gradient(circle at 10% 30%, white, #00b33c)",
};

const ulStyle = {
  listStyleType: "square",
};

export default function Conclusion() {
  return (
    <>
      <div style={conclusionContainerStyle} className="container py-5">
        <div className="p-5 text-center ">
          <h1 className="text-body-emphasis"></h1>
          <p className="col-lg-8 fs-5 mx-auto fw-normal lead text-start">
            <i className="fw-bold">
              In conclusion, Ayurveda, the ancient system of holistic healing,
              revolves around the fundamental concept of Prakriti, which
              signifies an {`individual's`} unique constitution and inherent
              nature. Understanding {`one's`} Prakriti, whether it leans towards
              Vata, Pitta, or Kapha dominance, is pivotal for personalized
              health and well-being. Each dosha dominance comes with distinct
              qualities, physical attributes, and tendencies.
            </i>
            <hr />
            <br />
            <ul style={ulStyle}>
              <li>
                Vata Dominance embodies qualities of air and ether, often
                leading to creativity and adaptability but can manifest as
                anxiety and irregular digestion. Balancing Vata requires warmth,
                routine, and stress management.
              </li>
              <br />
              <li>
                Pitta Dominance represents the interplay of fire and water,
                resulting in determination and intelligence but also a potential
                for irritability and skin issues. A cooling diet and stress
                reduction techniques are key for Pitta balance.
              </li>
              <br />
              <li>
                Kapha Dominance manifests with earth and water qualities,
                resulting in stability and nurturing tendencies but can lead to
                lethargy and weight gain. Stimulation, regular exercise, and a
                lighter routine are vital for Kapha balance.
              </li>
            </ul>
            <hr />
            <br />
            These insights into {`one's`} Prakriti provide guidance for dietary
            choices, lifestyle, and health practices to maintain harmony and
            prevent imbalances. Ayurveda underscores the importance of
            personalized care, recognizing that each individual is unique and
            requires a tailored approach to achieve optimal health and
            well-being.
          </p>
        </div>
      </div>
    </>
  );
}
