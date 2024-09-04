import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`testimonial-details-wrapper ${className}`}>
      <div className="testimonial-details">
        <div className="testimonial-content">
          <div className="testimonial-heading">
            <div className="testimonial-title">
              <img
                className="smile-hand-drawn-emoticon-2"
                loading="lazy"
                alt=""
              />
              <h1 className="heres-what-our-container">
                <p className="heres-what-our">{`Here’s What Our Top Talent `}</p>
                <p className="heres-what-our">
                  <span>{`Have To Say `}</span>
                  <span className="about-us">About Us</span>
                </p>
              </h1>
            </div>
            <div className="testimonial-answer">
              <h3 className="the-new-age-superheroes">
                The new-age superheroes are breaking the shackles of traditional
                work with Supergigs!
              </h3>
            </div>
          </div>
        </div>
        <div className="talent-quotes">
          <div className="quote-details">
            <div className="quote-elements">
              <img className="smile-hand-drawn-emoticon-1" alt="" />
              <div className="quote-names">
                <div className="quote-names-child" />
                <img className="talent-quote-name" loading="lazy" alt="" />
                <div className="talent-quote-roles">
                  <div className="divya">Divya</div>
                  <div className="duplicate-quote-role">
                    <div className="front-end-developer">
                      Front End Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote-elements1">
              <div className="quote-elements-child" />
              <img className="quote-elements-item" loading="lazy" alt="" />
              <div className="prateek-parent">
                <div className="prateek">Prateek</div>
                <div className="ui-designer-wrapper">
                  <div className="ui-designer">UI Designer</div>
                </div>
              </div>
            </div>
            <div className="quote-elements1">
              <div className="quote-elements-child" />
              <img className="quote-elements-item" loading="lazy" alt="" />
              <div className="luke-parent">
                <div className="luke">Luke</div>
                <div className="full-stack-developer-wrapper">
                  <div className="full-stack-developer">
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-content">
            <div className="best-platform-quote">
              <img className="icon-awesome-quote-right" loading="lazy" alt="" />
              <h3 className="by-far-the-container">
                {`By `}
                <span className="far-the-best">
                  Far, the Best Platform for Independent Talent
                </span>
              </h3>
            </div>
            <div className="supergigs-is-hands-container">
              <p className="heres-what-our">
                Supergigs is hands down the best platform for finding
                high-quality jobs. The Superlancer mentorship provided me with
                valuable guidance and helped me make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
