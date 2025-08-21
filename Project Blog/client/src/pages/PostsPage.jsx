import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PostItem } from "../components/PostItem";
import axios from "../utils/axios";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await axios.get("/posts/user/me");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10 rounded-lg">
      {posts?.map((post, idx) => (
        <PostItem post={post} key={idx} />
      ))}
    </div>
  );
};
