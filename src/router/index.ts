import Router from "express";
import healthyRouter from "./healthy";

const router = Router();


// router.use(ApiKeyMiddleWare.check);
router.use('/v1/api', healthyRouter)
export default router;