import { createClient } from "contentful";

// Retrieve the list of blog posts from Contentful
// const getContentfulImages = async () => {
//   const response = await client.getAssets();

//   return response.items;
// };

export async function getContentfulImages() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getContentType("page");
  const entries = await client.getEntries();

  if (entries.items) return entries.items;
}
export default getContentfulImages;
