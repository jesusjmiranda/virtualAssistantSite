import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import { GoDeviceDesktop } from "react-icons/go";
import { GoRepo } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import styles from "./Home.module.css";
import Spacer from "../components/UI/Spacer/Spacer";
import ProvidedService from "../components/ProvidedService/ProvidedService";

const Home = () => {
  return (
    <>
      <ContentBanner className={styles.bannerOne} color={"rgb(211,140,126)"}>
        <p className={styles.simpleText}>Virtual Business Support for the</p>
        <p className={styles.mediumText}>HEALTH & WELLNESS</p>
        <p className={styles.complexText}>entrepreneur</p>

        <Spacer color={"rgb(136, 76, 27)"} width={80} />

        <NavLink to={"/services"} style={{ textDecoration: "none" }}>
          {" "}
          <Button text={"WORK WITH US"} color={"rgba(131,134,176,0.5)"} />{" "}
        </NavLink>
      </ContentBanner>

      <ContentBanner color={"white"}>
        <p className={styles.firstParagraph}>
          We help{" "}
          <span className={styles.italicizedText}>
            success oriented entrepreneurs focused on results{" "}
          </span>
          with the backend of their business so they can focus on what's most
          important:{" "}
        </p>

        <p className={styles.secondParagraph}>
          CLIENT SERVICING, IMPACTFUL CARE, AND SUSTAINED GROWTH
        </p>

        <Spacer color={"rgb(168,194,199)"} width={200} />

        <div className={styles.assumptions}>
          <p className={styles.assumptionTitle}>LET ME GUESS...</p>
          <p className={styles.assumption}>
            ▽ Until now, you’ve been able to wear all the hats in your business;
            lately you can’t shake the overwhelming feeling that you can’t keep
            up.
          </p>
          <p className={styles.assumption}>
            ▽ Your administrative tasks are sucking the joy out of your work,
            and you want to get back to your passion — there just aren’t enough
            hours in the day.
          </p>
          <p className={styles.assumption}>
            ▽ You have the vision, game-changing ideas and goals to grow your
            business, but technology isn’t your thing, and you’re starting to
            feel STUCK.
          </p>
          <p className={styles.assumption}>
            ▽ You want to be able to CONNECT with your base consistently on
            Social Media but you’re not sure where to start...
          </p>
        </div>

        <div className={styles.inspiration}>
          YOU DON'T HAVE TO DO IT{" "}
          <span className={styles.inspirationAccent}>alone</span>
        </div>

        <Spacer color={"rgb(168,194,199)"} width={160} />
      </ContentBanner>
      <ContentBanner color={"rgb(237,231,229)"}>
        <div className={styles.thirdBannerTitle}>THIS IS HOW I CAN HELP...</div>
        <div className={styles.ServicesContainer}>
          <ProvidedService
            icon={<GoRepo />}
            title={"VIRTUAL ASSISTANT SERVICES"}
            details={
              "Need someone you can trust to help you with your invoicing, onboarding new clients, formatting a document or preparing for your next presentation? I’m your person!"
            }
          />
          <ProvidedService
            icon={<BsFillPeopleFill />}
            title={"CUSTOMER SUPPORT"}
            details={
              "Let’s set up a strategy so you can show up consistently and authentically on the social media platforms with the biggest impact, increasing your visibility and engagement."
            }
          />
          <ProvidedService
            icon={<GoDeviceDesktop />}
            title={"TRANSLATION SERVICES"}
            details={
              "Ready to look into automating your processes? Don’t have a clue how to make your graphics and documents look good and appealing? Or maybe you have an amazing idea for your next program/presentation but you’re having trouble with the technology you need to bring your vision to life? Let me help! "
            }
          />
        </div>
      </ContentBanner>
    </>
  );
};

export default Home;
