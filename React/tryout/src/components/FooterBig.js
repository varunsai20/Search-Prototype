import PropTypes from "prop-types";
import "./FooterBig.css";

const FooterBig = ({ className = "", group }) => {
  return (
    <footer className={`footer-big-4 ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-social">
            <div className="footer-social-content">
              <div className="group-parent">
                <img className="group-icon1" alt="" src={group} />
                <div className="wondering-what-goes">
                  Wondering what goes behind the Supergigs HQ? Check us out
                  here!
                </div>
              </div>
              <div className="social-icons">
                <img className="social-icons1" loading="lazy" alt="" />
                <div className="social-icons2">
                  <img className="bg-icon" alt="" />
                  <img
                    className="linkedin-6-1"
                    loading="lazy"
                    alt=""
                    src="/linkedin-6-1@2x.png"
                  />
                </div>
                <img className="social-icons1" alt="" />
                <img className="social-icons1" alt="" />
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="links">
              <div className="col-1">
                <div className="for-talent">For Talent</div>
                <div className="list-items">
                  <div className="find-jobs2">Find Jobs</div>
                  <div className="find-jobs-in">Find jobs in India</div>
                  <div className="find-jobs-in">Find jobs in USA</div>
                  <div className="find-jobs-in">Find jobs in UK</div>
                  <div className="find-jobs-in">Find jobs in Europe</div>
                </div>
              </div>
            </div>
            <div className="links1">
              <div className="col-11">
                <div className="for-clients">For Clients</div>
                <div className="list-items1">
                  <div className="community">Hire Talent</div>
                  <div className="hire-talent-in">Hire Talent in India</div>
                  <div className="hire-talent-in">Hire Talent in USA</div>
                  <div className="hire-talent-in">Hire Talent in UK</div>
                  <div className="hire-talent-in">Hire Talent in Europe</div>
                </div>
              </div>
            </div>
            <div className="links2">
              <div className="col-1">
                <div className="for-clients">Resources</div>
                <div className="list-items2">
                  <div className="community">Community</div>
                </div>
              </div>
            </div>
          </div>
          <div className="links2">
            <div className="col-1">
              <div className="for-clients">Company</div>
              <div className="list-items1">
                <div className="community">About Us</div>
                <div className="community">Contact Us</div>
                <div className="community">Careers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child13" />
        <div className="copyrights">Copyrights</div>
        <div className="logo">
          <img className="vector-icon" alt="" src="/vector-1.svg" />
        </div>
        <div className="all-rights-reserved">2023 All rights reserved</div>
      </div>
    </footer>
  );
};

FooterBig.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
};

export default FooterBig;
