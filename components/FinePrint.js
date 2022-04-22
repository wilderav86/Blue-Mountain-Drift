import styles from "../styles/Packages.module.css";

const FinePrint = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4 className={styles.finePrint}>
          <strong>
            All trips require a $200 non-refundable deposit for each day booked.
            Final payment is due at completion of services.
          </strong>
        </h4>
        <h5 className={styles.finePrint}>
          Rates for other trips and/or extra anglers are available upon request.
          Cash, check, or credit cards accepted at the completion of services.
          Guide fees do not include a Virginia fishing license. Guide gratuity
          is not included, but appreciated. Lodging recommendations are
          available upon request. The client may cancel reservation up to 14
          days prior to the reserved date for a full refund of the deposit. The
          guide reserves the right to cancel the reservation due to weather or
          other unforeseen circumstance; in which case, the client may choose to
          reserve a new date or receive a full refund of the deposit.
        </h5>
        <h5 className={styles.finePrint}>*Waders not provided.</h5>
        <h5 className={styles.finePrint}>
          Check out our FAQ for additional information.
        </h5>
      </div>
    </div>
  );
};

export default FinePrint;
