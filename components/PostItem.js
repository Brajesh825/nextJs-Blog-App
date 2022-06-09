import postStyles from "../styles/Post.module.css";

const PostItem = ({post}) => {
  return (
    <div className={postStyles.postItem} >
      <h2>{post.content}</h2>
    </div>
  )
}

export default PostItem