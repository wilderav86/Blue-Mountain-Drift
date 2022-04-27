import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ScrollToTop = () => {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  const handleScrollToTop = () => {
    _document.body.scrollTop = 0;
    _document.documentElement.scrollTop = 0;
  };

  return (
    <motion.div
      style={{
        // position: "sticky",
        bottom: 0,
        margin: 30,
        height: "auto",
        alignSelf: "center",
      }}
      className="scroll-to-top"
      onClick={handleScrollToTop}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <IconContext.Provider value={{ color: "#eae691", size: "2em" }}>
        <BsFillArrowUpCircleFill />
      </IconContext.Provider>
    </motion.div>
  );
};

export default ScrollToTop;
