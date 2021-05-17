import React, { useState } from "react";

import "../assets/styles/components/ShortenLink.scss";
import "../assets/styles/components/Buttons.scss";
import axios from "axios";
import Loader from "./Loader";

const ShortenLink = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shorter, setShorter] = useState([]);

  const handleChange = (e) => {
    setLink(e.target.value);
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (link) {
      setIsLoading(true);
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response) => {
          setShorter([...shorter, response.data]);
          setIsLoading(false);
          setLink("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  };
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
                className={`shorten__form__input ${error ? "error" : null}`}
                type="text"
                name=""
                id="mylink"
                placeholder="Shorten a link here..."
                value={link}
                onChange={handleChange}
              />
              {error ? (
                <small id="error-desc" className="error">
                  Please add link
                </small>
              ) : null}
              {!isLoading ? (
                <button
                  onClick={handleClick}
                  className="shorten__form__btn btn--green"
                  type="submit"
                >
                  Shorten it!
                </button>
              ) : null}
            </form>
          </div>
        </div>
        <div className="row loader">
          {shorter.length > 0
            ? shorter.map((item, index) => (
                <div key={index} className="col-12 link">
                  <div className="link__item">
                    <p className="link__item__original">
                      {item.result.original_link}
                    </p>
                    <hr />
                    <p className="link__item__shorted">
                      {item.result.short_link}
                    </p>
                    <button
                      onClick={(e) => {
                        navigator.clipboard.writeText(item.result.short_link);
                        e.target.classList.add("copied");
                        e.target.innerHTML = "Copied!";
                      }}
                      className="link__item__btn btn--green"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))
            : null}
          {isLoading ? <Loader /> : null}
        </div>
      </div>
    </section>
  );
};

export default ShortenLink;
