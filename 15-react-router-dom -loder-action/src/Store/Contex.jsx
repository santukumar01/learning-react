// carting a contex

import { createContext, useReducer, useState, useEffect } from "react";

export const PostContex = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});

const postReducer = (curPostList, action) => {
  let newPostList = curPostList;

  if (action.type === "DEL_POST") {
    newPostList = curPostList.filter((post) => post !== action.payload.post);
  } else if (action.type === "Add_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "Add_POST") {
    const newPost = {
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      tags: action.payload.tags,
    };
    newPostList = [newPost, ...newPostList];
  } else if (action.type === "Add_POST_SERVER") {
    newPostList = [action.payload.postObj, ...newPostList];
  }

  return newPostList;
};

const dummyData = async () => {
  await fetch("");
};

const PostContexProvider = ({ children }) => {
  // creating useReducer
  const [postList, postDispatch] = useReducer(postReducer, []);

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
        addPosts(data.posts);
        setLoading(false);
      });

    return () => {
      console.log("Cleaning up tyhe use Effect");
      controller.abort();
    };
  }, []);

  // const addPost = (postObj) => {
  //   // console.log(postObj);
  //   const createPostAction = {
  //     type: "Add_POST",
  //     payload: {
  //       id: Date.now(),
  //       userId: postObj.inputUserId,
  //       title: postObj.inputPostTitle,
  //       body: postObj.inputPostBody,
  //       reactions: postObj.inputReaction,
  //       tags: postObj.inputTags,
  //     },
  //   };
  //   postDispatch(createPostAction);
  // };

  // add post from server
  const addPost = (postObj) => {
    console.log("inside new post form server", postObj);
    const createPostAction = {
      type: "Add_POST_SERVER",
      payload: {
        postObj: postObj,
      },
    };
    postDispatch(createPostAction);
  };

  const addPosts = (posts) => {
    postDispatch({
      type: "Add_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (post) => {
    // console.log(post);
    const deleteAction = {
      type: "DEL_POST",
      payload: {
        post: post,
      },
    };
    postDispatch(deleteAction);
  };

  return (
    <PostContex.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addPosts: addPosts,
        loading: loading,
      }}
    >
      {children}
    </PostContex.Provider>
  );
};
export default PostContexProvider;
