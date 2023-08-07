import type {APIRoute} from "astro";
import axios from "axios";

export const get: APIRoute = async (request) => {
  const {id} = request.params;
  const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return new Response(JSON.stringify(data), {status: 200})
}