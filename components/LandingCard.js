import Image from "next/image";
import styles from "../styles/Home.module.css";

import Btn from "./Btn";

const LandingCard = ({ data }) => {
  //content provide by props from parent element

  //required props:
  const { style, image, header, body, btnData, id } = data;

  return (
    Object.keys(data).length === 6 && (
      <div className={style}>
        <div id={id} className={styles.landingCardContainer}>
          <div className={styles.landingCardImage}>
            <Image
              src={image}
              width="90%"
              height="60%"
              layout="responsive"
              objectFit="contain"
              // objectPosition="top"
              alt="landing image"
            />
          </div>
          <div className={styles.containerColumn}>
            {header !== "" && <h2 className="heading light">{header}</h2>}
            {body !== "" && <p className="body light">{body}</p>}
            <Btn btnData={btnData} />
          </div>
        </div>
      </div>
    )
  );
};

export default LandingCard;
