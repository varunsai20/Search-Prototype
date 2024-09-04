import GroupComponent1 from "../components/GroupComponent1";
import Hero from "../components/Hero";
import HowWeHelp from "../components/HowWeHelp";
import FrameComponent from "../components/FrameComponent";
import StepContainer from "../components/StepContainer";
import FrameComponent1 from "../components/FrameComponent1";
import CollaborationDetails from "../components/CollaborationDetails";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Align from "../components/Align";
import FrameComponent4 from "../components/FrameComponent4";
import FooterBig from "../components/FooterBig";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-13">
      <GroupComponent1 />
      <Hero />
      <HowWeHelp />
      <FrameComponent />
      <section className="step-title">
        <h1 className="accelerate-your-business-container">
          <p className="accelerate-your-business-thro">
            <span className="accelerate-your-business">
              Accelerate Your Business,
            </span>
            <span>{` Through Our 3-Step `}</span>
          </p>
          <p className="accelerate-your-business-thro">{`Talent Hiring Process `}</p>
        </h1>
      </section>
      <StepContainer />
      <section className="social-proof">
        <img className="empty-social-proof" alt="" />
        <img className="user1-icon" alt="" />
        <img className="user-3-icon" loading="lazy" alt="" />
        <img className="instagram-10-1" loading="lazy" alt="" />
        <img className="instagram-10-2" loading="lazy" alt="" />
        <img className="instagram-10-3" loading="lazy" alt="" />
        <img className="user2-icon" loading="lazy" alt="" />
      </section>
      <FrameComponent1 />
      <CollaborationDetails />
      <FrameComponent2 />
      <FrameComponent3 />
      <Align propWidth="576px" propRight="-4.3px" />
      <FrameComponent4 />
      <FooterBig />
    </div>
  );
};

export default Desktop1;
