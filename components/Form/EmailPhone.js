import styles from "../../styles/Contact.module.css";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const EmailPhone = () => {
  return (
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
  );
};

export default EmailPhone;
