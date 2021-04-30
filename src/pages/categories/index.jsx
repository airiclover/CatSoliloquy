import Image from "next/image";
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
      <MainLayout>
        <div className="py-3 px-6">
          <div className="py-3 px-2 bg-gray-200 flex rounded">
            <Image
              src="/img/map.svg"
              alt="mapIMG"
              width={28}
              height={28}
              loading="eager" //画像がチラつくため追加
              priority //画像がチラつくため追加
            />
            <h1 className="pl-1 text-xl font-semibold">カテゴリー</h1>
          </div>

          <ul>
            {lists.map((list) => (
              <li
                key={list.topics_category_id}
                className="flex items-center border-b-2"
              >
                <Link href={`/categories/${list.contents_type}`}>
                  <a className="w-full py-5 px-4 flex">
                    <Image
                      src={`/img/${list.category_nm}.svg`}
                      alt={list.category_nm}
                      width={16}
                      height={16}
                      loading="eager"
                      priority
                    />
                    <p className="ml-2 mr-1">{list.category_nm}</p>
                    <p>({list.cnt})</p>
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
