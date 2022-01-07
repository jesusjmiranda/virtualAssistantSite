import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import Spacer from "../components/UI/Spacer/Spacer";
import "./About.css";

const About = () => {
  return (
    <div>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={"construction"}>About</div>
        <Spacer color={"rgb(193,197,163)"} width={180} marginTop={30} />
        {/* With over twenty years of experience in business administration, I can bring relief and peace of mind to you and your business */}
        <div className={"firstBannerText"}>A PLETHORA OF EXPERIENCE</div>
        <div className={"firstBannerText"}>FOR YOUR BUSINESS'</div>
        <div className={"firstBannerTextTwo"}>support</div>
        <Spacer color={"#F6C3A8"} width={180} marginTop={30} />

      </ContentBanner>
    </div>
  );
};

export default About;
