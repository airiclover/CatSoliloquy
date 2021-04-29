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

  return (
    <>
      <MainLayout>
        <div className="py-3 px-6">
          <div className="py-3 px-2 bg-gray-200 flex rounded">
            <Image src="/img/tag.svg" alt="mapIMG" width={28} height={28} />
            <h1 className="pl-1 text-2xl">タグ</h1>
          </div>

          <div className="py-3">
            <div className="py-3 px-2 border-b-2">
              <div className="flex items-center mb-1">
                <Image
                  src="/img/programming.svg"
                  alt="programmingIMG"
                  width={16}
                  height={16}
                />
                <h2 className="ml-1">プログラミング</h2>
              </div>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 5 && (
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

            <div className="py-3 px-2 border-b-2">
              <div className="flex items-center mb-1">
                <Image
                  src="/img/programming.svg"
                  alt="programmingIMG"
                  width={16}
                  height={16}
                />
                <h2 className="ml-1">旅行</h2>
              </div>
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

            <div className="py-3 px-2 border-b-2">
              <div className="flex items-center mb-1">
                <Image
                  src="/img/programming.svg"
                  alt="programmingIMG"
                  width={16}
                  height={16}
                />
                <h2 className="ml-1">雑記</h2>
              </div>
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
