import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Align.css";

const Align = ({
  className = "",
  propWidth,
  swirlyScribbledArrow,
  propRight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const swirlyScribbledArrowIconStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <section className={`align ${className}`}>
      <div className="rm347-porpla-02-a-01-3" />
      <div
        className="finding-talent-that-aligns-wit-parent"
        style={frameDivStyle}
      >
        <div className="finding-talent-that">
          Finding talent that aligns with your business can be complex and
          time-consuming. However, Supergigs simplifies it with a streamlined
          3-step talent hiring process.
        </div>
        <img
          className="swirly-scribbled-arrow-icon"
          loading="lazy"
          alt=""
          src={swirlyScribbledArrow}
          style={swirlyScribbledArrowIconStyle}
        />
      </div>
    </section>
  );
};

Align.propTypes = {
  className: PropTypes.string,
  swirlyScribbledArrow: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default Align;
