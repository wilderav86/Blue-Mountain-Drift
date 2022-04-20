import React from "react";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const Navigation = () => {
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
      name: "Rivers and Fish",
      link: "/riversandfish",
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

  //In order for next link to work properly with react bootstrap nav, surround Nav.Link with a next Link and added passHref

  const renderLinks = pages.map((page, id) => {
    return (
      <Link href={page.link} key={id} passHref>
        <Nav.Link>{page.name}</Nav.Link>
      </Link>
    );
  });

  return (
    // <div className="nav-container">
    <Navbar bg="light" expand="lg">
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
    // </div>
  );

  // return (
  //   <div>
  //     <Navbar collapseOnSelect bg="none" variant="dark" expand="lg" fixed="top">
  //       <Container fluid>
  //         <Navbar.Toggle aria-controls="navbarScroll" />
  //         <Navbar.Collapse id="navbarScroll">
  //           <Nav className="me-auto my-2 my-lg-0" navbarScroll>
  //             {renderLinks}
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </div>
  // );
};

export default Navigation;
