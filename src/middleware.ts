import {defineMiddleware, sequence} from "astro/middleware";

const validation = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  console.log("-------------");
  console.log("validation request");
  const response = await next();
  console.log("validation response");
  return response;
})

const auth = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  console.log("auth request");
  if (url.pathname === '/login' && !!context.cookies.get('token').value) {
    return context.redirect("/")
  }
  const response = await next();
  console.log("auth response");
  return response;
})
export const onRequest = sequence(validation, auth);
