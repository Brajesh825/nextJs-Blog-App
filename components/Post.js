import PostItem from "./PostItem"
import postStyles from "../styles/Post.module.css";

const Post = ({ posts }) => {
  return (
    <div className={postStyles.postList}>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Post;
