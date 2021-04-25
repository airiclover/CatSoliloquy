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
  console.log(paths);

  return {
    paths: [],
    fallback: "blocking",
    //blockingを設定するとデータ未取得時は、SSRのような挙動をする。(データ取得後にHTMLが構築される)
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  console.log(category);

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
  console.log("aaa", data);

  return (
    <MainLayout>
      <BlogLayout>
        {/* 👇ページパスは「categories」ではなく、「blog」に飛ばす。 */}
        <Card pass="blog" data={data} />
      </BlogLayout>
    </MainLayout>
  );
}
