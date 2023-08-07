import {defineMiddleware} from "astro/middleware";

export const validationMiddleware = defineMiddleware(async (context, next) => {
  console.log("-------------");
  console.log("validation request");
  const response = await next();
  console.log("validation response");
  return response;
})