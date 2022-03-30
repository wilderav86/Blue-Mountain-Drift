import React from "react";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">LOGO PLACEHOLDER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{renderLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
