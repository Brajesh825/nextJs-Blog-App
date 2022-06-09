import { server } from "../config";
import Head from "next/head";
import Form from "../components/Form";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Form/>
      </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(server+"/api/articles");
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

