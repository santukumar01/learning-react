import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { PostContex } from "../Store/Contex";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const postContexList = useContext(PostContex);
  // const posts = postContexList.postList;
  // const loading = postContexList.loading;

  const posts = useLoaderData();

  return (
    <div className="post-container">
      {posts.length == 0 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4> No Posts Yet</h4>
        </div>
      )}
      {posts.map((postItem) => (
        <Post key={postItem.id} post={postItem} />
      ))}
    </div>
  );
};

export const postList = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
