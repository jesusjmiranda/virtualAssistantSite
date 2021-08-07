import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import styles from "./Services.module.css";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";
import Spacer from '../components/UI/Spacer/Spacer'
import firstImage from '../SiteImages/firstOfThree.jpg'
import secondImage from '../SiteImages/secondOfThree.jpg'
import thirdImage from '../SiteImages/thirdOfThree.jpg'

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
        <ServiceBanner image={firstImage} altText={'Bound notebook with simple grass overtop'} />
        <ServiceBanner image={secondImage} altText={'Bound notebook with simple grass overtop'} />
        <ServiceBanner image={thirdImage} altText={'Bound notebook with simple grass overtop'} />
      </ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Services;
