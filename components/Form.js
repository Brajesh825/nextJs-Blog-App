import postStyles from "../styles/Post.module.css";
import { useState, useEffect } from "react";

const Form = ({reRender,setReRender}) => {
  const [post, setPost] = useState("");
  const [wordCount, setWordCount] = useState(0);

  function WordCount(str) {
    return str.trim().split(/\s+/).length;
  }

  function handleChange(event) {
    const count = WordCount(event.target.value);
    setWordCount(count);
    if (wordCount < 120) {
      setPost(event.target.value);
    }
  }

  async function addPost(event) {
    const data = {};
    data.content = post;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3000/api/posts",
      requestOptions
    );
    const result = await response.json();
    setPost("");
    setWordCount(0);
    setReRender(++reRender)
  }


  return (<>
    <div className={postStyles.container}>
      <textarea
        type="text"
        name="post"
        rows={5}
        onChange={handleChange}
        value={post}
      />
      <div className={postStyles.submit}>
        <h3>{wordCount}/120</h3>
        <button onClick={addPost}>Send</button>
      </div>
    </div>
    </>
  );
};

export default Form;
