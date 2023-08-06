import type {APIRoute} from "astro";
import axios from "axios";

export const post: APIRoute = async ({request}) => {
  const body = await request.json();
  const {data} = await axios.post(`https://fakestoreapi.com/auth/login`, body)
  return new Response(JSON.stringify({
    token: data.token,
    ...body
  }), {status: 200})
}