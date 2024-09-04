import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`rm347-porpla-02-a-01-2-parent ${className}`}>
      <img className="rm347-porpla-02-a-01-2-icon1" alt="" />
      <div className="duplicate-images-wrapper">
        <div className="duplicate-images">
          <img className="innovation-book-3162169-1-icon1" alt="" />
          <img
            className="innovation-book-3162169-2-icon1"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="innovation-images-wrapper">
        <div className="innovation-images">
          <img className="innovation-book-3162169-15-icon1" alt="" />
          <img
            className="innovation-book-3162169-16-icon1"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="frame-container">
        <div className="duplicate-images">
          <img className="innovation-book-3162169-17-icon1" alt="" />
          <img
            className="innovation-book-3162169-16-icon1"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
