import Head from "next/head";
import BgImage from "../components/BgImage";
import NameTag from "../components/NameTag";
import LandingCard from "../components/LandingCard";
import Socials from "../components/Socials";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  //Card data for LandingCard components:
  const aboutCard = {
    style: "about-card",
    image: "/aboutCardImage.jpg",
    header: "",
    body: "Mike Rennie is a Central Virginia based fly fishing and light tackle fishing guide specializing in float trips for smallmouth, muskie and trout",
    btnData: { name: "MEET MIKE", link: "/about" },
    id: styles.one,
  };

  const packagesCard = {
    style: "packages-card",
    image: "/packagesCardImage.jpg",
    header: "LET US TAKE YOU ON A TRIP",
    body: "We are full service fly fishing guides providing year round fishing to some of Virginia's premier rivers. Whether you are a first time fly angler or avid fisherman, we can teach you from the ground up or help hone your skills. Let us show you some of the great fishing Virginia has to offer. From cool trout waters to hot summertime smallmouth fishing, we have you covered for a memorable day floating down some of Virginia's best waters.",
    btnData: { name: "VIEW TRIP PACKAGES", link: "/packages" },
    id: styles.two,
  };

  const contactCard = {
    style: "contact-card",
    image: "/contactCardImage.jpg",
    header: "PLAN YOUR NEXT TRIP WITH US",
    body: "",
    btnData: { name: "CONTACT", link: "/contact" },
    id: styles.three,
  };

  return (
    <div className="app">
      <Head>
        <title>Blue Mountain Drift</title>
        <meta
          name="description"
          content="Mike Rennie - Fly fishing guide serving Central Virginia"
        />
        <meta property="og:title" content="Blue Mountain Drift" />
        <meta
          property="og:description"
          content="Mike Rennie - Fly fishing guide serving Central Virginia"
        />
        <meta property="og:url" content="www.bluemountaindriftflyfishing.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <BgImage />
      <NameTag />
      <LandingCard data={aboutCard} />
      <LandingCard data={packagesCard} />
      <LandingCard data={contactCard} />
      <Socials />
    </div>
  );
}
