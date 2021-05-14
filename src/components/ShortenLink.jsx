import React from "react";

import "../assets/styles/components/ShortenLink.scss";
import "../assets/styles/components/Buttons.scss";

const ShortenLink = () => {
  return (
    <section>
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
      </div>
    </section>
  );
};

export default ShortenLink;
