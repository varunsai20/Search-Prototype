import PropTypes from "prop-types";
import "./StepContainer.css";

const StepContainer = ({ className = "" }) => {
  return (
    <section className={`step-container ${className}`}>
      <div className="step-details-parent">
        <div className="step-details">
          <div className="step-details-child" />
          <div className="step-one">
            <b className="step-number">01</b>
            <h2 className="define">Define</h2>
          </div>
          <div className="create-your-profile">
            Create your profile under a minute and tell us a bit about your
            organisation.
          </div>
        </div>
        <div className="step-two">
          <div className="frame-div">
            <div className="step-details-child" />
            <b className="step-two-number">02</b>
            <div className="explore-details">
              <div className="explore-step">
                <h2 className="explore">Explore</h2>
                <div className="discover-ai-driven-curated-container">
                  D<span className="iscover">{`iscover `}</span>
                  <span className="ai">AI</span>
                  <span className="iscover">
                    -driven curated Talent That best align with your business
                    goals and Get in Touch With Our Experts for Guidance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

StepContainer.propTypes = {
  className: PropTypes.string,
};

export default StepContainer;
