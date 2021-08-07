import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import styles from "./Services.module.css";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";
import Spacer from '../components/UI/Spacer/Spacer'

const Services = () => {
  return (
    <>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={styles.firstBannerTextTitle}>Services</div>
        <div className={styles.firstBannerText}>TAKE BACK YOUR TIME TO</div>
        <div className={styles.firstBannerText}>FOCUS ON WHAT MATTERS</div>
        <div className={styles.firstBannerTextTwo}>the most</div>

        <Spacer color={'rgb(246,195,168)'} width={180}/>
      </ContentBanner>
      <ContentBanner color={"white"}>
        <ServiceBanner />
      </ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Services;
