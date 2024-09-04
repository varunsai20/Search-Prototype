import PropTypes from "prop-types";
import "./CompanyProfileSteps.css";

const CompanyProfileSteps = ({ className = "" }) => {
  return (
    <section className={`company-profile-steps ${className}`}>
      <div className="step-container1">
        <div className="steps-description">
          <div className="steps-description-child" />
          <div className="step-number-parent">
            <b className="step-number1">01</b>
            <h2 className="define1">Define</h2>
          </div>
          <div className="create-your-company-container">
            <p className="create-your-company">{`Create your company profile to get started on Supergigs in under `}</p>
            <p className="create-your-company">a minute.</p>
          </div>
        </div>
        <div className="explore-step1">
          <div className="explore-description">
            <div className="steps-description-child" />
            <b className="explore-number">02</b>
            <div className="explore-action-wrapper">
              <div className="explore-action">
                <h2 className="explore1">Explore</h2>
                <div className="discover-ai-driven-curated-container1">
                  D<span className="iscover1">{`iscover `}</span>
                  <span className="ai1">AI</span>
                  <span className="iscover1">
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

CompanyProfileSteps.propTypes = {
  className: PropTypes.string,
};

export default CompanyProfileSteps;
