import Link from "next/link";
import { MainLayout } from "src/layouts/main";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/categorylist`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Category(props) {
  const { data } = props;
  const lists = data.list;

  return (
    <>
      {console.log(lists)}
      <MainLayout>
        <div className="flex flex-col">
          <h1>カテゴリー一覧</h1>
          <ul>
            {lists.map((list) => (
              <li key={list.topics_category_id} className="flex items-center">
                <Link href={`/category/${list.contents_type}`}>
                  <a className="m-1 p-2 border-b border-black">
                    <p>{list.category_nm}</p>
                  </a>
                </Link>
                <p>({list.cnt})</p>
              </li>
            ))}
          </ul>
        </div>
        {/* <Card pass="category" data={props.data} /> */}
      </MainLayout>
    </>
  );
}
