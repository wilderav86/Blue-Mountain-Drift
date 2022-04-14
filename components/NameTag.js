import styles from "../styles/Home.module.css";
import Image from "next/image";

const NameTag = () => {
  const name = "MIKE RENNIE";
  const title = "Head Guide at Matt Miles Fly Fishing";

  return (
    <div className={styles.nameTagContainer}>
      <div>
        <h2 className="heading light">{name}</h2>
        <p className="body light">{title}</p>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="/logo.png" height={200} width={200} />
        </div>
        <div className={styles.logo}>
          <Image src="/milesLogo.png" height={200} width={500} />
        </div>
      </div>
    </div>
  );
};

export default NameTag;
