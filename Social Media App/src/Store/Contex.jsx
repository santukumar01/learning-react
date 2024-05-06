// carting a contex

import { createContext, useReducer } from "react";

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
  }

  return newPostList;
};

const dummyData = async () => {
  await fetch("");
};

const PostContexProvider = ({ children }) => {
  // creating useReducer
  const [postList, postDispatch] = useReducer(postReducer, []);

  const addPost = (postObj) => {
    console.log(postObj);
    const createPostAction = {
      type: "Add_POST",
      payload: {
        id: Date.now(),
        userId: postObj.inputUserId,
        title: postObj.inputPostTitle,
        body: postObj.inputPostBody,
        reactions: postObj.inputReaction,
        tags: postObj.inputTags,
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
    console.log(post);
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
      }}
    >
      {children}
    </PostContex.Provider>
  );
};
export default PostContexProvider;
