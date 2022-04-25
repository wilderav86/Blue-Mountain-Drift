import Image from "next/image";
import PageTransition from "../animations/PageTransition";
import PackageCard from "../components/PackageCard";
import WhatToBring from "../components/whatToBring";
import FinePrint from "../components/FinePrint";

import styles from "../styles/Packages.module.css";

const Packages = () => {
  const heading = "TRIP PACKAGES";

  // Card Data

  //note: info must be passed as array
  const cardData = [
    {
      title: "FULL DAY SOLO",
      info: [
        "1 Angler",
        "Float or Wade",
        "Equipment Provided*",
        "Lunch and Drinks Included",
      ],
      price: "$430",
    },
    {
      title: "FULL DAY DUO",
      info: [
        "2 Angler",
        "Float or Wade",
        "Equipment Provided*",
        "Lunch and drinks included",
      ],
      price: "$480",
    },
    {
      title: "HALF DAY SOLO",
      info: ["1 Angler", "Float or Wade", "Equipment Provided*"],
      price: "$330",
    },
    {
      title: "HALF DAY DUO",
      info: ["2 Angler", "Float or Wade", "Equipment Provided*"],
      price: "$380",
    },

    {
      title: "FLY TYING",
      info: ["1 Hour Class"],
      price: "$75",
    },
    {
      title: "FLY CASTING",
      info: ["1 Hour Class"],
      price: "$75",
    },
  ];

  const renderPackageCards = cardData.map((card, id) => {
    return (
      <>
        <PackageCard data={card} key={id} />
      </>
    );
  });

  return (
    <div className={styles.outerContainer}>
      <PageTransition>
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/packagePageBG.jpg"
                width="90%"
                height="60%"
                layout="responsive"
                objectFit="contain"
                blurDataURL="/packagePageBG.jpg"
                placeholder="blur"
                quality={60}
                priority
                alt="packages image"
              />
            </div>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.cardContainer}>{renderPackageCards}</div>
          </div>
          <WhatToBring />
          <FinePrint />
        </div>
      </PageTransition>
    </div>
  );
};

export default Packages;
