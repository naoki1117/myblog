import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain:"7m16jlfipy",
  apiKey: process.env.API_KEY || "",
});