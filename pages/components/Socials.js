import Link from "next/link";

const Socials = () => {
  const heading = "CHECK US OUT ON INSTAGRAM";

  return (
    <div>
      <h2 className="heading light">{heading}</h2>
      <div>
        <Link href="https://www.instagram.com/blue_mountain_drift/?hl=en">
          <p>Logo</p>
        </Link>
        <Link href="https://www.instagram.com/mattmilesflyfishing/?hl=en">
          <p>mattlogo</p>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
