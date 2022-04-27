import Image from "next/image";

import styles from "../styles/TheWaters.module.css";

const FishInfo = () => {
  const fishData = [
    {
      name: "Small Mouth Bass",
      desc: "One of hardest fighting freshwater fish to be caught on a fly rod. Smallmouth weigh between 1 and 5 pounds, on average, and can exceed 8 pounds. They’re naturally aggressive and eager to take a streamer or popper.  Best smallmouth bass fishing in VA is June through September.",
      image: "/smallmouth.jpg",
      id: "smallmouth",
    },
    {
      name: "Muskie",
      desc: "The musky is often referred to as “the fish of 10,000 casts” but a guided trip with Mike will improve your odds. They’re present in the New, James, and Shenandoah Rivers in Virginia. Muskies are solitary fish that use aggressive ambush strategies to feed. It’s certain you’ll never forget the first one you land with a fly rod.",
      image: "/muskie.jpg",
      id: "muskie",
    },
    {
      name: "Trout",
      desc: "Brook trout, the only trout species native to Virginia, account for 80 percent of the wild trout in the state. The Jackson and Smith rivers are the largest rivers in Virginia that offer fishing for wild brown and rainbow trout.  Both rivers can be waded, but floating these rivers gives you the best experience.",
      image: "/trout.jpg",
      id: "trout",
    },
  ];

  const renderInfo = fishData.map((fish, key) => {
    return (
      <div key={key} className={styles.infoCard}>
        {/* <div id={fish.id} className={styles.heading}>
          <h3 className="heading light">{fish.name}</h3>
        </div> */}

        <div className={styles.image}>
          <Image
            src={fish.image}
            width={6}
            height={4}
            layout="responsive"
            objectFit="cover"
            blurDataURL={fish.image}
            placeholder="blur"
            quality={60}
            alt="fish image"
          />
        </div>
        <div className={styles.bodyContainer}>
          <div id={fish.id} className={styles.heading}>
            <h3>{fish.name}</h3>
          </div>
          <p className={styles.body}>{fish.desc}</p>
        </div>

        {/* <div className={styles.body}>
          {fish.desc.map((text, id) => {
            return (
              <p className="body light" key={id}>
                {text}
              </p>
            );
          })}
        </div> */}
      </div>
    );
  });

  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>FISH</h2>
      {renderInfo}
    </div>
  );
};

export default FishInfo;
