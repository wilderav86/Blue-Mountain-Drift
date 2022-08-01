import { Carousel } from "react-bootstrap";
import Image from "next/image";
import PageTransition from "../animations/PageTransition";

import styles from "../styles/Gallery.module.css";

export const getServerSideProps = async () => {
  const id = process.env.NEXT_PUBLIC_INSTA_ID;
  const key = process.env.NEXT_PUBLIC_INSTA_KEY;

  /////////////////////////og code DO NOT DELETE

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=${id},caption,media_url,permalink&access_token=${key}`
  );
  const data = await res.json();

  return {
    props: { images: data },
  };

  ///////////////////////////
};

const Gallery = ({ images }) => {
  const imagesWithoutVideos = images.data.filter(
    (image) => !image.media_url.includes("video")
  );

  const renderCarouselItems = imagesWithoutVideos.map((image, id) => {
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
        </div>
      </PageTransition>
    </div>
  );
};

export default Gallery;
