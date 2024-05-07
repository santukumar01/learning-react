import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { PostContex } from "../Store/Contex";
import Post from "./Post";

const PostList = () => {
  const postContexList = useContext(PostContex);
  const posts = postContexList.postList;

  // working with state ;
  // const [fetchedMsg, setFetchedMsg] = useState(false);

  // if (!fetchedMsg) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => postContexList.addPosts(data.posts));
  //   setFetchedMsg(true);
  // }

  // useEffect
  // creating a loding state
  //1. order of excetion of fetchmethod  -> started -> end => return
  //  creting a loding state

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("Fetch started");
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        // console.log("fetch return ");
        postContexList.addPosts(data.posts);
        setLoading(false);
      });
    // console.log("inside useEffcet");
    // console.log("Fetch end");
    return () => {
      console.log("Cleaning up tyhe use Effect");
      // controller.abort();
    };
  }, []);

  return (
    <div className="post-container">
      {loading && <Loading />}
      {!loading && posts.length == 0 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4> No Posts Yet</h4>
        </div>
      )}
      {!loading &&
        posts.map((postItem) => <Post key={postItem.id} post={postItem} />)}
    </div>
  );
};

export default PostList;
