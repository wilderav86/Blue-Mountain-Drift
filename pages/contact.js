import PageTransition from "../animations/PageTransition";
import ContactForm from "../components/Form/ContactForm";
import styles from "../styles/Contact.module.css";
// import { Form, Button } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import { motion } from "framer-motion";

const Contact = () => {
  const tripOptions = [
    "Full Day Solo - $430",
    "Full Day Duo - $480",
    "Half Day Solo - $330",
    "Half Day Duo - $380",
    "Fly Tying Class - $75",
    "Fly Casting Class - $75",
  ];

  const fishOptions = ["Trout", "Small Mouth Bass", "Musky", "Surprise me"];

  const waterOptions = [
    "James River",
    "Jackson River",
    "Staunton River",
    "Maury River",
    "Smith River",
    "Other",
  ];

  // const handleSubmit = event => {
  //   event.preventDefault();

  //  // do your verifications and checks
  //  if(!verified) return false

  //   const REQUEST_PARAMETERS = {
  //     method: `POST`,
  //     headers: { 'Content-Type': `application/x-www-form-urlencoded` },
  //     body: encode({ ...data }), //your data here. Needs to have your form-name attribute set
  //   };

  //   fetch(`/`, REQUEST_PARAMETERS)
  //     .then(() => {
  //       console.log(`OK`);
  //     })
  //     .catch(error => alert(error));
  // };

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
            {/* <div className={styles.form}>
              <Form
                name="contactv2"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit="submit"
              >
                <input type="hidden" name="contactv2" value="contactv2" />
                <input type="hidden" name="bot-field" />
                <Row>
                  <Col>
                    <Form.Group className={styles.first} controlId="First name">
                      <Form.Label className={styles.label}>
                        First name
                      </Form.Label>
                      <Form.Control required type="text" name="First name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className={styles.last} controlId="Last-name">
                      <Form.Label className={styles.label}>
                        Last name
                      </Form.Label>
                      <Form.Control required type="text" name="Last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className={styles.label}>
                        Email address
                      </Form.Label>
                      <Form.Control required type="email" name="email" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className={styles.phone} controlId="Phone">
                      <Form.Label className={styles.label}>
                        Phone number
                      </Form.Label>
                      <Form.Control name="phone" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="Message">
                    <Form.Label className={styles.label}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      name="trip info"
                      placeholder="Tell us more about the adventure you'd like to take, as well as
          your preferred dates."
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="tripDropDown">
                    <Form.Select
                      id="trip option"
                      name="Trip option"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose your trip
                      </option>
                      {tripOptions.map((option, id) => (
                        <option value={option} key={`trip${id}`}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="fishDropDown">
                    <Form.Select
                      id="Fish option"
                      name="Fish option"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose your fish
                      </option>
                      {fishOptions.map((option, id) => (
                        <option value={option} key={`fish${id}`}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="waterDropDown">
                    <Form.Select
                      id="water option"
                      name="Water option"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose your water
                      </option>
                      {waterOptions.map((option, id) => (
                        <option value={option} key={`water${id}`}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <div className={styles.btn}>
                    <Button
                      as={motion.button}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      size="lg"
                      variant="custom"
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </Row>
              </Form>
            </div> */}
            <ContactForm />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Contact;

{
  /* <div className={styles.form}>
<Form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit="submit"
>
  <input type="hidden" name="contact-form" value="contact" />
  <Row>
    <Col>
      <Form.Group className={styles.first} controlId="First name">
        <Form.Label className={styles.label}>First name</Form.Label>
        <Form.Control required type="text" name="First name" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group className={styles.last} controlId="Last-name">
        <Form.Label className={styles.label}>Last name</Form.Label>
        <Form.Control required type="text" name="Last name" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.label}>Email address</Form.Label>
        <Form.Control required type="email" name="email" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group className={styles.phone} controlId="Phone number">
        <Form.Label className={styles.label}>Phone number</Form.Label>
        <Form.Control name="phone number" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Form.Group className="mb-3" controlId="Message">
      <Form.Label className={styles.label}>Message</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        name="trip-info"
        placeholder="Tell us more about the adventure you'd like to take, as well as
          your preferred dates."
      />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group className="mb-3" controlId="tripDropDown">
      <Form.Select id="trip option" name="Trip option" defaultValue="">
        <option value="" disabled>
          Choose your trip
        </option>
        {tripOptions.map((option, id) => (
          <option value={option} key={`trip${id}`}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  </Row>
  <Row>
    <Form.Group className="mb-3" controlId="fishDropDown">
      <Form.Select id="Fish option" name="Fish option" defaultValue="">
        <option value="" disabled>
          Choose your fish
        </option>
        {fishOptions.map((option, id) => (
          <option value={option} key={`fish${id}`}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  </Row>
  <Row>
    <Form.Group className="mb-3" controlId="waterDropDown">
      <Form.Select id="wish option" name="Water option" defaultValue="">
        <option value="" disabled>
          Choose your water
        </option>
        {waterOptions.map((option, id) => (
          <option value={option} key={`water${id}`}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  </Row>
  <Row>
    <Button
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      size="lg"
      variant="custom"
      type="submit"
    >
      Send
    </Button>
  </Row>
</Form>
</div> */
}
