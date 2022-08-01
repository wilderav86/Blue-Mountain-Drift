import PageTransition from "../animations/PageTransition";
import ContactForm from "../components/Form/ContactForm";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.outerContainer}>
      <PageTransition>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h2 className={styles.heading}>CONTACT US</h2>
            <div className={styles.body}>
              <p>Use this form to contact us and book a trip</p>

              <p>Or Email directly:</p>
              <p className={styles.accent}>BlueMountainDrift@gmail.com</p>

              <div className={styles.contact}>
                <p>Telephone: </p>
                <p className={styles.accent}>(904) 248-9257</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Contact;
