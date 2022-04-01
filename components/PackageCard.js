import Btn from "./Btn";

import styles from "../styles/Packages.module.css";

const PackageCard = ({ data }) => {
  // Required props:
  //      note: data.info prop must be passed in as array
  const { title, info, price } = data;

  const btnData = { name: "Book Trip", link: "/contact" };

  const renderInfo = info.map((item, id) => {
    return <li key={id}>{item}</li>;
  });

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.info}>{renderInfo}</ul>
      </div>
      <div className={styles.containerRow}>
        <h3 className={styles.price}>{price}</h3>
        <div className={styles.btn}>
          <Btn btnData={btnData} />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
