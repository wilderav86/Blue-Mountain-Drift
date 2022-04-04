import Image from "next/image";
import Btn from "../components/Btn";

import styles from "../styles/Packages.module.css";

const WhatToBring = () => {
  const heading = "WHAT TO BRING";
  const body = [
    "Valid Virginia fishing license",
    "Polarized sunglassed",
    "Rain coat, hat, and sunscreen",
    "Waders if needed",
    "Rod and reel if you have one you like to use",
  ];

  const licenseBtn = { name: "FAQ", link: "/faq" };
  const faqBtn = {
    name: "VA FISHING LICENSE INFO",
    link: "https://dwr.virginia.gov/licenses/",
  };

  return (
    <div className={styles.container} id={styles.whatToBringColor}>
      <div className={styles.whatToBring}>
        <div className={styles.whatToBringImage} id={styles.whatToBringImage}>
          <Image
            src="/whatToBringImage.jpg"
            width="60%"
            height="90%"
            layout="responsive"
            objectFit="contain"
            // objectPosition="top"

            alt="packages image"
          />
        </div>
        <div className={styles.whatToBringHeading}>{heading}</div>
        <div className={styles.whatToBringInfo}>
          <ul>
            {body.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatToBring;
