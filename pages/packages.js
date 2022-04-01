import Image from "next/image";
import PackageCard from "../components/PackageCard";

import styles from "../styles/Packages.module.css";

const Packages = () => {
  const heading = "TRIP PACKAGES";

  // Card Data
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
      info: ["2 Angler", "Float or Wade", "Equipment Provided*"],
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
      title: "5 HOUR TRIP",
      info: [
        "1 or 2 Angler",
        "Weldon NC – Striped Bass",
        "Jet Boat",
        "Equipment Provided*",
        "Morning or Evening",
      ],
      price: "$500",
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
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/aboutPageBG.jpg"
          width="100%"
          height="70%"
          layout="responsive"
          objectFit="contain"
          objectPosition="top"
          priority
          alt="packages image"
        />
      </div>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.cardContainer}>{renderPackageCards}</div>
    </div>
  );
};

export default Packages;
