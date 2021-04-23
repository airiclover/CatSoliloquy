import { MainLayout } from "src/layouts/main";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog`);
  const data = await res.json();
  const lists = data.list;
  console.log(lists);

  const paths = lists.map((list) => {
    return {
      params: {
        id: list.topics_id,
      },
    };
  });
  console.log(paths);

  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;

  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/blog/${id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
}

export default function BlogDetail(props) {
  const data = props.data.details;
  console.log(data);

  return (
    <MainLayout>
      <div className="p-20">
        {data.subject}
        <br />
        {data.ymd}
        <br />
        {data.contents}
      </div>
    </MainLayout>
  );
}
