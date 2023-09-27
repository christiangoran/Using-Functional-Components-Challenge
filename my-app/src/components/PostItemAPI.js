import React from "react";
import css from "./css/PostItem.module.css";

function PostItemAPI(props) {
  return props.savedPosts.map((posts) => {
    return (
      <div key={posts.id} className={css.SearchItem}>
        <p>Artwork type: {posts.type} </p>
        <p>Artist: {posts.user}</p>
        <img src={posts.webformatURL} alt="random" />
        <p>Tags: {posts.tags}</p>
      </div>
    );
  });
}

export default PostItemAPI;
