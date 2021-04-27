import { Card } from "src/components/card";
import { BlogLayout } from "src/layouts/blog";
import { MainLayout } from "src/layouts/main";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/tag`);
  const taglists = await res.json();
  const lists = taglists.list;

  const paths = lists.map((list) => {
    return {
      params: {
        tag: list.tag_id,
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
  const tagId = params.tag;

  const res = await fetch(
    `${process.env.BASE_URL}/rcms-api/1/tagsearch?tag_id=${tagId}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Tag(props) {
  const data = props.data;
  console.log(data);

  return (
    <MainLayout>
      <BlogLayout>
        <Card pass="blog" data={data} />
      </BlogLayout>
    </MainLayout>
  );
}
