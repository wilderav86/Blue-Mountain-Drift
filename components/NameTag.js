import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const NameTag = () => {
  const name = "MIKE RENNIE";
  const title = "Head Guide at Matt Miles Fly Fishing";

  // Intersection Observer animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.nameTagContainer}>
      <div>
        <h2 className="heading light">{name}</h2>
        <p className="body light">{title}</p>
      </div>
      <div className={styles.logoContainer}>
        <motion.div
          className={styles.logo}
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: {
              opacity: 0,
              x: -100,
            },
          }}
        >
          <Image src="/logo.png" height={200} width={200} priority alt="logo" />
        </motion.div>
        <motion.div
          className={styles.logo}
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: {
              opacity: 0,
              x: 100,
            },
          }}
        >
          <Image
            src="/milesLogo.png"
            height={200}
            width={500}
            priority
            alt="logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NameTag;
