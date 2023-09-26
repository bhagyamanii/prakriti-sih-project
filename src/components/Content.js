import React from "react";
import Carousal from "./Carousal";
import TypesOfPrakriti from "./TypesOfPrakriti";
import Conclusion from "./Conclusion";

const containerStyle = {
  background: "white",
  borderRadius: "10px",
};

const aspectsStyle={
  background:"#E6E6FA",
  borderRadius: "10px",
  padding:"2em",
  
  
}
const dominantCharStyle={
  background:"#ff9980",
  borderRadius: "10px",
  padding:"2em",
  
}
const improvingMethStyle={
  background:"#e6ffe6",
  borderRadius: "10px",
  padding:"2em",

}


export default function Content() {
  return (
    <>
      <div className="container" style={containerStyle}>
        <Carousal />
      </div>

      {/*prakriti define container*/}
      <div id="prakritiLearnMore" className="container my-4 p-2" style={containerStyle}>
        <div className="define mx-3">
          <h1 className="fs-3 fst-italic fw-bold">Prakriti [ प्रकृति ]</h1>
          <p className="fs-6">
            In Ayurveda, "Prakriti" is a fundamental concept that plays a
            pivotal role in understanding an {"individual's"} constitution, health,
            and well-being. It is a Sanskrit term that translates to "nature" or
            "constitution." Prakriti represents the unique and inherent physical
            and psychological characteristics of an individual, which are
            determined at the time of conception. Understanding {"one's"} Prakriti
            is essential in Ayurveda as it forms the basis for personalized
            healthcare and lifestyle recommendations.
          </p>
          <p className="fs-6">
            Prakriti is believed to be a combination of three primary doshas:
            Vata, Pitta, and Kapha. These doshas are the bioenergetic forces
            that govern various physiological and psychological functions in the
            body. Each individual has a specific combination of these doshas
            that defines their Prakriti. {"Let's"} delve deeper into these
            doshas and the concept of Prakriti:
          </p>
        </div>
        <TypesOfPrakriti />
      </div>

      {/*vata container*/}
      <div id="#vataDosh" className="container my-4 p-2" style={containerStyle}>
        <div className="define mx-3">
          <h1 className="fs-3 text-center fst-italic fw-bold">Vata Dosh</h1>
          <p className="fs-6">
            Vata Prakriti, in the context of Ayurveda, represents a unique and
            individual constitution primarily characterized by the dominance of
            the Vata dosha. Vata is composed of the elements of air and space,
            and individuals with a Vata Prakriti tend to exhibit qualities
            associated with these elements. They are often creative, adaptable,
            and possess a quick and agile mind. Physically, Vata types tend to
            have a slender build, dry skin, and a preference for warmth due to{" "}
            {"Vata's"} inherent coldness.
          </p>
          <p className="fs-6">
            However, Vata Prakriti individuals can also be prone to imbalances
            such as anxiety, restlessness, and digestive issues when their dosha
            is aggravated. It's essential for those with a Vata constitution to
            maintain a balanced lifestyle, including a diet that provides
            nourishment and warmth, as well as routines that promote relaxation
            and stability. Ayurveda recognizes the importance of understanding
            one's Prakriti as it forms the basis for personalized health
            recommendations, helping individuals align their lifestyle and
            habits with their inherent nature to achieve optimal well-being.
          </p>
          <hr/>
        </div>

        <div className="row mx-2 text-center ">
          <div className="col col-4" style={aspectsStyle}>
            <p className="fs-5 fw-bold">Aspects</p>
            <p className="text-start">
              <strong className="fst-italic">Elemental Composition:</strong> Air
              and Ether
              <br />
              <strong className="fst-italic">Qualities:</strong> Cold, Dry,
              Light
              <br />
              <strong className="fst-italic">
                Physical Characteristics:
              </strong>{" "}
              Slender, Dry Skin, Cold Extremities
              <br />
              <strong className="fst-italic">Mental Traits:</strong> Creative,
              Enthusiastic, Anxious
              <br />
              <strong className="fst-italic">Digestive Capacity:</strong>{" "}
              Irregular, Sensitive
              <br />
              <strong className="fst-italic">Dietary Preferences:</strong> Warm,
              Nourishing, Hydrating
              <br />
              <strong className="fst-italic">Exercise Preferences:</strong>{" "}
              Gentle, Calming (e.g., Yoga)
              <br />
              <strong className="fst-italic">Skin Type:</strong> Dry, Prone to
              Flakiness
              <br />
              <strong className="fst-italic">Common Imbalances:</strong>{" "}
              Anxiety, Insomnia, Digestive Issues
              <br />
              <strong className="fst-italic">Stress Response:</strong> Worry,
              Nervousness
              <br />
              <strong className="fst-italic">Seasonal Sensitivity:</strong> Cold
              and Dry Seasons
            </p>
          </div>
          <div className="col col-4" style={dominantCharStyle}>
            <p className="fs-5 fw-bold">Dominant Characteristics</p>
            <p className="text-start">
              Vata dominance in Ayurveda displays a constitution where the Vata
              dosha prevails, characterized with the aid of the characteristics
              of air and ether. Right here are key points:
              <br />
              <strong className="fst-italic">Qualities:</strong> Vata-dominant
              people regularly encompass traits like creativity, enthusiasm, and
              flexibility.
              <br />
              <strong className="fst-italic">
                Bodily characteristics:
              </strong>{" "}
              They commonly have a slender frame, dry pores and skin, and might
              enjoy bloodless extremities.
              <br />
              <strong className="fst-italic">
                Health considerations:
              </strong>{" "}
              Vata dominance can lead to irregular digestion, tension, and
              insomnia.
              <br />
              <strong className="fst-italic">
                Weight loss program and way of life:
              </strong>{" "}
              Balancing Vata includes warm, nourishing foods, a ordinary day by
              day routine, and grounding practices.
            </p>
          </div>
          <div className="col col-4" style={improvingMethStyle}>
            <p className="fs-5  fw-bold">Methods to improve</p>
            <p className="text-start">
              <strong className="fst-italic">
                Balancing ordinary and Consistency:
              </strong>
              <br />
              Set up a normal every day habitual with fixed meal and sleep
              instances. Prioritize a steady way of life to calm {"Vata's"}
              erratic nature.
              <br />
              <strong className="fst-italic">Warmth and Nourishment:</strong>
              <br />
              Consume warm, nourishing food and drink to counteract {"Vata's"}
              cold and dry traits. Encompass cooked grains, root greens, and
              natural teas in your food plan.
              <br />
              <strong className="fst-italic">Pressure control:</strong>
              <br />
              Practice relaxation strategies like yoga, meditation, and deep
              respiration to lessen tension and restlessness. Create a peaceful,
              clutter-loose environment to soothe the senses.
              <br />
              <strong className="fst-italic">Oil massage (Abhyanga):</strong>
              <br />
              Regularly perform self-massage with warm oil to hydrate and calm
              the nervous machine. Use sesame or almond oil for satisfactory
              consequences.
            </p>
          </div>
        </div>
      </div>

      {/*pitta container*/}
      <div id="#pittaDosh" className="container my-4 p-2" style={containerStyle}>
        <div className="define mx-3">
          <h1 className="fs-3 text-center fst-italic fw-bold">Pitta Dosh</h1>
          <p className="fs-6">
            Pitta Prakriti, within the Ayurvedic framework, represents a
            distinctive individual constitution primarily characterized by the
            dominance of the Pitta dosha. Pitta is composed of the elements of
            fire and water, and those with a Pitta Prakriti tend to exhibit
            qualities associated with these elements. Pitta individuals are
            often known for their fiery personalities, characterized by strong
            intellect, ambition, and a natural leadership tendency. They have a
            robust metabolism, efficient digestion, and typically display a
            medium build.
          </p>
          <p className="fs-6">
            However, an imbalance in Pitta can manifest as irritability,
            impatience, and a tendency toward conditions like heartburn or
            inflammation. It is crucial for individuals with a Pitta
            constitution to maintain balance through a diet that cools and
            soothes, stress management techniques, and practices that promote
            emotional harmony. Ayurveda emphasizes that recognizing {"one's"}{" "}
            Prakriti is fundamental to personalized health and wellness
            strategies, enabling individuals to tailor their lifestyles to their
            inherent nature and achieve overall vitality and equilibrium.
          </p>
          <hr/>
        </div>

        <div className="row mx-2 text-center ">
          <div className="col col-4" style={aspectsStyle}>
            <p className="fs-5 fw-bold">Aspects</p>
            <p className="text-start">
              <strong className="fst-italic">Elemental Composition:</strong>{" "}
              Fire and Water
              <br />
              <strong className="fst-italic">Qualities:</strong> Hot, Sharp,
              Oily
              <br />
              <strong className="fst-italic">
                Physical Characteristics:
              </strong>{" "}
              Medium Build, Sensitive Skin, Warm
              <br />
              <strong className="fst-italic">Mental Traits:</strong>{" "}
              Intelligent, Determined, Irritable
              <br />
              <strong className="fst-italic">Digestive Capacity:</strong>{" "}
              Strong, Efficient
              <br />
              <strong className="fst-italic">Dietary Preferences:</strong>{" "}
              Cooling, Bitter, Astringent
              <br />
              <strong className="fst-italic">Exercise Preferences:</strong>{" "}
              Moderate, Competitive (e.g., Swimming)
              <br />
              <strong className="fst-italic">Skin Type:</strong> Sensitive,
              Prone to Redness
              <br />
              <strong className="fst-italic">Common Imbalances:</strong>{" "}
              Acidity, Skin Inflammations, Anger
              <br />
              <strong className="fst-italic">Stress Response:</strong>{" "}
              Irritation, Impatience
              <br />
              <strong className="fst-italic">Seasonal Sensitivity:</strong> Hot
              and Humid Seasons
            </p>
          </div>
          <div className="col col-4" style={dominantCharStyle}>
            <p className="fs-5 fw-bold">Dominant Characteristics</p>
            <p className="text-start">
              Pitta dominance indicates a charter where the Pitta dosha is
              distinguished, recognized for characteristics of hearth and water.
              Key points consist of: <br />
              <strong className="fst-italic">Characteristics:</strong>{" "}
              Pitta-dominant individuals have a tendency to exhibit sharp
              intellect, willpower, and leadership talents. <br />
              <strong className="fst-italic">Bodily traits:</strong> They often
              have a medium build, sensitive pores and skin, and may be liable
              to warmness-associated conditions. <br />
              <strong className="fst-italic">
                Health considerations:
              </strong>{" "}
              Pitta dominance can lead to problems like acidity, pores and skin
              inflammations, and anger. <br />
              <strong className="fst-italic">
                Eating regimen and lifestyle:
              </strong>{" "}
              Balancing Pitta includes a cooling weight loss plan, pressure
              control strategies, and keeping a calm thoughts.
            </p>
          </div>
          <div className="col col-4" style={improvingMethStyle}>
            <p className="fs-5  fw-bold">Methods to improve</p>
            <p className="text-start">
              <strong className="fst-italic">Cooling food regimen:</strong>
              <br />
              Emphasize a cooling weight loss plan with leafy greens, cucumbers,
              and coconut. Limit highly spiced and oily foods to save you
              warmness-related problems.
              <br />
              <strong className="fst-italic">Stress reduction:</strong>
              <br />
              Interact in pressure-reduction practices like mindfulness,
              meditation, and gentle exercise. Avoid overcommitting and allow
              time for rest.
              <br />
              <strong className="fst-italic">Hydration:</strong>
              <br />
              Live properly-hydrated to stability {"Pitta's"} fiery nature.
              Drink cool water, herbal infusions, and coconut water.
              <br />
              <strong className="fst-italic">Avoid excess warmth:</strong>
              <br />
              Restrict publicity to direct sunlight and excessive warmness to
              prevent pores and skin irritations. Use natural, cooling skincare
              merchandise.
            </p>
          </div>
        </div>
      </div>

      {/*kapha container*/}
      <div id="#kaphaDosh" className="container my-4 p-2" style={containerStyle}>
        <div className="define mx-3">
          <h1 className="fs-3 text-center fst-italic fw-bold">Kapha Dosh</h1>
          <p className="fs-6">
            Kapha Prakriti, in the Ayurvedic context, signifies a unique and
            individual constitution primarily characterized by the dominance of
            the Kapha dosha. Kapha is composed of the elements of earth and
            water, and individuals with a Kapha Prakriti tend to embody
            qualities associated with these elements. They are often described
            as calm, nurturing, and grounded, with an inherent stability that
            extends to their physical and emotional aspects. Kapha individuals
            typically possess a sturdy build and have smooth, well-hydrated
            skin.
          </p>
          <p className="fs-6">
            However, when Kapha becomes imbalanced, it can lead to tendencies
            such as sluggishness, weight gain, and a propensity for conditions
            related to excess mucus or congestion. Maintaining balance for those
            with a Kapha constitution involves a lifestyle that includes regular
            physical activity, a diet favoring warm and light foods, and
            practices that encourage mental stimulation. Ayurveda underscores
            the importance of understanding {"one's"} Prakriti as it provides
            personalized insights into health and well-being, helping
            individuals align their habits and routines with their inherent
            nature for optimal vitality and equilibrium.
          </p>
          <hr/>
        </div>

        <div className="row mx-2 text-center ">
          <div className="col col-4" style={aspectsStyle}>
            <p className="fs-5 fw-bold">Aspects</p>
            <p className="text-start">
            <strong className="fst-italic">Elemental Composition:</strong> Earth and Water<br />
            <strong className="fst-italic">Qualities:</strong> Cold, Heavy, Oily<br />
            <strong className="fst-italic">Physical Characteristics:</strong> Sturdy Build, Smooth Skin, Cool<br />
            <strong className="fst-italic">Mental Traits:</strong> Stable, Caring, Resistant to Change<br />
            <strong className="fst-italic">Digestive Capacity:</strong> Slow, Steady<br />
            <strong className="fst-italic">Dietary Preferences:</strong> Warm, Spicy, Light<br />
            <strong className="fst-italic">Exercise Preferences:</strong> Energetic, Vigorous (e.g., Running)<br />
            <strong className="fst-italic">Skin Type:</strong> Moist, Prone to Congestion<br />
            <strong className="fst-italic">Common Imbalances:</strong> Weight Gain, Congestion, Lethargy<br />
            <strong className="fst-italic">Stress Response:</strong> Resistance to Change, Attachment<br />
            <strong className="fst-italic">Seasonal Sensitivity:</strong> Cold and Damp Seasons<br />
            
            </p>
          </div>
          <div className="col col-4" style={dominantCharStyle}>
            <p className="fs-5 fw-bold">Dominant Characteristics</p>
            <p className="text-start">
            Kapha dominance represents a constitution where the Kapha dosha prevails, characterized by using features of earth and water. Key factors include:
            <br />
            <strong className="fst-italic">Characteristics:</strong>  Kapha-dominant individuals are recognized for their balance, endurance, and nurturing nature.<br />
            <strong className="fst-italic">Bodily characteristics:</strong> They commonly have a sturdy build, easy skin, and can be susceptible to weight gain and congestion.<br />
            <strong className="fst-italic">Health considerations:</strong>  Kapha dominance can lead to lethargy, congestion, and attachment.<br />
            <strong className="fst-italic">Diet and way of life:</strong>  Balancing Kapha entails normal bodily interest, stimulation, and adopting a lighter day by day routine.
            
            </p>
          </div>
          <div className="col col-4" style={improvingMethStyle}>
            <p className="fs-5  fw-bold">Methods to improve</p>
            <p className="text-start">
            <strong className="fst-italic">Bodily pastime:</strong>
            <br />
            Interact in regular, invigorating exercising to counteract {"Kapha's"} tendency towards lethargy.
            Activities like brisk on foot, yoga, and dancing are beneficial.
            <br />
            <strong className="fst-italic">Nutritional picks:</strong>
            <br />
            Opt for a lighter, warm, and spicy eating regimen to stimulate digestion.
            Lessen consumption of heavy, sweet, and oily foods.
            <br />
            <strong className="fst-italic">Everyday detoxing:</strong>
            <br />
            Recollect occasional detoxification practices like fasting or herbal cleanses to reduce congestion.
            Consult an Ayurvedic practitioner for steering.
            <br />
            <strong className="fst-italic">Stimulation and range:</strong>
            <br />
            Searching for new reports and demanding situations to counter {"Kapha's"} resistance to change.
            Explore innovative pastimes and have interaction in social sports.
            
            </p>
          </div>
        </div>
      </div>
      {/*conclusion*/}
      <Conclusion></Conclusion>
      
    </>
  );
}
