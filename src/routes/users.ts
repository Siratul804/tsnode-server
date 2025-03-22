import { Router } from "express";
import { getUsers, getUserById } from "../handlers/users";

const router = Router();

router.get("/", getUsers)

router.get("/:id", getUserById)

export default router;