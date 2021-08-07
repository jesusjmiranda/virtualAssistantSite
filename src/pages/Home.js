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

        <Spacer color={"rgb(136, 76, 27)"} width={80} />

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
      <ContentBanner color={"rgb(211,140,126)"}>
        <div className={styles.thirdBannerTitle}>THIS IS HOW I CAN HELP...</div>
      </ContentBanner>
    </>
  );
};

export default Home;
