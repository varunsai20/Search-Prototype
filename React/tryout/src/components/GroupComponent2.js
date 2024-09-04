import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({
  className = "",
  propWidth,
  propFlex,
  propAlignSelf,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlex, propAlignSelf]);

  return (
    <div className={`rectangle-parent9 ${className}`} style={groupDiv1Style}>
      <div className="frame-child22" />
      <img className="title-icon" alt="" src="/ellipse-513@2x.png" />
      <div className="frame-wrapper3">
        <div className="john-smith-group">
          <div className="john-smith3">John Smith</div>
          <div className="developer3">Developer</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent2;
