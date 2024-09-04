import PropTypes from "prop-types";
import "./FAQ.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`f-a-q1 ${className}`}>
      <div className="f-a-q-container">
        <div className="questions1">
          <div className="question">
            <img
              className="funny-illustration-3d-cartoon-icon1"
              loading="lazy"
              alt=""
              src="/funnyillustration3dcartoonbackpacker-1@2x.png"
            />
            <h1 className="frequently-asked-questions-container1">
              <span>{`frequently asked `}</span>
              <span className="questions2">questions</span>
            </h1>
          </div>
        </div>
        <div className="question-list">
          <div className="question-item">
            <div className="platform">
              <div className="what-is-supergigs2">What is Supergigs?</div>
              <div className="how-do-i1">
                How do I get started on Supergigs?
              </div>
              <div className="difference">
                <div className="how-is-supergigs1">
                  How is Supergigs different from other platforms?
                </div>
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="platform-difference">
            <div className="difference-divider" />
          </div>
          <div className="rectangle-parent12">
            <div className="frame-child27" />
            <b className="how-is-supergigs2">
              How is Supergigs different from other platforms?
            </b>
            <div className="supergigs-does-not">
              Supergigs does not charge any commission/ platform fee from the
              talent also provides mentorship assistance, unlike other existing
              platforms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
