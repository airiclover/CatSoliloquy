import Image from "next/image";
import Link from "next/link";

export function Blog(props) {
  const data = props.data;
  console.log(data);

  const updateYmdhi = data.update_ymdhi;
  const updateYmd = updateYmdhi.slice(0, 10);

  return (
    <div className="m-6">
      <main>
        <Image
          src="/img/1s.jpg"
          alt="blogIMG"
          width={500}
          height={350}
          loading="eager"
          priority
          objectFit="cover"
        />
        {/* <img src={data.ext_col_01.url} alt="" className="w-full h-18" /> */}

        <h1 className="text-2xl font-bold py-3 ">{data.subject}</h1>
        <div className="py-2 flex items-center">
          <Image
            src="/img/clock.svg"
            alt="blogIMG"
            width={14}
            height={14}
            loading="eager"
            priority
          />
          <p className="text-sm pl-1 pr-3">{data.ymd}</p>
          <Image
            src="/img/refresh.svg"
            alt="blogIMG"
            width={14}
            height={14}
            loading="eager"
            priority
          />
          <p className="text-sm pl-1">{updateYmd}</p>
        </div>
        <div className="pb-2 text-xs text-gray-500 border-b-2">
          Category:
          <span className="pl-1 text-gray-900">{data.contents_type_nm}</span>
        </div>

        <div
          className="pt-5"
          dangerouslySetInnerHTML={{
            __html: `${data.contents}`,
          }}
        />

        <div className="flex text-xs">
          {data.tags.map((tag) => (
            <Link href="/" key={tag.tag_id}>
              <a className="m-1 py-1 px-2 bg-gray-800 text-white rounded">
                {tag.tag_nm}
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}