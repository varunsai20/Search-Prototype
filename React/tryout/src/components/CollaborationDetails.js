import PropTypes from "prop-types";
import "./CollaborationDetails.css";

const CollaborationDetails = ({ className = "", rectangle716 }) => {
  return (
    <section className={`collaboration-details ${className}`}>
      <div className="collaboration-title-wrapper">
        <div className="collaboration-title">
          <div className="collaboration-title-child" />
          <div className="elevate-title">
            <b className="b">03</b>
            <div className="collaborate-elevate">
              <h2 className="collaborate-elevate1">{`Collaborate & Elevate`}</h2>
            </div>
          </div>
          <div className="collaboration-description">
            <div className="real-time-collaboration-proje">
              Real-time collaboration, project review, and monitoring to help
              you achieve your business goals
            </div>
          </div>
        </div>
      </div>
      <div className="hire-talent-button">
        <div className="rm347-porpla-02-a-01-4" />
        <div className="vector-parent3">
          <img className="frame-child9" alt="" src={rectangle716} />
          <div className="hire-top-talent">Hire Top Talent</div>
        </div>
      </div>
    </section>
  );
};

CollaborationDetails.propTypes = {
  className: PropTypes.string,
  rectangle716: PropTypes.string,
};

export default CollaborationDetails;
