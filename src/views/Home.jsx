import React from "react";
import ShortenLink from "../components/ShortenLink";

import illustration from "../assets/img/illustration-working.svg";
import recognition from "../assets/img/icon-brand-recognition.svg";
import records from "../assets/img/icon-detailed-records.svg";
import customizable from "../assets/img/icon-fully-customizable.svg";

import "../assets/styles/views/Home.scss";
import "../assets/styles/components/Buttons.scss";

const Home = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row hero">
            <div className="col-md-5 col-sm-12 hero__info">
              <h1 className="hero__info__title">
                More than just shorter links
              </h1>
              <p className="hero__info__subtitle">
                Build your brand's recognition and get detailed <br /> insights
                on your links are performing.
              </p>
              <button className="hero__info__btn btn--green">
                Get Started
              </button>
            </div>
            <div className="col-md-7 col-sm-12 hero__image">
              <img src={illustration} alt="illustration-working" />
            </div>
          </div>
        </div>
      </section>

      <ShortenLink />

      <section className="bg--gray">
        <div className="container">
          <div className="row advanced">
            <div className="col-12 advanced__info">
              <h2 className="advanced__info__title">Advanced Statistics</h2>
              <p className="advanced__info__description">
                Track how your links are performing across the web with
                <br /> our advanced statistics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg--gray">
        <div className="container">
          <div className="row characteristic">

            <hr className="line--green"/>

            <div className="col-4 card-one">
              <div className="characteristic__card">
                <div className="characteristic__card__image circle">
                  <img src={recognition} alt="recognition" />
                </div>
                <p className="characteristic__card__title">Brand Recognition</p>
                <p className="characteristic__card__description">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>

            <div className="col-4 card-two">
              <div className="characteristic__card">
                <div className="characteristic__card__image circle">
                  <img src={records} alt="records" />
                </div>
                <p className="characteristic__card__title">Detailed Records</p>
                <p className="characteristic__card__description">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>

            <div className="col-4 card-three">
              <div className="characteristic__card">
                <div className="characteristic__card__image circle">
                  <img src={customizable} alt="customizable" />
                </div>
                <p className="characteristic__card__title">
                  Fully Customizable
                </p>
                <p className="characteristic__card__description">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section
        className="bg--violet section__started"
        style={{ backgroundImage: "url(/img/bg-boost-desktop.svg)" }}
      >
        <div className="container">
          <div className="row started">
            <div className="col-12 started__info">
              <h2 className="started__info__title">Boost your links today</h2>
              <button className="started__info__btn btn--green">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
