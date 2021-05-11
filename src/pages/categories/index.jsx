import Head from "next/head";
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
    revalidate: 60 * 60,
  };
}

export default function Categories(props) {
  const { data } = props;
  const lists = data.list;

  return (
    <>
      <Head>
        <title>カテゴリー</title>
      </Head>

      <MainLayout>
        <div className="py-3 px-6 mx-auto lg:max-w-screen-md">
          <div className="py-3 px-2 bg-gray-200 flex rounded dark:bg-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <h1 className="pl-1 text-xl font-semibold">カテゴリー</h1>
          </div>

          <ul>
            {lists.map((list) => (
              <li
                key={list.topics_category_id}
                className="flex items-center border-b-2 dark:border-gray-500"
              >
                <Link href={`/categories/${list.contents_type}`}>
                  <a className="w-full py-5 px-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={list.ext_col_01} //svgのデータをAPIに付与済
                      />
                    </svg>
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
