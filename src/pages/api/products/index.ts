import type {APIRoute} from "astro";
import axios from "axios";

export const get: APIRoute = async (request) => {
  const {data} = await axios.get(`https://fakestoreapi.com/products${request.url.search}`)
  return new Response(JSON.stringify(data), {
    status: 200
  })
}