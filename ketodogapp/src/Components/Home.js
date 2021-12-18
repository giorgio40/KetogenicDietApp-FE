import React from "react";
import { useSpring, animated } from "react-spring";
import cancer from "../Images/cancerphoto.jpg";
import "../CSS/home.css";
import keto from "../Images/ketogenic-diet-for-dogs.jpg";
import { Link } from "react-router-dom"
import dogs from "../Images/dogs.jpg";
const Home = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 10 },
    from: { opacity: 0, marginTop: 0 },
    config: { duration: 3000, delay: 2000 },
  });

  const props2 = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -50 },
    config: { duration: 3000, delay: 2000 },
  });

  const props3 = useSpring({
    to: {opacity: 1, marginRight: 0},
    from: {opacity : 0 , marginRight:-50},
    config: { duration: 3000, delay: 2000 }

  })

  return (
    <>
      <animated.div style={props}>
        <div>
          <div
            style={{ backgroundImage: `url(${cancer})` }}
            className="container-img"
          >
            <h2 className="cancer-heading"> What is Cancer?</h2>

            <p className="paragraph">
              The dogmatic view of cancer has been around for a long time. This
              view is called the Somatic Mutation Theory. This Theory is
              believed that cancer arises from damaged DNA in the cells that
              causes out of control cell growth.
            </p>
            <p className="paragraph">
              New Evidence shows that Cancer is caused by the damage to the
              mitochondria causing the cells to fall back on ancient pathways of
              fermentation. Cancer cells ferment Glucose and/or Glutamine for
              energy or ATP.
            </p>

            <p className="paragraph">
              If Cancer is a genetic disease, then why when they did a scientic
              experiment in the 1960's where they took the mitochondria of a
              cancer cell and put it in a normal cell the cell turned cancerous.
              This theory is called the Metabolic Theory of Cancer.
            </p>
          </div>
        </div>
      </animated.div>

      <animated.div style={props2}>
        <div>
          <div style={{ backgroundImage: `url(${keto})` }} className="keto-img">
            <br/> 
            <h2 className="keto-heading"> What is a Ketogenic Diet?</h2>
            <ul>
              <li>
                A ketogenic diet is a High Fat, moderate protein, low
                carbohydrate diet
              </li>
              <li>
                When your on a ketogenic diet for a period of time you enter
                into a state of nutritional ketosis
              </li>
              <li>
                When your in ketosis, ketones are produced by the liver which
                fuel healthy cells in the body and glucose levels drop
                dramatically
              </li>
              <li>
                Cancer cells have damaged mitochondria and cant use ketones, you
                need healthy mitochondria to use ketones for fuel
              </li>
              <li>
                Ketogenic diets have been around since the 1920's, They were
                used for epilepsy in children
              </li>
              <li>
                The researchers saw that when children were on a ketogenic diet and  were <br/> not responsive to anti-seizure medications that there
                seizures reduced significantly
              </li>
            </ul>
            <div className="btn-container">
              <Link to="/mealplan">
              <button type="button" className="button">Click Here to goto Meal Plan </button>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>

      <animated.div style={props3}>
        <div>
          <div style={{ backgroundImage: `url(${dogs})` }} className="keto-img">
            <br/> 
            <h2 className="keto-heading"> Why Exercise is Important when you have your dog on a Ketogenic Diet?</h2>
            <ul>
              <li> When KetoPet Sanctuary was around all the dogs in their cancer care where doing METCON which is metabolic conditioning
              </li>
              <li>
                They were exercised 2 times a day for at least 20 minutes with aerobic exercise
              </li>
              <li>
                  Exercising Can help maintain muscle mass. Every dog in the care of KetoPet was treated as if they were bodybuilders and they were exercised and their calories were tightly controlled
              </li>
              <li>
                While on a ketogenic diet, exercise will burn off excessive glucose, putting further stress on the cancer
              </li>
              <li>
                    It is important to exercise your dog daily with aerobic exercise, like fetching, running with your dog for at least 20 minutes twice a day to keep glucose down.
              </li>
     
            </ul>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Home;


