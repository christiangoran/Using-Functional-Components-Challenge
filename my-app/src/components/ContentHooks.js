import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setPosts(savedPosts);
    }, 1500);
  }, []);

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    });
    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="search"
            id="searchInput"
            placeholder="By Author"
            onChange={handleChange}
          ></input>
          <h4>posts found:{posts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
