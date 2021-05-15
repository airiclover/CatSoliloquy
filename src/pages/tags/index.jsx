import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "src/layouts/main";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/rcms-api/1/tag`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
}

export default function Tags(props) {
  const { data } = props;
  const lists = data.list;

  return (
    <>
      <Head>
        <title>タグ一覧</title>
      </Head>

      <MainLayout>
        <div className="min-h-full py-3 px-6 mx-auto lg:max-w-screen-md">
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
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <h1 className="pl-1 text-xl font-semibold">タグ</h1>
          </div>

          <div className="py-3">
            <div className="py-3 px-2 border-b-2 dark:border-gray-500">
              <div className="flex items-center mb-1">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="ml-1">プログラミング</h2>
              </div>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 5 && (
                      <Link href={`/tags/${list.tag_id}`}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded inline-block dark:bg-gray-500">
                          {list.tag_nm}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-3 px-2 border-b-2 dark:border-gray-500">
              <div className="flex items-center mb-1">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="ml-1">旅行</h2>
              </div>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 6 && (
                      <Link href={`/tags/${list.tag_id}`} prefetch={false}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded inline-block dark:bg-gray-500">
                          {list.tag_nm}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-3 px-2 border-b-2 dark:border-gray-500">
              <div className="flex items-center mb-1">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <h2 className="ml-1">ダイアリー</h2>
              </div>
              <ul className="flex flex-wrap">
                {lists.map((list) => (
                  <li key={list.tag_id}>
                    {list.tag_category_id === 7 && (
                      <Link href={`/tags/${list.tag_id}`}>
                        <a className="m-1 py-1 px-2 bg-gray-800 text-xs text-white rounded inline-block dark:bg-gray-500">
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
