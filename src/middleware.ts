import {defineMiddleware, sequence} from "astro/middleware";

const validation = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    console.log("validation request");
    const response = await next();
    console.log("validation response");
    return response;
})

const auth = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    if (url.pathname !== '/login') return await next();
    console.log("auth request");
    const response = await next();
    console.log("auth response");
    return response;
})
export const onRequest = sequence(validation, auth);
