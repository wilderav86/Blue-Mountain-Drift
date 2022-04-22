import Image from "next/image";
import PageTransition from "../animations/PageTransition";
import Btn from "../components/Btn";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

import styles from "../styles/About.module.css";

const About = () => {
  const heading = "MEET MIKE";
  const body =
    "Mike Rennie is the Lead Guide at Matt Miles Fly Fishing. A native of Charlottesville, he grew up fly fishing in Central Virginia and has spent time in Brazil, Belize, and Northern Michigan chasing fish. Mike has a long standing relationship with Orvis Endorsed Guide Matt Miles and learned how to guide under him. Mike's passions are guiding, teaching, and being on the water. When he is off the water, he spends time tying flies for his local waters and taking photos.";

  const contactBtn = { name: "CONTACT", link: "/contact" };

  return (
    <div className={styles.outerContainer}>
      <PageTransition>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/aboutPageBG.jpg"
              width="100%"
              height="70%"
              layout="responsive"
              objectFit="contain"
              objectPosition="top"
              blurDataURL="data:..."
              placeholder="blur"
              quality={60}
              alt="about image"
            />
          </div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.content}>
            <div className={styles.body}>{body}</div>
            <div className={styles.buttons}>
              <Btn btnData={contactBtn} />
              <Link href="https://www.instagram.com/mattmilesflyfishing/?hl=en">
                <motion.div
                  className={styles.instaBtn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  size="lg"
                  variant="custom"
                >
                  <BsInstagram
                    style={{ background: "#eae691", borderRadius: "16px" }}
                    size={50}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default About;
