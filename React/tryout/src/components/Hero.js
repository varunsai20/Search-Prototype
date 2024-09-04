import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-image">
            <div className="virtual-image">
              <img className="virtual-image-child" alt="" />
              <div className="vr-image-wrapper">
                <div className="vr-image">
                  <img className="image-placeholder-icon" alt="" />
                  <img className="virtual-reality-experience-252-icon" alt="" />
                  <div className="image-placeholder-parent">
                    <img className="image-placeholder-icon1" alt="" />
                    <img
                      className="fun-3d-illustration-teenage-gi-icon"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-title">
              <div className="embrace-work">
                <img className="path13398-icon" loading="lazy" alt="" />
                <h1 className="embrace-the-future">
                  Embracing The Future Of Work
                </h1>
                <img className="embrace-work-child" loading="lazy" alt="" />
              </div>
            </div>
            <div className="description">
              <div className="talent-pool">
                <div className="top-talent">
                  <div className="get-access-to">
                    Get access to a pre-vetted pool of 500+ top-notch talent
                  </div>
                  <img className="highlight-icon" alt="" />
                </div>
                <div className="assessment">
                  <div className="get-access-to">{`Unbiased talent assessment & AI-driven recommendations`}</div>
                </div>
                <div className="vector-container">
                  <img className="rectangle-icon" alt="" />
                  <div className="explore-jobs">Explore Jobs</div>
                </div>
                <img className="button-background-icon" alt="" />
              </div>
              <div className="vetting">
                <div className="hiring-time">
                  <div className="reduced-time">
                    <img className="reduced-highlight-icon" alt="" />
                    <div className="rigorous-vetting-process">
                      Rigorous vetting process to cut hiring time significantly
                    </div>
                  </div>
                  <img className="green-highlight-icon" alt="" />
                </div>
                <div className="risk-free">
                  <div className="get-access-to">
                    Opt for 2-weeks risk-free talent hiring
                  </div>
                </div>
                <div className="group-div">
                  <img className="rectangle-icon" alt="" />
                  <div className="hire-talent1">Hire Talent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer">
          <img className="spacer-child" alt="" src="/group-37073.svg" />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
