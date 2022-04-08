import styles from "../../styles/Contact.module.css";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Message = () => {
  return (
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
  );
};

export default Message;
