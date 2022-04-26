import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const BgImage = () => {
  const bannerLg = "FLY FISHING GUIDE";
  const bannerSm = " SERVING CENTRAL VIRGINIA";

  //button props:
  // const btnLink = "/gallery";
  // const btnName = "Gallery";

  return (
    <motion.div
      className={styles.bgContainer}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeIn" }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.bannerContainer}>
        <h1 className={styles.bannerLg}>{bannerLg}</h1>
        <h4 className={styles.bannerSm}>{bannerSm}</h4>
      </div>
      <div>
        <Image
          className={styles.bgImage}
          src="/LandingBGsmall.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left 30% top 50%"
          blurDataURL="/LandingBGsmall.jpg"
          placeholder="blur"
          quality={60}
          sizes="320 640 750"
          alt="background"
          priority
        />
      </div>
    </motion.div>
  );
};

export default BgImage;
