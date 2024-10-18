import express from "express";
import {
  generateShortId,
  getNumberOfVisits,
  getOriginalUrl,
} from "../controllers/urlController.js";

const route = express.Router();

route.post("/", generateShortId);
route.get("/:id", getOriginalUrl);
route.get("/analytics/:id", getNumberOfVisits);

export default route;
