import styles from "../styles/Contact.module.css";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

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

  const btnData = { name: "Send" };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
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
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="First name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className={styles.last} controlId="Last-name">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" name="Last name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className={styles.phone} controlId="Phone number">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="Message">
              <Form.Label>Message</Form.Label>
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
              <Form.Select defaultValue="">
                <option value="" disabled>
                  Choose your trip
                </option>
                {tripOptions.map((option, id) => (
                  <option key={`trip${id}`} value={id + 1}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="fishDropDown">
              <Form.Select name="fish option" defaultValue="">
                <option value="" disabled>
                  Choose your fish
                </option>
                {fishOptions.map((option, id) => (
                  <option key={`fish${id}`}>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="waterDropDown">
              <Form.Select defaultValue="">
                <option value="" disabled>
                  Choose your water
                </option>
                {waterOptions.map((option, id) => (
                  <option key={`water${id}`}>{option}</option>
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
      </div>
    </div>
  );
};

export default Contact;
