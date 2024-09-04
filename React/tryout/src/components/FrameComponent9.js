import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`testimonial-content-wrapper ${className}`}>
      <div className="testimonial-content1">
        <div className="testimonial-header">
          <div className="heres-what-our-top-talent-ha-parent">
            <h1 className="heres-what-our-container1">
              <p className="heres-what-our1">{`Here’s What Our Top Talent `}</p>
              <p className="heres-what-our1">
                <span>{`Have To Say `}</span>
                <span className="about-us2">About Us</span>
              </p>
            </h1>
            <div className="testimonial-quote">
              <h3 className="the-new-age-superheroes1">
                The new-age superheroes are breaking the shackles of traditional
                work with Supergigs!
              </h3>
            </div>
          </div>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card-container">
            <div className="smile-hand-drawn-emoticon-1-parent">
              <img
                className="smile-hand-drawn-emoticon-11"
                alt=""
                src="/smilehanddrawnemoticon-1@2x.png"
              />
              <div className="testimonial-names">
                <div className="testimonial-names-child" />
                <img
                  className="talent-names-icon"
                  loading="lazy"
                  alt=""
                  src="/ellipse-253@2x.png"
                />
                <div className="testimonial-roles">
                  <div className="divya1">Divya</div>
                  <div className="single-role">
                    <div className="front-end-developer1">
                      Front End Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent10">
              <div className="frame-child23" />
              <img
                className="frame-child24"
                loading="lazy"
                alt=""
                src="/ellipse-254@2x.png"
              />
              <div className="prateek-group">
                <div className="prateek1">Prateek</div>
                <div className="ui-designer-container">
                  <div className="ui-designer1">UI Designer</div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent10">
              <div className="frame-child23" />
              <img
                className="frame-child24"
                loading="lazy"
                alt=""
                src="/ellipse-255@2x.png"
              />
              <div className="luke-group">
                <div className="luke1">Luke</div>
                <div className="full-stack-developer-container">
                  <div className="full-stack-developer1">
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-quote-container">
            <img
              className="icon-awesome-quote-right1"
              loading="lazy"
              alt=""
              src="/icon-awesomequoteright.svg"
            />
            <div className="quote-content1">
              <div className="testimonial">
                <img
                  className="smile-hand-drawn-emoticon-21"
                  loading="lazy"
                  alt=""
                  src="/smilehanddrawnemoticon-2@2x.png"
                />
                <h3 className="supergigs-provided-an-container">
                  {`Supergigs `}
                  <span className="provided-an-unbelievably">
                    Provided an Unbelievably Seamless Experience
                  </span>
                </h3>
              </div>
              <div className="supergigs-provided-a">
                Supergigs provided a seamless experience for me to connect with
                potential clients through a user-friendly interface, and helpful
                features made it easy to navigate and land high-paying jobs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
