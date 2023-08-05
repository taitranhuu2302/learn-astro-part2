import type {APIRoute} from "astro";
import axios from "axios";

export const get: APIRoute = async ({}) => {
    return new Response(JSON.stringify({
        message: "Xin chao"
    }), {
        status: 200
    })

}

export const post: APIRoute = async ({request}) => {
    const {data} = await axios.get(`https://randomuser.me/api/?inc=gender,email,name,picture,id,login`)
    const response = !!data.results?.length ? data.results[0] : "";
    return new Response(JSON.stringify(response), {status: 200})
}