import styles from "../../styles/Contact.module.css";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Name = () => {
  return (
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
  );
};

export default Name;
