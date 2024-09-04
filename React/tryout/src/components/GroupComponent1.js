import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "", group, rectangle716 }) => {
  return (
    <header className={`rectangle-group ${className}`}>
      <div className="component-child" />
      <div className="navigation">
        <img className="group-icon" loading="lazy" alt="" src={group} />
      </div>
      <div className="nav-buttons">
        <div className="sign-in-button">
          <div className="find-jobs-parent">
            <a className="find-jobs">Find Jobs</a>
            <a className="hire-talent">Hire Talent</a>
          </div>
        </div>
        <div className="nav-buttons-inner">
          <div className="vector-group">
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src={rectangle716}
            />
            <a className="sign-in">Sign In</a>
          </div>
        </div>
      </div>
    </header>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  rectangle716: PropTypes.string,
};

export default GroupComponent1;
