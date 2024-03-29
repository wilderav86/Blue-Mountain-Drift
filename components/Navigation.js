import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const pages = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Packages",
      link: "/packages",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "The Waters",
      link: "/thewaters",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const handleExpand = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const handleContract = () => {
    setExpanded(false);
  };

  //In order for next link to work properly with react bootstrap nav, surround Nav.Link with a next Link and added passHref

  const renderLinks = pages.map((page, id) => {
    return (
      <Link href={page.link} key={id} passHref>
        <Nav.Link onClick={handleContract}>{page.name}</Nav.Link>
      </Link>
    );
  });

  return (
    <Navbar expanded={expanded} bg="light" expand="lg" onClick={handleExpand}>
      <Container>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Navbar.Brand href="/">
            <Image
              src="/logo.png"
              height={100}
              width={100}
              priority
              alt="logo"
            />
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{renderLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
