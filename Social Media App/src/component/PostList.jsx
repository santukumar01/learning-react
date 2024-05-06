import React, { useContext } from "react";

import { PostContex } from "../Store/Contex";
import Post from "./Post";

const PostList = () => {
  const postContexList = useContext(PostContex);
  const posts = postContexList.postList;

  const hnadleGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => postContexList.addPosts(data.posts));
  };

  return (
    <div className="post-container">
      {posts.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4> No Posts Yet</h4>
          <button
            type="button"
            className="btn btn-success"
            onClick={hnadleGetPost}
          >
            Get Dummy Data
          </button>
        </div>
      ) : (
        posts.map((postItem) => <Post key={postItem.id} post={postItem} />)
      )}
    </div>
  );
};

export default PostList;
