import React from "react";
// import profetional from "../assets/profetional.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import { Hero } from "../components/hero/Hero";
import "./styles/Home.css";

function Home() {
  return (
    <div name="Home">
      <Hero />
      <div className="heading">
        <h2>Pets Available for Adoption Nearby</h2>
      </div>
      <div className="container">
        <div className="box">
          <img
            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
            alt=""
          />
          <h3>Boo</h3>
        </div>
        <div className="box">
          <img
            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64094873/1/?bust=1683454882&width=316"
            alt=""
          />
          <h3> Rallo</h3>
        </div>
        <div className="box">
          <img
            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59534213/1/?bust=1683800901&width=316"
            alt=""
          />
          <h3>Bravo</h3>
        </div>
        <div className="box">
          <img
            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316"
            alt=""
          />
          <h3>Tullo</h3>
        </div>
      </div>

      <div className="container">
        <div className="learnbox">
          <img
            src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
            alt=""
          />
          <h3>Dogs Adoption Article</h3>
          <p>Learn about caring for your new dog</p>
          <button>Learn More</button>
        </div>
        <div className="learnbox">
          <img
            src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
            alt=""
          />
          <h3>Cat Adoption Article</h3>
          <p>Helpful insights on what to expect</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="heading">
        <h2> Planning to Adopt a Pet?</h2>
      </div>

      <div className="maindiv">
        <div className="boxdiv">
          <h2>Checklist for New Adopters</h2>
          <p>Help make the transition, as smooth as possible.</p>
          <button>Learn More</button>
        </div>
        <div className="boxdiv">
          <h2> COVID-19 Resources</h2>
          <p>
            Get the latest on adoption processes, learn how local shelters and
            rescue groups are adapting and find out what you can do to help dogs
            and cats in need right now.
          </p>
          <button>Learn More</button>
        </div>
        <div className="boxdiv">
          <h2>Pet Adoption FAQs</h2>
          <p>Get answers to questions you haven't thought of.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
