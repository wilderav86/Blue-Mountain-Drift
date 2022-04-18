import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const BgImage = () => {
  const banner = "FLY FISHING GUIDE SERVING CENTRAL VIRGINIA";

  //button props:
  // const btnLink = "/gallery";
  // const btnName = "Gallery";

  return (
    <motion.div
      className={styles.bgContainer}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 1, ease: "easeIn" }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h1 className="banner light">{banner}</h1>
      </div>
      <div>
        <Image
          className={styles.bgImage}
          src="/LandingBG.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left 30% top 50%"
          alt="background"
          priority
        />
      </div>
    </motion.div>
  );
};

export default BgImage;
