import React, { useContext } from "react";

import { useRef } from "react";
import { PostContex } from "../Store/Contex";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostContex);
  const navigate = useNavigate();
  const inputUserId = useRef("");
  const inputPostTitle = useRef("");
  const inputPostBody = useRef("");
  const inputReaction = useRef("");
  const inputTags = useRef("");

  const handleAddPost = (event) => {
    event.preventDefault();
    const curObj = {
      inputUserId: inputUserId.current.value,
      inputPostTitle: inputPostTitle.current.value,
      inputPostBody: inputPostBody.current.value,
      inputReaction: inputReaction.current.value,
      inputTags: inputTags.current.value.split(" "),
    };
    inputUserId.current.value = "";
    inputPostTitle.current.value = "";
    inputPostBody.current.value = "";
    inputReaction.current.value = "";
    inputTags.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: curObj.inputUserId,
        title: curObj.inputPostTitle,
        body: curObj.inputPostBody,
        reactions: curObj.inputReaction,
        tags: curObj.inputTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        alert("New Post Added");
        navigate("/");
      });
  };

  return (
    <form className="form-container">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your UserId:
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={inputUserId}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post TiTle:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={inputPostTitle}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Enter Your content:
        </label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          ref={inputPostBody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reaction on your Post:
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={inputReaction}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Reaction on your Post:
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your tags with space"
          ref={inputTags}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(event) => handleAddPost(event)}
      >
        Post
      </button>
    </form>
  );
};

export default CreatePost;
