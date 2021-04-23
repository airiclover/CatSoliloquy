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
    fallback: "blocking", //blockingを設定するとデータ未取得時は、SSRのような挙動をする。(データ取得後にHTMLが構築されるイメージ)
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
    revalidate: 60,
  };
}

export default function BlogDetail(props) {
  const data = props.data.details;

  return (
    <MainLayout>
      <main>
        <h1>{data.subject}</h1>
        <p>{data.ymd}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.contents}`,
          }}
        />
      </main>
    </MainLayout>
  );
}
