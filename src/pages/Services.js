import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import styles from "./Services.module.css"

const Services = () => {
  return (
    <>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={styles.firstBannerText}>TAKE BACK YOUR TIME TO</div>
        <div className={styles.firstBannerText}>FOCUS ON WHAT MATTERS</div>
        <div className={styles.firstBannerTextTwo}>the most</div>
      </ContentBanner>
      <ContentBanner color={"white"}></ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Services;
