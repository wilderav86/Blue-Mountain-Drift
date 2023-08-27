import { Carousel } from "react-bootstrap";
import Image from "next/image";
import PageTransition from "../animations/PageTransition";
import getContentfulImages from "./api/getContentfulImages";
import { createClient } from "contentful";

import styles from "../styles/Gallery.module.css";

export const getServerSideProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "image" });

  return { props: { images: res.items } };
};

// const galleryImages = await getContentfulImages();

// const id = process.env.NEXT_PUBLIC_INSTA_ID;
// const key = process.env.NEXT_PUBLIC_INSTA_KEY;

// /////////////////////////og code DO NOT DELETE

// const res = await fetch(
//   `https://graph.instagram.com/me/media?fields=${id},caption,media_url,permalink&access_token=${key}`
// );
// const data = await res.json();

// return {
//   props: { images: data },
// };

// ///////////////////////////

const Gallery = (props) => {
  const renderCarouselItems = props.images.map((image, key) => {
    console.log(image);
    return (
      <Carousel.Item key={key}>
        <div className={styles.image} align="center">
          <Image
            loader={() => image.fields.image.fields.file.url}
            src={image.fields.image.fields.file.url}
            height={800}
            width={800}
            // layout="responsive"
            objectFit="contain"
            alt="gallery image"
          />
        </div>
      </Carousel.Item>
    );
  });

  //   const imagesWithoutVideos = images.data.filter(
  //     (image) => !image.media_url.includes("video")
  //   );

  //   const renderCarouselItems = imagesWithoutVideos.map((image, id) => {
  //     const src = image.media_url;

  //     return (
  //       <Carousel.Item key={id}>
  //         <div className={styles.image} align="center">
  // <Image
  //   loader={() => src}
  //   src={src}
  //   height={800}
  //   width={800}
  //   // layout="responsive"
  //   objectFit="contain"
  //   alt="instagram image"
  // />
  //         </div>
  //       </Carousel.Item>
  //     );
  //   });

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
