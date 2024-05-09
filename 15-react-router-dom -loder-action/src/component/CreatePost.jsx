import React, { useContext } from "react";

import { useRef } from "react";
import { PostContex } from "../Store/Contex";
import { Form, redirect, useNavigate } from "react-router-dom";

// for using actions in react-router

//  1.Make From tag from react-router-dom
//  2. use name attribute in input field
//  3 . Remove SuubmitHaqbdler from Form
//  4

const CreatePost = () => {
  const handleAddPost = (event) => {};

  return (
    <Form className="form-container" method="POST">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your UserId:
        </label>
        <input type="text" name="userId" className="form-control" id="userId" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post TiTle:
        </label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Enter Your content:
        </label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          name="body"
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
          name="reactions"
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
          name="tags"
          placeholder="Enter your tags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function formAction(data) {
  const formData = await data.request.formData();

  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // return post;
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
