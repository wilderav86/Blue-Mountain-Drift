import styles from "../../styles/Contact.module.css";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Name from "./Name";
import EmailPhone from "./EmailPhone";
import Message from "./Message";

const ContactForm = () => {
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

  return (
    <div className={styles.form}>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
      >
        <input type="hidden" name="contact-form" value="contact" />
        <Name />
        <EmailPhone />
        <Message />
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
    </div>
  );
};

export default ContactForm;
