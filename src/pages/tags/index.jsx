import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "src/layouts/main";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/tag`);
  const data = await res.json();

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
  console.log(lists);

  return (
    <>
      <MainLayout>
        <div className="py-3 px-6">
          <div className="flex">
            <Image
              src="/img/tag.svg"
              alt="tagIMG"
              width={28}
              height={28}
              loading="eager"
              priority
            />
            <h1 className="text-2xl">タグ一覧</h1>
          </div>

          <div className="p-3">
            <div className="py-3 border-b-2">
              <h2>プログラミング</h2>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 5 && (
                      <Link href={`/tags/${list.tag_id}`}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded  inline-block">
                          {list.tag_nm}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-3 border-b-2">
              <h2>旅行</h2>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 6 && (
                      <Link href={`/tags/${list.tag_id}`}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded inline-block">
                          {list.tag_nm}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-3 border-b-2">
              <h2>ダイアリー</h2>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 7 && (
                      <Link href={`/tags/${list.tag_id}`}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded inline-block">
                          {list.tag_nm}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
