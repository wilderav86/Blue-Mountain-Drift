import { useEffect, useState } from "react";
import Image from "next/image";

const Instagram = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      fetch(
        "https://graph.instagram.com/me?fields=id,username&access_token=IGQVJXcndmU0FJZA0NQRm91TXN2WDNiZA2VHV2RVZADZAHUXctam5oUkJSaGFzcmxiS2tyRVVOeHJkSXhrRXZAlWUlFWFBsRGJjaVlpOXd2bmJkTjBGWElnanZAjNHF4Q2w2a042U29LZA0UxZAHhlUkFHNC1INwZDZD"
      ).then((response) => response.json());
      // .then((data) => console.log(data));
    };

    // const getMedia = async () => {
    setLoading(true);
    fetch(
      " https://graph.instagram.com/me/media?fields=4500407670086349,caption,media_url&access_token=IGQVJXcndmU0FJZA0NQRm91TXN2WDNiZA2VHV2RVZADZAHUXctam5oUkJSaGFzcmxiS2tyRVVOeHJkSXhrRXZAlWUlFWFBsRGJjaVlpOXd2bmJkTjBGWElnanZAjNHF4Q2w2a042U29LZA0UxZAHhlUkFHNC1INwZDZD"
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // };

    // getData();
    // getMedia();
  }, []);

  console.log(loading);
  console.log(error);

  return (
    <div>
      <h1>instagram</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        photos.data &&
        photos.data.map((photo, id) => {
          const src = photo.media_url;
          return (
            <Image loader={() => src} src={src} height={300} width={300} />
          );
        })
      )}
    </div>
  );
};

export default Instagram;

// https://graph.instagram.com/me/media?fields=4500407670086349,caption&access_token=IGQVJXcndmU0FJZA0NQRm91TXN2WDNiZA2VHV2RVZADZAHUXctam5oUkJSaGFzcmxiS2tyRVVOeHJkSXhrRXZAlWUlFWFBsRGJjaVlpOXd2bmJkTjBGWElnanZAjNHF4Q2w2a042U29LZA0UxZAHhlUkFHNC1INwZDZD
