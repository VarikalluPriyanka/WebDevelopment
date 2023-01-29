import React, { useState } from "react";
const Prog = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / height / height) * 10000;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("../images/underweight.png");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      imgSrc = require("../images/healthy.png");
    } else {
      imgSrc = require("../images/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="mycontainer">
        <div className="theory">
        <p>
          BMI is a measurement of a person's leanness or corpulence based on
          their height and weight, and is intended to quantify tissue mass. It
          is widely used as a general indicator of whether a person has a
          healthy body weight for their height.
        </p>
        <p>
          <b>Formula:</b>
          weight (kg) / [height (m)]2 (or) [weight (kg) / height (cm) / height
          (cm)] x 10,000
        </p>
        <p>
          <b>BMI for adults:</b> This is the World Health Organization's (WHO)
          recommended body weight based on BMI values for adults. It is used for
          both men and women, age 18 or older.
        </p>
        </div>
        <div className="cod">
        <h3>Code:</h3>
          <p>
            <pre>
              {`
              import React, { useState } from "react";

              const Prog = () => {
                const [weight, setWeight] = useState(0);
                const [height, setHeight] = useState(0);
                const [bmi, setBmi] = useState("");
                const [message, setMessage] = useState("");
              
                let calcBmi = (event) => {
                  //prevent submitting
                  event.preventDefault();
              
                  if (weight === 0 || height === 0) {
                    alert("Please enter a valid weight and height");
                  } else {
                    let bmi = (weight / height / height) * 10000;
                    setBmi(bmi.toFixed(1));
              
                    // Logic for message
              
                    if (bmi < 25) {
                      setMessage("You are underweight");
                    } else if (bmi >= 25 && bmi < 30) {
                      setMessage("You are a healthy weight");
                    } else {
                      setMessage("You are overweight");
                    }
                  }
                };
              
                //  show image based on bmi calculation
                let imgSrc;
              
                if (bmi < 1) {
                  imgSrc = null;
                } else {
                  if (bmi < 18.5) {
                    imgSrc = require("../images/underweight.png");
                  } else if (bmi >= 18.5 && bmi <= 24.9) {
                    imgSrc = require("../images/healthy.png");
                  } else {
                    imgSrc = require("../images/overweight.png");
                  }
                }
              
                let reload = () => {
                  window.location.reload();
                };
              
                return (
                  <div className="app">
                    <div className="containe">
                      <h2 className="center">BMI Calculator</h2>
                      <form onSubmit={calcBmi}>
                        <div>
                          <label>Weight (kg)</label>
                          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>
                        <div>
                          <label>Height (cm)</label>
                          <input
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}
                          />
                        </div>
                        <div>
                          <button className="btn" type="submit">
                            Submit
                          </button>
                          <button className="btn btn-outline" onClick={reload} type="submit">
                            Reload
                          </button>
                        </div>
                      </form>
              
                      <div className="center">
                        <h3>Your BMI is: {bmi}</h3>
                        <p>{message}</p>
                      </div>
              
                      <div className="img-container">
                        <img src={imgSrc} alt=""></img>
                      </div>
                    </div>
                  </div>
                );
              };
              export default Prog;
              
              `}
            </pre>
          </p>
          
        </div>
        <div className="my">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (kg)</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Height (cm)</label>
              <input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>
            <br />
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn2" onClick={reload} type="submit">
                Reload
              </button>
            </div>
          </form>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <h5>{message}</h5>
          </div>

          <div className="img-container">
            <img src={imgSrc} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prog;
