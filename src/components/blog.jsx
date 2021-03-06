import Image from "next/image";
import Link from "next/link";
import { SnsShare } from "src/components/snsShare";

export function Blog(props) {
  const data = props.data;

  const updateYmdhi = data.update_ymdhi;
  const updateYmd = updateYmdhi.slice(0, 10);

  return (
    <div className="sm:bg-gray-100 sm:dark:bg-gray-600">
      <div className=" sm:py-6">
        <main className="pb-4 mx-6 bg-white break-words sm:max-w-screen-sm sm:mx-auto sm:rounded-lg dark:bg-gray-700">
          <Image
            src={data.ext_col_01.url}
            alt={data.slug}
            width={650}
            height={460}
            objectFit="cover"
            className="sm:rounded-t-lg"
          />
          <h1 className="text-2xl font-bold py-3 sm:px-3">{data.subject}</h1>

          <div className="py-2 flex text-xs sm:px-3 sm:text-sm">
            <div className="flex items-center">
              {/* <Image
                src="/img/clock.svg"
                alt="blogIMG"
                width={14}
                height={14}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="pl-1 pr-3">{data.ymd.replace(/-/g, ".")}</p>
            </div>

            {/* 更新があった場合のみ更新日を表示 */}
            {data.inst_ymdhi !== data.update_ymdhi ? (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pl-1">{updateYmd.replace(/-/g, ".")}</p>
              </div>
            ) : null}
          </div>

          <div className="pb-2 text-xs text-gray-400 border-b-2 sm:px-3 sm:text-sm dark:border-gray-500">
            Category:
            <Link href={`/categories/${data.contents_type}`} prefetch={false}>
              <a className="p-1 text-gray-900 font-medium  dark:text-gray-300">
                {data.contents_type_nm}
              </a>
            </Link>
          </div>

          <div
            className="py-10 sm:px-6"
            dangerouslySetInnerHTML={{
              __html: `${data.contents}`,
            }}
          />

          <div className="pb-3">
            <SnsShare url={data.slug} title={data.subject} />
          </div>

          <div className="py-3 flex flex-wrap text-xs text-sm border-t-2 border-b-2 sm:px-3 dark:border-gray-500">
            {data.tags.map((tag) => (
              <Link
                href={`/tags/${tag.tag_id}`}
                key={tag.tag_id}
                prefetch={false}
              >
                <a className="m-1 py-1 px-2 bg-gray-800 text-white rounded  dark:bg-gray-500">
                  {tag.tag_nm}
                </a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
