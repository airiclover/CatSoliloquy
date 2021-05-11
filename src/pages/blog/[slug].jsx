import Head from "next/head";
import { Blog } from "src/components/blog";
import { MainLayout } from "src/layouts/main";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();
  const lists = data.list;

  const paths = lists.map((list) => {
    return {
      params: {
        slug: list.slug,
      },
    };
  });

  return {
    paths: [],
    fallback: "blocking",
    //blockingを設定するとデータ未取得時は、SSRのような挙動をする。(データ取得後にHTMLが構築される)
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog/${slug}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
}

export default function BlogDetail(props) {
  const data = props.data.details;

  return (
    <>
      <Head>
        <title>{data.subject}</title>
      </Head>

      <MainLayout>
        {data ? <Blog data={data} /> : <div>404だよ！！！</div>}
      </MainLayout>
    </>
  );
}
