import React from "react";
import ShortenLink from "../components/ShortenLink";

const Home = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>More than just shorter links</h1>
              <h5>
                Build your brand's recognition and get detailed insights on your
                links are performing.
              </h5>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <ShortenLink />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Advanced Statistics</h3>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="col-4">
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="col-4">
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Boost your links today</h4>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
