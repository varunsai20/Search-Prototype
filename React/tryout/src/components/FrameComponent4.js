import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`f-a-q-wrapper ${className}`}>
      <div className="f-a-q">
        <div className="f-a-q-header">
          <div className="f-a-q-title">
            <img
              className="funny-illustration-3d-cartoon-icon"
              loading="lazy"
              alt=""
            />
            <h1 className="frequently-asked-questions-container">
              <span>{`frequently asked `}</span>
              <span className="questions">questions</span>
            </h1>
          </div>
        </div>
        <div className="f-a-q-list">
          <div className="f-a-q-list-inner">
            <div className="frame-parent1">
              <div className="what-is-supergigs-parent">
                <div className="what-is-supergigs">What is Supergigs?</div>
                <div className="line-div" />
              </div>
              <div className="how-do-i">How do I get started on Supergigs?</div>
              <div className="how-is-supergigs">
                How is Supergigs different from other platforms?
              </div>
            </div>
          </div>
          <div className="f-a-q-list-child">
            <div className="frame-child11" />
          </div>
          <div className="rectangle-parent4">
            <div className="frame-child12" />
            <b className="what-is-supergigs1">What is Supergigs?</b>
            <div className="upon-registration-you">{`Upon registration, you will be tagged to a mentor AKA Superlancer and they will help you find the most suitable job as per your skills & strengths.`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
