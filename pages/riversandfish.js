import PageTransition from "../animations/PageTransition";
import FishInfo from "../components/FishInfo";
import RiverInfo from "../components/RiverInfo";
import InfoNav from "../components/InfoNav";

import styles from "../styles/RiversAndFish.module.css";
import ScrollButton from "../components/ScrollBtn";

const RiversAndFish = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <PageTransition>
          <div className={styles.container}>
            <div>
              <InfoNav />
            </div>
            <div className={styles.info}>
              <FishInfo />
              <RiverInfo />
            </div>
          </div>
          <div className={styles.btn}>
            <ScrollButton />
          </div>
        </PageTransition>
      </div>
    </>
  );
};

export default RiversAndFish;
