import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import styles from "../pages/Home.module.css";

const Home = () => {
  return (
    <>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
      <ContentBanner color={"white"}></ContentBanner>
      <ContentBanner color={"rgb(211,140,126)"}></ContentBanner>
    </>
  );
};

export default Home;
