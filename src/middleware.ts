import {sequence} from "astro/middleware";
import {authMiddleware} from "./middlewares/authMiddleware";
import {validationMiddleware} from "./middlewares/validationMiddleware";

export const onRequest = sequence(validationMiddleware, authMiddleware);
