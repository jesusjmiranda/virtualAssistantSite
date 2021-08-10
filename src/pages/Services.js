import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import styles from "./Services.module.css";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";
import Spacer from "../components/UI/Spacer/Spacer";
import firstImage from "../SiteImages/firstOfThree.jpg";
import secondImage from "../SiteImages/secondOfThree.jpg";
import thirdImage from "../SiteImages/thirdOfThree.jpg";

const Services = () => {
  return (
    <>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={styles.firstBannerTextTitle}>Services</div>

        <Spacer color={"rgb(193,197,163)"} width={180} marginTop={30} />

        <div className={styles.firstBannerText}>TAKE BACK YOUR TIME TO</div>
        <div className={styles.firstBannerText}>FOCUS ON WHAT MATTERS</div>
        <div className={styles.firstBannerTextTwo}>the most</div>

        <Spacer color={"rgb(246,195,168)"} width={180} marginTop={10} />
      </ContentBanner>
      <ContentBanner color={"white"}>
        <ServiceBanner>
          <img
            src={firstImage}
            className={styles.Image}
            alt={"green branch over notebook"}
          ></img>
          <div className={styles.ServiceContent}>
            <p className={styles.ServiceTitle}>VIRTUAL ASSISTANT SERVICES</p>
            <div className={styles.ServicePoints}>
              <div className={styles.ServicePoint}>
                ▵ CRM Database Management
              </div>
              <div className={styles.ServicePoint}>▵ Invoicing</div>
              <div className={styles.ServicePoint}>▵ PDF/Document Creation</div>
              <div className={styles.ServicePoint}>▵ Calendar Management</div>
              <div className={styles.ServicePoint}>▵ Client Onboarding</div>
              <div className={styles.ServicePoint}>▵ Administrative Tasks</div>
              <div className={styles.ServicePoint}>▵ Customer Service</div>
            </div>
          </div>
        </ServiceBanner>

        <Spacer color={"rgb(168,194,199)"} width={200} marginTop={45} />

        <ServiceBanner flip={true}>
          <img
            src={thirdImage}
            className={styles.Image}
            alt={"laptop on orange sofa"}
          ></img>
          <div className={styles.ServiceContent}>
            <p className={styles.ServiceTitle}>TECH AND CREATIVE SUPPORT</p>
            <div className={styles.ServicePoints}>
              <div className={styles.ServicePoint}>▵ Slideshow preparation</div>
              <div className={styles.ServicePoint}>
                ▵ Website (Squarespace) Maintenance
              </div>
              <div className={styles.ServicePoint}>
                ▵ Lead Pages and Sales Pages Creation
              </div>
              <div className={styles.ServicePoint}>▵ Webinar Setup</div>
              <div className={styles.ServicePoint}>
                ▵ Online Booking & Scheduling System
              </div>
              <div className={styles.ServicePoint}>▵ Email Marketing</div>
            </div>
          </div>
        </ServiceBanner>

        <Spacer color={"rgb(168,194,199)"} width={200} marginTop={45} />

        <ServiceBanner>
          <img
            src={secondImage}
            className={styles.Image}
            alt={"Clean simple wooden desk"}
          ></img>
          <div className={styles.ServiceContent}>
            <p className={styles.ServiceTitle}>TRANSLATION SERVICES</p>
            <div className={styles.ServicePoints}>
              <div className={styles.ServicePoint}>▵ Graphics Creation</div>
              <div className={styles.ServicePoint}>▵ Pre-Scheduling Posts</div>
              <div className={styles.ServicePoint}>▵ Calendar management</div>
              <div className={styles.ServicePoint}>
                ▵ Posting at optimal times
              </div>
              <div className={styles.ServicePoint}>
                ▵ Optimizing posts for success
              </div>
              <div className={styles.ServicePoint}>▵ Monitoring/Tracking</div>
            </div>
          </div>
        </ServiceBanner>
      </ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={styles.PricingTitle}>Pricing</div>
        <Spacer color={"rgb(193,197,163)"} width={200} marginTop={18} />
        <div className={styles.SmallContainer}>
          <p>Hourly rate: CAD$35 + HST</p>
          <p>Custom packages available</p>
        </div>
        <div className={styles.LargeContainer}>
          <div className={styles.SmallContainer}>
            <div className={styles.SmallContainerTitle}>BASIC RETAINER</div>
            <div className={styles.SmallContainerContent}>
              10 hours of work Customization of services Weekly Task Updates
            </div>
          </div>
          <div className={styles.SmallContainer}>
            <div className={styles.SmallContainerTitle}>STANDARD RETAINER</div>
            <div className={styles.SmallContainerContent}>
              15 hours of work Customization of services Weekly Task Updates
            </div>
          </div>
          <div className={styles.SmallContainer}>
            <div className={styles.SmallContainerTitle}>PREMIUM RETAINER</div>
            <div className={styles.SmallContainerContent}>
              20 hours of work Customization of services Weekly Task Updates
            </div>
          </div>
        </div>

        <div className={styles.Notary}>
          <div className={styles.SmallContainerTitle}>Notary Public</div>
          <div className={styles.SmallContainerContent}>Available to handle any procedure that requires a certified notary public in SC.  </div>
        </div>
      </ContentBanner>
    </>
  );
};

export default Services;
