// Get Post By Slug
export const getBySlug = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    )
      .populate("author")
      .populate({
        path: "comments",
        populate: { path: "author" },
      });
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
// Like a post
export const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found." });
    if (post.likes.includes(userId)) {
      return res.status(400).json({ message: "Already liked." });
    }
    post.likes.push(userId);
    await post.save();
    res.json({ likes: post.likes.length });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

// Unlike a post
export const unlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found." });
    post.likes = post.likes.filter((id) => id.toString() !== userId);
    await post.save();
    res.json({ likes: post.likes.length });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
import Post from "../models/Post.js";
// Helper to generate a slug from a string
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')          // Replace & with 'and'
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9-]/g, '')      // Remove all non-word chars
    .replace(/--+/g, '-')            // Replace multiple - with single -
    .replace(/^-+/, '')              // Trim - from start of text
    .replace(/-+$/, '');             // Trim - from end of text
}
import User from "../models/User.js";
import Comment from "../models/Comment.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Create Post
export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;
    const user = await User.findById(req.userId);

    const slug = slugify(title || Date.now().toString());
    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));

      const newPostWithImage = new Post({
        username: user.username,
        title,
        text,
        imgUrl: fileName,
        author: req.userId,
        slug,
      });

      await newPostWithImage.save();
      await User.findByIdAndUpdate(req.userId, {
        $push: { posts: newPostWithImage },
      });

      return res.json(newPostWithImage);
    }

    const newPostWithoutImage = new Post({
      username: user.username,
      title,
      text,
      imgUrl: "",
      author: req.userId,
      slug,
    });
    await newPostWithoutImage.save();
    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPostWithoutImage },
    });
    res.json(newPostWithoutImage);
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Get All Posts
export const getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort("-createdAt");
    const popularPosts = await Post.find().limit(5).sort("-views");

    if (!posts) {
      return res.json({ message: "No posts available." });
    }

    res.json({ posts, popularPosts });
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Get Post By Id
export const getById = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.json(post);
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Get All Posts
export const getMyPosts = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const list = await Promise.all(
      user.posts.map((post) => {
        return Post.findById(post._id);
      })
    );

    res.json(list);
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Remove post
export const removePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.json({ message: "This post does not exist." });

    await User.findByIdAndUpdate(req.userId, {
      $pull: { posts: req.params.id },
    });

    res.json({ message: "The post has been deleted." });
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const { title, text, id } = req.body;
    const post = await Post.findById(id);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));
      post.imgUrl = fileName || "";
    }

    post.title = title;
    post.text = text;

    await post.save();

    res.json(post);
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};

// Get Post Comments
export const getPostComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const list = await Promise.all(
      post.comments.map((comment) => {
        return Comment.findById(comment);
      })
    );
    res.json(list);
  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
};
