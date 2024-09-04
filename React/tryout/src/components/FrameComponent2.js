import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", rectangle716 }) => {
  return (
    <section className={`community-details-wrapper ${className}`}>
      <div className="community-details">
        <div className="community-title">
          <div className="community-heading">
            <div className="feel-seen-heard-title">
              <div className="feel-seen-be">Feel Seen. BE Heard.</div>
            </div>
            <h1 className="supergigs-community">Supergigs Community</h1>
          </div>
        </div>
        <div className="community-description">
          <div className="what-do-successful-container">
            <p className="what-do-successful">
              What do successful professionals have in common? They possess
              empathy, skill, independence, and a supportive community to rely
              on! With our community, we aim to provide these talented
              individuals with the resources they need to thrive in their
              careers. We believe in fostering professional and personal growth
              and providing support with every step of the way. 
            </p>
            <p className="what-do-successful">&nbsp;</p>
            <p className="what-do-successful">
              Join us today and become a part of a close-knit community of
              professionals dedicated to achieving their goals and supporting
              one another. Let's work together to drive the future of
              independent talent!
            </p>
          </div>
        </div>
        <div className="explore-community-button">
          <div className="vector-parent4">
            <img className="frame-child10" alt="" src={rectangle716} />
            <div className="explore-community-now">Explore Community Now</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  rectangle716: PropTypes.string,
};

export default FrameComponent2;
