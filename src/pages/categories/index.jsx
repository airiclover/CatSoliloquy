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

export default function Categories(props) {
  const { data } = props;
  const lists = data.list;

  return (
    <>
      {console.log(lists)}
      <MainLayout>
        <div className="p-6 flex flex-col">
          <h1 className="text-2xl">カテゴリー一覧</h1>
          <ul className="py-4 pl-4">
            {lists.map((list) => (
              <li
                key={list.topics_category_id}
                className="p-2 flex items-center"
              >
                <Link href={`/categories/${list.contents_type}`}>
                  <a className="border-b border-black">
                    <p>{list.category_nm}</p>
                  </a>
                </Link>
                <p>({list.cnt})</p>
              </li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </>
  );
}
