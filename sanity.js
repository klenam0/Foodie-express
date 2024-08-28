import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "prd0h0fj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

//sanity cors add https://localhost:3000
