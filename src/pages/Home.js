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
        <Spacer />
        <Button text={"WORK WITH ME"} />
      </ContentBanner>
      <ContentBanner color={"white"}>
        <p>
          I’m Nivia. I help heart-centered entrepreneurs in health and wellness
          with the backend of their business so they can focus on what's most
          important:{" "}
        </p>
      </ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Home;
