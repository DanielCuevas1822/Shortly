import React from "react";

import "../assets/styles/components/ShortenLink.scss";
import "../assets/styles/components/Buttons.scss";

const ShortenLink = () => {
  return (
    <section className="bg--gray shorten__section">
      <div className="container">
        <div
          className="row shorten"
          style={{ backgroundImage: "url(/img/bg-shorten-desktop.svg)" }}
        >
          <div className="col-12">
            <form className="shorten__form">
              <input
                className="shorten__form__input"
                type="text"
                name=""
                id=""
                placeholder="Shorten a link here..."
              />
              <button className="shorten__form__btn btn--green" type="submit">
                Shorten it!
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 link">
            <div className="link__item">
              <p className="link__item__original">
                https://www.youtube.com/watch?v=hrGsV80Ke4Q
              </p>
              <hr />
              <p className="link__item__shorted">shrtco.de/FuHBxz</p>
              <button className="link__item__btn btn--green">Copy</button>
            </div>
          </div>
          <div className="col-12 link">
            <div className="link__item">
              <p className="link__item__original">
                https://www.youtube.com/watch?v=hrGsV80Ke4Q
              </p>
              <hr />
              <p className="link__item__shorted">shrtco.de/FuHBxz</p>
              <button className="link__item__btn btn--green">Copy</button>
            </div>
          </div>
          <div className="col-12 link">
            <div className="link__item">
              <p className="link__item__original">
                https://www.youtube.com/watch?v=hrGsV80Ke4Q
              </p>
              <hr />
              <p className="link__item__shorted">shrtco.de/FuHBxz</p>
              <button className="link__item__btn btn--green">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortenLink;
