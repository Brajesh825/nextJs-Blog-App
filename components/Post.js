import PostItem from "./PostItem";
import postStyles from "../styles/Post.module.css";

const Post = ({ posts }) => {
  return (
    <div className={postStyles.postList}>
      {posts.map((post) => (
        <a href={'/posts/'+post._id}>
          <PostItem key={post._id} post={post} />
         </a>
      ))}
    </div>
  );
};

export default Post;
