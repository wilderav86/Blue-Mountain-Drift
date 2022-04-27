import Image from "next/image";

import styles from "../styles/TheWaters.module.css";

const RiverInfo = () => {
  const riverData = [
    {
      name: "James River",
      desc: "In the Town of Iron Gate, Virginia the Jackson River and the Cowpasture come together to form the James River. The James River holds smallmouth bass from this point all the way to Richmond, Virginia. The James is said to be the best place to fish for smallmouth bass in Virginia. The James River has produced numerous citation smallmouth bass over the past few years on topwater flies. Smallmouth bass aren’t the only game in town. This river holds a good number of musky. Although musky are not easy to catch, the right state of mind and a little luck will give an angler the chance to tangle with this beast.",
      image: "/james.jpeg",
      id: "james",
    },
    {
      name: "Jackson River",
      desc: "The Jackson River is located near Covington, Virginia. This river is the premier tailwater trout fishery below Gathright Dam.  From Gathright Dam downstream to Covington, there are 18 miles of prime trout habitat.  Rainbows and brown trout are the main target species of this river. The average size fish on the Jackson is between 10 and 13 inches, typically rainbows, but there are much larger fish to be had. The browns can be well above 20 inches. A good hatch of insects or large streamers will get the brown trout’s attention. The Jackson is a large trout river by Virginia standards. Floating the Jackson from a drift boat will offer anglers the best opportunity to cover this unique river.",
      image: "/jackson.jpeg",
      id: "jackson",
    },
    {
      name: "Staunton River",
      desc: "The Staunton River is an under rated river that doesn’t get much press. This river is one of the most diverse in Virginia. The Staunton features smallmouth, largemouth, walleye, white bass, and stripers, just to name a few. In the spring, stripers make an annual journey to Brookneal, Virginia to spawn. This event usually starts around the first of April and runs through mid to late May, depending on water temperatures. The spring is a great time to catch a mixture of species on the fly. You never know what you’ll catch on this great river.",
      image: "/staunton.jpeg",
      id: "staunton",
    },
    {
      name: "Maury River",
      desc: "The Maury River is fairly short by most standards. From the confluence of the Calfpasture and the Little Calfpasture Rivers, it’s approximately 30 miles to its confluence with the James River. En route it brushes the charming cities of Lexington and Buena Vista. The Maury being a smaller river it can get to low to float in the Summer months depending on how much rain we are getting. The Maury is a fantastic smallmouth bass river and our favorite time to target it is May through July.",
      image: "/maury.jpeg",
      id: "maury",
    },
    {
      name: "Smith River",
      desc: "The Smith River near Bassett and Martinsville, Virginia is one of the state’s most unique trout fisheries. The cold water released from Philpott Dam provides 31 miles of quality trout water and offers excellent fishing opportunities throughout the year. Brown trout on the Smith river are wild fish, the state also stocks rainbow trout. Our favorite time frame for the Smith is December through May.",
      image: "/smith.jpeg",
      id: "smith",
    },
  ];

  const renderInfo = riverData.map((river, key) => {
    return (
      <div className={styles.infoCard} key={key}>
        <div className={styles.image}>
          <Image
            src={river.image}
            width={6}
            height={4}
            layout="responsive"
            // layout="fill"
            objectFit="cover"
            blurDataURL={river.image}
            placeholder="blur"
            quality={70}
            alt="river image"
          />
        </div>
        <div className={styles.bodyContainer}>
          <div id={river.id} className={styles.heading}>
            <h3>{river.name}</h3>
          </div>
          <p className={styles.body}>{river.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>RIVERS</h2>

      {renderInfo}
    </div>
  );
};

export default RiverInfo;
