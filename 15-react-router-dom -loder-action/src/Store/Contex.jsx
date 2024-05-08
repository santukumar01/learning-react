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

  // below function doest not have any use whne we use loader
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
