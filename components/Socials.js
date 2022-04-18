import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

const Socials = () => {
  const heading = "CHECK US OUT ON INSTAGRAM";

  return (
    <div className={styles.socialsContainer}>
      <h2 className="heading light">{heading}</h2>
      <div className={styles.logoContainer}>
        <Link
          href="https://www.instagram.com/blue_mountain_drift/?hl=en"
          passHref
        >
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/logo.png" height={250} width={250} alt="logo" />
          </motion.div>
        </Link>
        <Link
          href="https://www.instagram.com/mattmilesflyfishing/?hl=en"
          passHref
        >
          <motion.div
            className={styles.milesLogo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/milesLogo.png" height={200} width={500} alt="logo" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
