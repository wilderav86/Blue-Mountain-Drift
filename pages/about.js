import Image from "next/image";

import styles from "../styles/About.module.css";

const About = () => {
  const heading = "MEET MIKE";
  const body =
    "This is a longer bio. Include things like how you got into fishing, other outdoor related hobbies, fish knowledge etc.";

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.imageContainer}>
        <Image
          src="/aboutPageBG.jpg"
          width="100%"
          height="70%"
          layout="responsive"
          objectFit="contain"
          objectPosition="top"
          alt="landing image"
          priority
        />
      </div>
      <div className="body">{body}</div>
    </div>
  );
};

export default About;
