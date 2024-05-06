import React, { useContext } from "react";

import { PostContex } from "../Store/Contex";
import { MdDeleteOutline } from "react-icons/md";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContex);
  console.log(post);
  return (
    <div className="card post-css">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post)}
          >
            <MdDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-primary tags">
            {tags}
          </span>
        ))}
        <div className="alert alert-secondary alert-css" role="alert">
          No of People Reacted :{post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
