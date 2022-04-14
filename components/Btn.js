import Link from "next/link";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

//Link and name to be passed as object called btnData with name and link from parent component

const Btn = ({ btnData }) => {
  return (
    <Link href={btnData.link} passHref>
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
