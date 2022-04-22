import PageTransition from "../animations/PageTransition";
import FishInfo from "../components/FishInfo";
import RiverInfo from "../components/RiverInfo";
import InfoNav from "../components/InfoNav";

import styles from "../styles/RiversAndFish.module.css";

const RiversAndFish = () => {
  return (
    <div className={styles.outerContainer}>
      <PageTransition>
        <div className={styles.container}>
          <InfoNav />
          <h2>Rivers and Fish</h2>
          <FishInfo />
          <RiverInfo />
        </div>
      </PageTransition>
    </div>
  );
};

export default RiversAndFish;
