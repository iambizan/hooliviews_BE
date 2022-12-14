import express from "express";
const router = express.Router();

import {
  createPlaylist,
  getPlaylists,
  deletePlaylist,
  addVideoToPlaylist,
  getPlaylist,
  deleteVideoFromPlaylist,
} from "../controllers";
import { auth } from "../middleware";

router.get("/", auth, getPlaylists);
router.post("/", auth, createPlaylist);
router.delete("/:playlistId", auth, deletePlaylist);
router.get("/:playlistId/", auth, getPlaylist);
router.post("/:playlistId/:videoId", auth, addVideoToPlaylist);
router.delete("/:playlistId/:videoId", auth, deleteVideoFromPlaylist);

export default router;
