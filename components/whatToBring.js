import React, { useState, useEffect } from "react";

import Image from "next/image";
import Btn from "../components/Btn";

import styles from "../styles/Packages.module.css";

const WhatToBring = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const heading = "WHAT TO BRING";
  const body = [
    "Valid Virginia fishing license.",
    "Polarized sunglassed.",
    "Rain coat, hat, and sunscreen.",
    "Waders if needed.",
    "Rod and reel if you have one you like to use.",
  ];

  const faqBtn = {
    name: "VA FISHING LICENSE INFO",
    link: "https://dwr.virginia.gov/licenses/",
  };
  const licenseBtn = { name: "FAQ", link: "/faq" };

  // Change layout when window size hits 800px threshold.
  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 800) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
            blurDataURL="/whatToBringImage.jpg"
            placeholder="blur"
            // objectPosition="top"

            alt="packages image"
          />
        </div>
        {isDesktop ? (
          <>
            <div className={styles.desktopLayout}>
              <div className={styles.whatToBringHeading}>{heading}</div>
              <div className={styles.whatToBringInfo}>
                <ul>
                  {body.map((item, id) => {
                    return <li key={id}>{item}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.buttons}>
                <Btn btnData={faqBtn} />
                <Btn btnData={licenseBtn} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.whatToBringHeading}>{heading}</div>
            <div className={styles.whatToBringInfo}>
              <ul>
                {body.map((item, id) => {
                  return <li key={id}>{item}</li>;
                })}
              </ul>
            </div>
            <div className={styles.buttons}>
              <Btn btnData={faqBtn} />
              <Btn btnData={licenseBtn} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhatToBring;
