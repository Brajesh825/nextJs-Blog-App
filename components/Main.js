import { useState, useEffect } from "react";

import Form from "./Form";
import Post from "./Post";

const Main = () => {
  const [reRender, setReRender] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/api/posts");
      response = await response.json();
      setPosts(response.data);
    }
    fetchMyAPI();
  }, [reRender]);

  return (
    <>
      <Form reRender={reRender} setReRender={setReRender} />
      <Post posts={posts} />
    </>
  );
};

export default Main;
