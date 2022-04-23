import Image from "next/image";
import styles from "../styles/Home.module.css";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

import Btn from "./Btn";

const LandingCard = ({ data }) => {
  //content provide by props from parent element

  //required props:
  const { style, image, header, body, btnData, id } = data;

  return (
    Object.keys(data).length === 6 && (
      <div className={style}>
        <FadeInWhenVisible>
          <div className={style}>
            <div id={id} className={styles.landingCardContainer}>
              <div className={styles.landingCardImage}>
                <Image
                  src={image}
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="contain"
                  blurDataURL={image}
                  placeholder="blur"
                  quality={50}
                  alt="landing image"
                />
              </div>
              <div className={styles.containerColumn}>
                {header !== "" && <h2 className="heading light">{header}</h2>}
                {body !== "" && (
                  <div className={styles.body}>
                    <p className="body light">{body}</p>
                  </div>
                )}
                <Btn btnData={btnData} />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    )
  );
};

export default LandingCard;
