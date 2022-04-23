import Image from "next/image";

import styles from "../styles/RiversAndFish.module.css";

const RiverInfo = () => {
  const riverData = [
    {
      name: "James River",
      desc: [
        "The James River is a river in the U.S. state of Virginia that begins in the Appalachian Mountains and flows 348 miles to Chesapeake Bay. The river length extends to 444 miles if one includes the Jackson River, the longer of its two source tributaries.[3] It is the longest river in Virginia. Jamestown and Williamsburg, Virginia's first colonial capitals, and Richmond, Virginia's current capital, lie on the James River.",
        "It contains many parks and other recreational attractions. Canoeing, fishing, kayaking, hiking, and swimming are some of the activities that people enjoy along the river during the summer. From the river's start in the Blue Ridge mountains to Richmond, numerous rapids and pools offer fishing and whitewater rafting. ",
      ],
      image: "/jamesRiver.jpg",
      id: "james",
    },
    {
      name: "Jackson River",
      desc: [
        "The Jackson River is a major tributary of the James River in the U.S. state of Virginia, flowing 96.4 miles. The James River is formed by the confluence of the Jackson River and the Cowpasture River.",
        "It's an excellent smallmouth bass, rock bass, rainbow trout, and brown trout fishery.",
      ],
      image: "/jacksonRiver.jpg",
      id: "jackson",
    },
    {
      name: "Staunton River",
      desc: [
        "The Staunton River is located in south-central Virginia and forms the boundaries of Campbell, Pittsyvania, Halifax and Charlotte counties. Actually an 81-mile segment of the Roanoke River, the Staunton River begins at Leesville Dam and continues to the confluence with John H. Kerr Reservoir.",
        " Bird watchers, anglers, and hunters will enjoy the bounty of the river and its adjacent bottomlands. Canoeists can experience the challenging Fish Trap (Class III) and Cat Rock (Class II) rapids.",
      ],
      image: "/stauntonRiver.jpg",
      id: "staunton",
    },
    {
      name: "Maury River",
      desc: [
        "The Maury River is a 42.8-mile-long tributary of the James River in west-central Virginia in the United States. It is part of the watershed of Chesapeake Bay.",
        "The Maury flows for its entire length in Rockbridge County. It is formed near Goshen by the confluence of the Calfpasture and Little Calfpasture rivers, and flows south past Lexington and Buena Vista; between the cities it collects the South River. The Maury flows into the James River at Glasgow.",
        "The Maury River formed a portion of an all-water route from the Atlantic ports of Virginia to Lexington from the late 18th to the late 19th century, primarily carrying passengers, pig iron, and agricultural products.",
      ],
      image: "/mauryRiver.jpg",
      id: "maury",
    },
    {
      name: "Smith River",
      desc: [
        "The Smith River in Franklin and Henry Counties is one of the state’s most unique trout fisheries. The cold water released from Philpott Dam provides miles of quality trout water and offers excellent fishing opportunities throughout the year.",
        "Approximately 31 miles from Philpott Dam downstream to State Route 636 (Mitchell Bridge) are special regulation brown trout waters. Two sections of the Smith are designated as put-and-take stocked waters and provide opportunities to catch rainbow trout. Downstream of the special regulation section, anglers can expect to catch smallmouth bass, rock bass, and sunfish as the Smith makes its way into North Carolina.",
      ],
      image: "/smithRiver.jpg",
      id: "smith",
    },
  ];

  const renderInfo = riverData.map((river, key) => {
    return (
      <div key={key}>
        <div id={river.id}>
          <h3>{river.name}</h3>
        </div>

        <div className={styles.image}>
          <Image
            src={river.image}
            width="600px"
            height="400px"
            objectFit="contain"
            blurDataURL="data:..."
            placeholder="blur"
            quality={60}
            alt="fish image"
          />
        </div>
        <div className={styles.body}>
          {river.desc.map((text, id) => {
            return <p key={id}>{text}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.infoContainer}>
      <h2>Rivers</h2>
      {renderInfo}
      <div className={styles.cardContainer}></div>
    </div>
  );
};

export default RiverInfo;
