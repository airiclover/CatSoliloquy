import Head from "next/head";
import { Card } from "src/components/card";
import { BlogLayout } from "src/layouts/blog";
import { MainLayout } from "src/layouts/main";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/category`);
  const lists = await res.json();

  const paths = lists.map((list) => {
    return {
      params: {
        category: list.category_id,
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
  const category = params.category;

  const res = await fetch(
    `${process.env.BASE_URL}/rcms-api/1/category?contents_type=${category}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Category(props) {
  const data = props.data[0];

  return (
    <>
      <Head>
        {data ? (
          <title>{data.category.category_nm}</title>
        ) : (
          <title>Cat's Soliloquy</title>
        )}
      </Head>

      <MainLayout>
        <BlogLayout>
          {/* 👇ページパスは「categories」ではなく、「blog」に飛ばす。 */}
          {data ? (
            <Card pass="blog" data={data} />
          ) : (
            <div>まだ投稿がありません。</div>
          )}
        </BlogLayout>
      </MainLayout>
    </>
  );
}
