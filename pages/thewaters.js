import PageTransition from "../animations/PageTransition";

import RiverInfo from "../components/RiverInfo";

import styles from "../styles/TheWaters.module.css";
import ScrollButton from "../components/ScrollBtn";

const RiversAndFish = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <PageTransition>
          <RiverInfo />
        </PageTransition>
      </div>
    </>
  );
};

export default RiversAndFish;
