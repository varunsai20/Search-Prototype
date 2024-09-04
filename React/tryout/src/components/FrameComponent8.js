import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`desktop-15-inner ${className}`}>
      <div className="content-wrapper-parent">
        <div className="content-wrapper">
          <div className="heres-how-we-can-help-you-container">
            <h1 className="heres-how-we-container1">
              <span>{`Here's How We Can `}</span>
              <span className="help-you1">Help You</span>
            </h1>
          </div>
          <div className="frame-parent5">
            <div className="frame-wrapper2">
              <div className="find-jobs-group">
                <h3 className="find-jobs3">Find Jobs</h3>
                <div className="hire-talent-parent">
                  <h3 className="hire-talent4">Hire Talent</h3>
                  <div className="card" />
                </div>
              </div>
            </div>
            <div className="join-the-ranks-container">
              J
              <span className="oin-the-ranks">
                oin the Ranks of Trusted Businesses That Have Access to Our
                Never Seen Before Dream Team, Comprising Top Talent and Trending
                Capabilities in the Market.
              </span>
            </div>
          </div>
          <div className="content-wrapper-inner">
            <div className="vector-parent6">
              <img className="frame-child17" alt="" src="/rectangle-7162.svg" />
              <div className="sign-in2">Sign In</div>
            </div>
          </div>
        </div>
        <div className="feature-list-wrapper">
          <div className="feature-list">
            <div className="feature-item">
              <div className="card1">1</div>
              <div className="rectangle-parent6">
                <div className="frame-child18" />
                <div className="risk-free-hiring">
                  <img
                    className="item-icon1"
                    loading="lazy"
                    alt=""
                    src="/rectangle-2100@2x.png"
                  />
                </div>
                <div className="guaranteed-talent">
                  <h3 className="world-class-talent-network">
                    World-Class Talent Network
                  </h3>
                  <div className="access-to-our">
                    Access to our AI/ML powered deep-vetted 500+ talents to help
                    you to scale your team and business effectively.
                  </div>
                </div>
              </div>
              <img className="card-icon" loading="lazy" alt="" />
            </div>
            <div className="feature-item">
              <div className="label1">2</div>
              <div className="rectangle-parent7">
                <div className="frame-child19" />
                <div className="rectangle-frame">
                  <img
                    className="frame-child20"
                    loading="lazy"
                    alt=""
                    src="/rectangle-2101@2x.png"
                  />
                </div>
                <div className="tailored-team-building-solutio-parent">
                  <h3 className="tailored-team-building-solutio">
                    Tailored Team-Building Solutions
                  </h3>
                  <div className="get-in-touch">{`Get in touch with our technical talent experts to help you build & scale your team.`}</div>
                </div>
              </div>
              <div className="sketching-parent">
                <img
                  className="sketching-icon1"
                  loading="lazy"
                  alt=""
                  src="/sketching@2x.png"
                />
                <div className="item">3</div>
              </div>
            </div>
            <div className="rectangle-parent8">
              <div className="frame-child19" />
              <div className="item-wrapper">
                <img
                  className="item-icon2"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2102@2x.png"
                />
              </div>
              <div className="risk-free-talent-hiring-parent">
                <h3 className="risk-free-talent-hiring">
                  Risk-Free Talent Hiring
                </h3>
                <div className="guaranteed-talent-replacement">
                  Guaranteed talent replacement at no additional cost if you’re
                  unsatisfied with your hire.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
