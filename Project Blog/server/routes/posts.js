import { Router } from "express";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
  getPostComments,
  likePost,
  unlikePost,
} from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Like Post
// http://localhost:8080/api/posts/:id/like
router.post("/:id/like", checkAuth, likePost);

// Unlike Post
// http://localhost:8080/api/posts/:id/unlike
router.post("/:id/unlike", checkAuth, unlikePost);

// Create Post
// http://localhost:8080/api/posts
router.post("/", checkAuth, createPost);

// Get All Posts
// http://localhost:8080/api/posts
router.get("/", getAll);


// Get Post By Slug
// http://localhost:8080/api/posts/slug/:slug
import { getBySlug } from "../controllers/posts.js";
router.get("/slug/:slug", getBySlug);

// Get Post By Id
// http://localhost:8080/api/posts/:id
router.get("/:id", getById);

// Update Post
// http://localhost:8080/api/posts/:id
router.put("/:id", checkAuth, updatePost);

// Get My Posts
// http://localhost:8080/api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

// Remove Post
// http://localhost:8080/api/posts/:id
router.delete("/:id", checkAuth, removePost);

// Get Post Comments
// http://localhost:8080/api/posts/comments/:id
router.get("/comments/:id", getPostComments);

export default router;
