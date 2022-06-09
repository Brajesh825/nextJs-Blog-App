import Head from "next/head";
import Main from "../components/Main";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Main/>
      </div>
  );
}

