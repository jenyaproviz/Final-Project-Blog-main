import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

export const createComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const postId = req.params.id;
    const userId = req.userId;

    if (!comment)
      return res.status(400).json({ message: "Comment cannot be empty." });
    if (!userId) return res.status(401).json({ message: "Unauthorized." });

    const newComment = new Comment({
      comment,
      author: userId,
    });

    await newComment.save();

    await Post.findByIdAndUpdate(postId, {
      $push: { comments: newComment._id },
    });

    await newComment.populate("author", "username");

    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
