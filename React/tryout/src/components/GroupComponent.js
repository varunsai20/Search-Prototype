import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  propWidth,
  propFlex,
  propAlignSelf,
  ellipse513,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlex, propAlignSelf]);

  return (
    <div className={`rectangle-parent2 ${className}`} style={groupDivStyle}>
      <div className="frame-child5" />
      <img className="ellipse-icon" alt="" src={ellipse513} />
      <div className="frame-wrapper">
        <div className="john-smith-parent">
          <div className="john-smith1">John Smith</div>
          <div className="developer1">Developer</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  ellipse513: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent;
