import PageTransition from "../animations/PageTransition";
import InfoNav from "../components/InfoNav";
import RiverInfo from "../components/RiverInfo";

import styles from "../styles/TheWaters.module.css";
import ScrollButton from "../components/ScrollBtn";
import FishInfo from "../components/FishInfo";

const RiversAndFish = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <PageTransition>
          <h2 className={styles.banner}>THE WATERS</h2>
          <div className={styles.innerContainer}>
            <div className={styles.navContainer}>
              <InfoNav />
            </div>
            <div>
              <FishInfo />
              <RiverInfo />
              <ScrollButton />
            </div>
            <div className={styles.spacer} />
          </div>
        </PageTransition>
      </div>
    </>
  );
};

export default RiversAndFish;
