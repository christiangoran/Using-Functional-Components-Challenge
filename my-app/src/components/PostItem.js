import React from "react";
import css from "./css/PostItem.module.css";

function PostItem(props) {
  return props.savedPosts.map((posts) => {
    return (
      <div key={posts.title} className={css.SearchItem}>
        <p>{posts.title} </p>
        <p>{posts.name}</p>
        <img src={posts.image} alt={props.title} />
        <p>{posts.description}</p>
      </div>
    );
  });
}

export default PostItem;
