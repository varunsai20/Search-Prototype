import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`talent-content-wrapper ${className}`}>
      <div className="talent-content">
        <div className="top-talent-title">
          <div className="frame-group">
            <div className="hire-top-vetted-talent-on-supe-wrapper">
              <h1 className="hire-top-vetted-container1">
                <span>{`Hire `}</span>
                <span className="top-vetted-talent1">{`Top Vetted Talent `}</span>
                <span>on Supergigs</span>
              </h1>
            </div>
            <h3 className="looking-for-top1">
              Looking for top talent to propel your business forward? Count on
              our vast network of independent talent across domains to help you
              achieve your vision.
            </h3>
          </div>
        </div>
        <div className="categories">
          <div className="category-list">
            <div className="categories-grid">
              <div className="category-item">
                <div className="design1">Design</div>
              </div>
              <div className="category-divider-parent">
                <div className="category-divider" />
                <div className="development-item">
                  <div className="development1">Development</div>
                </div>
              </div>
            </div>
          </div>
          <div className="profiles">
            <div className="talent-profiles">
              <div className="rectangle-parent3">
                <div className="frame-child6" />
                <img className="avatar-icons" loading="lazy" alt="" />
                <div className="avatar-details">
                  <div className="talent-names">
                    <div className="john-smith2">John Smith</div>
                    <div className="developer2">Developer</div>
                  </div>
                </div>
              </div>
              <GroupComponent ellipse513="pending_1:1043" />
              <GroupComponent
                propWidth="206px"
                propFlex="unset"
                propAlignSelf="unset"
                ellipse513="pending_1:1053"
              />
              <GroupComponent
                propWidth="206px"
                propFlex="unset"
                propAlignSelf="unset"
                ellipse513="pending_1:1048"
              />
              <GroupComponent
                propWidth="206px"
                propFlex="unset"
                propAlignSelf="unset"
                ellipse513="pending_1:1058"
              />
              <GroupComponent
                propWidth="206px"
                propFlex="unset"
                propAlignSelf="unset"
                ellipse513="pending_1:1068"
              />
            </div>
            <div className="explore-profiles-button1">
              <div className="vector-parent2">
                <img className="frame-child7" alt="" />
                <div className="explore-all-vetted1">
                  Explore All Vetted Profiles
                </div>
              </div>
            </div>
          </div>
          <div className="featured-talent">
            <div className="featured-talent-info">
              <img className="lightbulb-hand-drawn-symbol-icon1" alt="" />
              <GroupComponent
                propWidth="unset"
                propFlex="1"
                propAlignSelf="unset"
                ellipse513="pending_1:1063"
              />
            </div>
            <GroupComponent
              propWidth="unset"
              propFlex="unset"
              propAlignSelf="stretch"
              ellipse513="pending_1:1073"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
