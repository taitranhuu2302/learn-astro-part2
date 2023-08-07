import {defineMiddleware} from "astro/middleware";

export const authMiddleware = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  console.log("auth request");
  if (url.pathname === '/login' && !!context.cookies.get('token').value) {
    return context.redirect("/")
  }
  const response = await next();
  console.log("auth response");
  return response;
})