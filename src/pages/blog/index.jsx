import Head from "next/head";
import { Card } from "src/components/card";
import { BlogLayout } from "src/layouts/blog";
import { MainLayout } from "src/layouts/main";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Blog(props) {
  const { data } = props;

  return (
    <>
      <Head>
        <title>Cat's Soliloquy</title>
      </Head>

      <MainLayout>
        <BlogLayout>
          <Card pass="blog" data={data} />
        </BlogLayout>
      </MainLayout>
    </>
  );
}
