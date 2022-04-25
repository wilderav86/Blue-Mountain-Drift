import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/RiversAndFish.module.css";

const InfoNav = () => {
  const fish = [
    {
      section: "Small Mouth",
      id: "#smallmouth",
    },
    {
      section: "Muskie",
      id: "#muskie",
    },
    {
      section: "Trout",
      id: "#trout",
    },
  ];

  const rivers = [
    {
      section: "James River",
      id: "#james",
    },
    {
      section: "Jackson River",
      id: "#jackson",
    },
    {
      section: "Staunton River",
      id: "#staunton",
    },
    {
      section: "Maury River",
      id: "#maury",
    },
    {
      section: "Smith River",
      id: "#smith",
    },
  ];

  const renderFish = fish.map((link, key) => {
    return (
      <Link key={key} href={link.id} passHref>
        <Nav.Link>{link.section}</Nav.Link>
      </Link>
    );
  });

  const renderRivers = rivers.map((link, key) => {
    return (
      <Link key={key} href={link.id} passHref>
        <Nav.Link>{link.section}</Nav.Link>
      </Link>
    );
  });

  return (
    <div className={styles.infoNav}>
      <div className={styles.subContainer}>
        <Navbar expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <h3>Fish</h3>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" navbarScroll>
              <div className={styles.navItems}>{renderFish}</div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={styles.subContainer}>
        <Navbar expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <h3>Rivers</h3>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" navbarScroll>
              <div className={styles.navItems}>{renderRivers}</div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default InfoNav;
