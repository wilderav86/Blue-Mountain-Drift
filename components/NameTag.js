import styles from "../styles/Home.module.css";

const NameTag = () => {
  const name = "MIKE RENNIE";
  const title = "Head Guide at Matt Miles Fly Fishing";

  return (
    <div className={styles.nameTagContainer}>
      <div>
        logo placeholder
        <div>
          <h2 className="heading light">{name}</h2>
          <p className="body light">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default NameTag;
