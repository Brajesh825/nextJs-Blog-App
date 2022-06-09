import postStyles from "../styles/Post.module.css";
import { useState } from "react";

const Form = () => {
  const [post, setPost] = useState("");
  const [wordCount, setWordCount] = useState(0);

  function WordCount(str) { 
    return str.trim().split(/\s+/).length;
  }

  function handleChange(event) {
    const count =  WordCount(event.target.value);
    setWordCount(count);
    if(wordCount< 120){
        setPost(event.target.value);
    }
  }
  return (
    <div className={postStyles.container}>
      <textarea
        type="text"
        name="post"
        rows={5}
        onChange={handleChange}
        value={post}
      />
      <div className={postStyles.submit} >
        <h3>{wordCount}/120</h3>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Form;
