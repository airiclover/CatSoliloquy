import Link from "next/link";
import { MainLayout } from "src/layouts/main";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/tag`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Tags(props) {
  const { data } = props;
  const lists = data.list;

  return (
    <>
      <MainLayout>
        <div className="p-6 flex flex-col">
          <h1 className="text-2xl">タグ一覧</h1>
          <ul className="py-4 pl-4">
            {lists.map((list) => (
              <li key={list.tag_id} className="m-1">
                <Link href="/">
                  {/* <Link href={`/categories/${list.contents_type}`}> */}

                  <a className="py-1 px-2 bg-gray-800 text-xs text-white rounded">
                    {list.tag_nm}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </>
  );
}
