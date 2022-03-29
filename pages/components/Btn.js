import Link from "next/link";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";

//Link and name to be passed as object called btnData with name and link from parent component

const Btn = ({ btnData }) => {
  console.log(btnData.link);

  return (
    <Link href={btnData.link}>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        size="lg"
        variant="custom"
      >
        {btnData.name}
      </Button>
    </Link>
  );
};

export default Btn;
