import Instagram from "../components/Instagram";
import { Carousel, Container } from "react-bootstrap";
import Image from "next/image";

import styles from "../styles/Gallery.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    " https://graph.instagram.com/me/media?fields=4500407670086349,caption,media_url&access_token=IGQVJXcndmU0FJZA0NQRm91TXN2WDNiZA2VHV2RVZADZAHUXctam5oUkJSaGFzcmxiS2tyRVVOeHJkSXhrRXZAlWUlFWFBsRGJjaVlpOXd2bmJkTjBGWElnanZAjNHF4Q2w2a042U29LZA0UxZAHhlUkFHNC1INwZDZD"
  );
  const data = await res.json();

  return {
    props: { images: data },
  };
};

const Gallery = ({ images }) => {
  const renderCarouselItems = images.data.map((image, id) => {
    console.log(image);
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
          />
        </div>

        <Carousel.Caption className={styles.caption}>
          <p>{image.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.carouselContainer}>
        <Carousel>{renderCarouselItems}</Carousel>
      </div>

      {/* <Instagram /> */}
    </div>
  );
};

export default Gallery;
