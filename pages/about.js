import Image from "next/image";
import PageTransition from "../animations/PageTransition";
import Btn from "../components/Btn";

import styles from "../styles/About.module.css";

const About = () => {
  const heading = "MEET MIKE";
  const body =
    "This is a longer bio. Include things like how you got into fishing, other outdoor related hobbies, fish knowledge etc.";

  const contactBtn = { name: "CONTACT", link: "/contact" };
  const instaBtn = {
    name: "SEE ME ON INSTAGRAM",
    link: "https://www.instagram.com/mattmilesflyfishing/?hl=en",
  };

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
              alt="about image"
            />
          </div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.content}>
            <div className={styles.body}>{body}</div>
            <div className={styles.buttons}>
              <Btn btnData={contactBtn} />
              <Btn btnData={instaBtn} />
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default About;
