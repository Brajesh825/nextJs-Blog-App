import Link from "next/link";
import { useRouter } from "next/router";
import postStyles from "../../../styles/Post.module.css";

const Article = ({ article }) => {
  const router = useRouter();
  article = article.data[0];
  return (
    <>
    <div className={postStyles.item}>
    <h3>{article.content} </h3>
      <br />
      <Link href="/">Go Back</Link>
    </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000" + `/api/posts/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};


export default Article;
