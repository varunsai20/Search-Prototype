import PropTypes from "prop-types";
import "./HowWeHelp.css";

const HowWeHelp = ({ className = "" }) => {
  return (
    <section className={`how-we-help ${className}`}>
      <div className="help-content">
        <div className="help-title">
          <div className="heres-how-we-can-help-you-wrapper">
            <h1 className="heres-how-we-container">
              <span>{`Here's How We Can `}</span>
              <span className="help-you">Help You</span>
            </h1>
          </div>
          <div className="services">
            <div className="service-list">
              <div className="services-grid">
                <div className="service-item">
                  <a className="find-jobs1">Find Jobs</a>
                  <div className="search-bar" />
                </div>
                <h3 className="hire-talent2">Hire Talent</h3>
              </div>
            </div>
            <div className="ready-for-your">
              Ready for Your Next Adventure? Supergigs Has Got You Covered, With
              Jobs Across the Globe That Cater to Both Seasoned Professionals
              and Newcomers Alike.
            </div>
          </div>
          <div className="sign-up">
            <div className="vector-parent1">
              <img className="frame-child2" alt="" />
              <div className="sign-in1">Sign In</div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefits-content">
            <div className="benefit-items">
              <div className="enter-the-condition">1</div>
              <div className="search-button-content">
                <div className="search-button-content-child" />
                <div className="max-returns">
                  <img className="search-icon" loading="lazy" alt="" />
                </div>
                <div className="profit-margins">
                  <h3 className="access-to-global">
                    Access To Global Projects
                  </h3>
                  <div className="explore-a-diverse-container">
                    <p className="explore-a-diverse">{`Explore a diverse range of job `}</p>
                    <p className="explore-a-diverse">{`opportunities at renowned enterprises `}</p>
                    <p className="explore-a-diverse">{`& startups worldwide.`}</p>
                  </div>
                </div>
              </div>
              <img className="button-icon" loading="lazy" alt="" />
            </div>
            <div className="benefit-items">
              <div className="status-bar">2</div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="rectangle-wrapper">
                  <img className="frame-child3" loading="lazy" alt="" />
                </div>
                <div className="enhanced-visibility-mentorsh-parent">
                  <h3 className="enhanced-visibility">{`Enhanced Visibility & Mentorship
`}</h3>
                  <div className="connect-with-influential">
                    Connect with influential mentors in our thriving community
                    to secure jobs and elevate your career trajectory.
                  </div>
                </div>
              </div>
              <div className="state-dropdown">
                <img className="sketching-icon" loading="lazy" alt="" />
                <div className="icon-background">3</div>
              </div>
            </div>
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="projects-icon-wrapper">
                <img className="projects-icon" loading="lazy" alt="" />
              </div>
              <div className="zero-platform-fee-max-return-parent">
                <h3 className="zero-platform-fee">{`Zero Platform Fee & Max Returns`}</h3>
                <div className="maximise-your-profit-container">
                  <p className="explore-a-diverse">{`Maximise your profit margins by keeping 100% of your earned income & reinvesting `}</p>
                  <p className="explore-a-diverse">it in yourself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HowWeHelp.propTypes = {
  className: PropTypes.string,
};

export default HowWeHelp;
