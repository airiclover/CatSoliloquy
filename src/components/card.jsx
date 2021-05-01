import Image from "next/image";
import Link from "next/link";

export function Card(props) {
  const { data, pass } = props;
  const datas = data.list;

  return (
    <>
      {datas.map((data, index) => (
        <Link href={`/${pass}/${data.slug}`} key={index}>
          <a className="sm:mx-auto sm:max-w-xs">
            <Image
              src={data.ext_col_01.url}
              alt={data.slug}
              width={320}
              height={240}
              objectFit="cover"
            />
            <div className="h-24 max-h-24">
              <div className="text-xs text-gray-600 py-2 flex items-center text-sm">
                <p>{data.ymd.replace(/-/g, ".")}</p>
                <p className="mx-1">|</p>
                <p className="line-clamp-1 break-words">
                  {data.contents_type_nm}
                </p>
              </div>
              <h1 className="text-sm font-semibold line-clamp-3 break-words lg:text-base">
                {data.subject}
              </h1>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}
