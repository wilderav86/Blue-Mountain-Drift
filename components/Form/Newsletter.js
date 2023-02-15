import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";

import styles from "../../styles/Newsletter.module.css";
import { useState, useRef } from "react";

const Newsletter = () => {
  const userEmail = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: userEmail.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    userEmail.current.value = "";
    setMessage("Success! You are now subscribed to the newsletter.");
  };

  return (
    <div>
      <Form className={styles.container} onSubmit={subscribe}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={styles.label}>
            SUBSCRIBE TO OUR NEWSLETTER
          </Form.Label>
          <div className={styles.form}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={userEmail}
            />
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              size="lg"
              variant="custom"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </Form.Group>
        <div className={styles.message}>{message && message}</div>
      </Form>
    </div>
  );
};

export default Newsletter;
