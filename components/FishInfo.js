import Image from "next/image";

import styles from "../styles/RiversAndFish.module.css";

const FishInfo = () => {
  const fishData = [
    {
      name: "Small Mouth Bass",
      desc: [
        "Smallmouth bass are sometimes overshadowed by their largemouth counterparts, but they are still easily one of the most popular sportfish species in North America. They’re easy to find, with an expansive range, and are some of the most aggressive fish out there hungry for all sorts of baits and lures.",
        "Because of that aggressive nature and strong fight, smallmouth bass are targeted by fishermen. Otherwise, they are typically one of the top predators in their ecosystems and don’t face many threats from other fish. But bigger bass, northern pike and muskellunge are common predators.",
      ],
      image: "/smallmouth.jpg",
      id: "smallmouth",
    },
    {
      name: "Muskie",
      desc: [
        "The muskie, a member of the pike family (Esocidae), is a top predator in freshwaters of the Great Lakes region. The natural range of the muskie spans from north to south from Tennessee to mid-Ontario, and from east to west from New York to Minnesota.",
        " Muskie can reach lengths greater than 50 inches and weights of over 50 pounds. Their appearance is streamlined, with their dorsal fin located directly above the anal fin, and their mouth is equipped with sharp canine teeth.",
        "Muskie generally fall into one of, or a combination of, three distinct color phases: spotted, barred, or clear (no markings).",
      ],
      image: "/muskie.jpg",
      id: "muskie",
    },
    {
      name: "Trout",
      desc: [
        "Each of the different species (and subspecies) of Trout look slightly different from the last. However, all of the various species have elongated bodies, often peppered with small spots. Their coloration varies from dark brown to silver, and many have hues of pink, red or yellow as well.",
        "Size also varies drastically by species. While many measure about a foot or so long, some reach lengths up to four feet or more!",
        "Though the various species and subspecies have different preferences, you can generally find these fish in freshwater habitats. Like other members of the Salmonidae family, some species have anadromous habits, which means that they live in saltwater during their adult lives, and return to freshwater to spawn.",
        "Typically, these fish occupy streams, lakes, creeks, and rivers with cool temperatures.",
      ],
      image: "/trout.jpg",
      id: "trout",
    },
  ];

  const renderInfo = fishData.map((fish, key) => {
    return (
      <div key={key}>
        <div id={fish.id}>
          <h3>{fish.name}</h3>
        </div>

        <div className={styles.image}>
          <Image
            src={fish.image}
            width="600px"
            height="400px"
            objectFit="contain"
            blurDataURL={fish.image}
            placeholder="blur"
            quality={60}
            alt="fish image"
          />
        </div>
        <div className={styles.body}>
          {fish.desc.map((text, id) => {
            return <p key={id}>{text}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.fishInfoContainer}>
      <h2>Fish</h2>
      {renderInfo}
      <div className={styles.cardContainer}></div>
    </div>
  );
};

export default FishInfo;
