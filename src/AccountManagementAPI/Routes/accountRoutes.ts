import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../Controllers/accountController.js";

const router: Router = express.Router();

router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
