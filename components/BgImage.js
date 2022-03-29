import Image from "next/image";
import styles from "../styles/Home.module.css";

const BgImage = () => {
  const banner = "FLY FISHING GUIDE SERVING CENTRAL VIRGINIA";

  //button props:
  // const btnLink = "/gallery";
  // const btnName = "Gallery";

  return (
    <div className={styles.bgContainer}>
      <div>
        <h1 className="banner light">{banner}</h1>
      </div>
      <div>
        <Image
          className={styles.bgImage}
          src="/LandingBG.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left 30% top 50%"
          alt="background"
          priority
        />
      </div>
    </div>
  );
};

export default BgImage;
