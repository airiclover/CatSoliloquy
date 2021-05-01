import Image from "next/image";
import Link from "next/link";

export function Blog(props) {
  const data = props.data;

  const updateYmdhi = data.update_ymdhi;
  const updateYmd = updateYmdhi.slice(0, 10);

  return (
    <div className="sm:bg-gray-100">
      <div className="sm:py-6">
        <main className="pb-4 mx-6 bg-white break-words sm:max-w-screen-sm sm:mx-auto sm:rounded-lg">
          <Image
            src={data.ext_col_01.url}
            alt={data.slug}
            width={650}
            height={460}
            objectFit="cover"
            className="sm:rounded-t-lg"
          />
          <h1 className="text-2xl font-bold py-3 lg:px-3">{data.subject}</h1>

          <div className="py-2 flex text-xs lg:px-3 lg:text-sm">
            <div className="flex items-center">
              <Image
                src="/img/clock.svg"
                alt="blogIMG"
                width={14}
                height={14}
              />
              <p className="pl-1 pr-3">{data.ymd.replace(/-/g, ".")}</p>
            </div>

            {/* 更新があった場合のみ更新日を表示 */}
            {data.inst_ymdhi !== data.update_ymdhi ? (
              <div className="flex items-center">
                <Image
                  src="/img/refresh.svg"
                  alt="blogIMG"
                  width={14}
                  height={14}
                />
                <p className="pl-1">{updateYmd.replace(/-/g, ".")}</p>
              </div>
            ) : null}
          </div>

          <div className="pb-2 text-xs text-gray-400 border-b-2 lg:px-3 lg:text-sm">
            Category:
            <Link href={`/categories/${data.contents_type}`}>
              <a className="p-1 text-gray-900 font-medium ">
                {data.contents_type_nm}
              </a>
            </Link>
          </div>

          <div
            className="py-6 sm:px-6"
            dangerouslySetInnerHTML={{
              __html: `${data.contents}`,
            }}
          />

          <div className="py-3 flex flex-wrap text-xs text-sm border-t-2 border-b-2">
            {data.tags.map((tag) => (
              <Link href={`/tags/${tag.tag_id}`} key={tag.tag_id}>
                <a className="m-1 py-1 px-2 bg-gray-800 text-white rounded">
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
