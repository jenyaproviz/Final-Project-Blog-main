import mongoose from "mongoose";
import Post from "../models/Post.js";

// Helper to generate a slug from a string
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function updateSlugs() {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/youtube");
  const posts = await Post.find({});
  for (const post of posts) {
    if (!post.slug && post.title) {
      post.slug = slugify(post.title);
      try {
        await post.save();
        console.log(`Updated post ${post._id} with slug: ${post.slug}`);
      } catch (e) {
        console.error(`Failed to update post ${post._id}:`, e.message);
      }
    }
  }
  mongoose.disconnect();
}

updateSlugs().then(() => {
  console.log("Slug update complete.");
  process.exit(0);
});
