import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import Spacer from "../components/UI/Spacer/Spacer";
import aboutHeadshot from "../SiteImages/aboutHeadshot.png";
import styles from "./Services.module.css";

import "./About.css";

const About = () => {
  return (
    <div>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={"construction"}>About</div>
        <Spacer color={"rgb(193,197,163)"} width={180} marginTop={30} />
        <div class={"imageCropper"}>
          {" "}
          <img src={aboutHeadshot} alt="headshot" class="headshotImage" />
        </div>

        <Spacer color={"#F6C3A8"} width={180} marginTop={50} />
      </ContentBanner>
      <ContentBanner color={"#FFF"}>
        {/* With over twenty years of experience in business administration, I can bring relief and peace of mind to you and your business */}
        <div className={"firstBannerText"}>A PLETHORA OF EXPERIENCE</div>
        <div className={"firstBannerText"}>FOR YOUR BUSINESS'</div>
        <div className={"firstBannerTextTwo"}>support</div>
        <p class={"firstBannerText"} id={"experience"}>
          Twenty five years of experience working with businesses in a wide
          array of industries:{" "}
        </p>
        <div class="aboutPoints">
          <div class={"pointGroup"}>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Medical
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Legal
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Education
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Construction
            </div>
          </div>
          <div class={"pointGroup"}>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Remodeling
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Insurance
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Accounting
            </div>
            <div className={styles.ServicePoint} id={"aboutPoint"}>
              <span class={"points"}>▵</span> Customer Service
            </div>
          </div>
        </div>
      </ContentBanner>
      <ContentBanner color={"rgb(237, 231, 229)"}></ContentBanner>
    </div>
  );
};

export default About;
