import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import Button from "../components/UI/Button/Button";
import styles from "./Home.module.css";
import Spacer from "../components/UI/Spacer/Spacer";

const Home = () => {
  return (
    <>
      <ContentBanner className={styles.bannerOne} color={"rgb(211,140,126)"}>
        <p className={styles.simpleText}>Virtual Business Support for the</p>
        <p className={styles.mediumText}>HEALTH & WELLNESS</p>
        <p className={styles.complexText}>entrepeneur</p>

        <Spacer color={'rgb(136, 76, 27)'} width={120} />

        <Button text={"WORK WITH ME"} />
      </ContentBanner>
      <ContentBanner color={"white"}>
        <p className={styles.firstParagraph}>
          I’m Nivia. I help{" "}
          <span className={styles.italicizedText}>
            heart-centered entrepreneurs in health and wellness{" "}
          </span>
          with the backend of their business so they can focus on what's most
          important:{" "}
        </p>

        <p className={styles.secondParagraph}>
          CLIENT SERVICING, IMPACTFUL CARE, AND SUSTAINED GROWTH
        </p>

        <Spacer color={'rgb(168,194,199)'} width={180} />

      </ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Home;
