import Instagram from "../components/Instagram";
import { Carousel, Container } from "react-bootstrap";
import Image from "next/image";
import PageTransition from "../animations/PageTransition";

import styles from "../styles/Gallery.module.css";

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQVJXTDViVlgzNU9zb2JHZAWRXZAGt0QXhyLWFNTm5GbzNWWVZAIdm5NS1ppNldxc0drRElaTl90QVUxUGIwc1pxZAUFMUGZAmVk9yTFMydGh3UGdXSVg4X0lQNFBIOGxyNHRYSWo1d3RoSGwyZAm03YlFBbQZDZD"
//   );
//   const data = await res.json();

//   return {
//     props: { token: data },
//   };
// };

export const getStaticProps = async () => {
  const id = process.env.NEXT_PUBLIC_INSTA_ID;
  const key = process.env.NEXT_PUBLIC_INSTA_KEY;
  console.log(id, key);

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=${id},caption,media_url&access_token=${key}`
  );
  const data = await res.json();

  return {
    props: { images: data },
  };
};

const Gallery = ({ images }) => {
  const renderCarouselItems = images.data.map((image, id) => {
    const src = image.media_url;
    return (
      <Carousel.Item key={id}>
        <div className={styles.image} align="center">
          <Image
            loader={() => src}
            src={src}
            height={800}
            width={800}
            // layout="responsive"
            objectFit="contain"
            alt="instagram image"
          />
        </div>

        {/* <Carousel.Caption className={styles.caption}>
          <p>{image.caption}</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    );
  });

  return (
    <div className={styles.outerContainer}>
      <PageTransition>
        <div className={styles.galleryContainer}>
          <div className={styles.carouselContainer}>
            <Carousel>{renderCarouselItems}</Carousel>
          </div>

          {/* <Instagram /> */}
        </div>
      </PageTransition>
    </div>
  );
};

export default Gallery;

// IGQVJXTDViVlgzNU9zb2JHZAWRXZAGt0QXhyLWFNTm5GbzNWWVZAIdm5NS1ppNldxc0drRElaTl90QVUxUGIwc1pxZAUFMUGZAmVk9yTFMydGh3UGdXSVg4X0lQNFBIOGxyNHRYSWo1d3RoSGwyZAm03YlFBbQZDZD
