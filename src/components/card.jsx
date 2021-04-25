import Image from "next/image";
import Link from "next/link";

export function Card(props) {
  const { data, pass } = props;
  const datas = data.list;

  return (
    <>
      {datas.map((data, index) => (
        <Link href={`/${pass}/${data.slug}`} key={index}>
          <a>
            <div>
              <Image
                // src={data.ext_col_01.url}
                src="/img/1s.jpg"
                alt="blogIMG"
                width={300}
                height={220}
                // width={28}
                // height={28}
                loading="eager"
                priority
                objectFit="cover"
              />
              {/* <img src={data.ext_col_01.url} alt="" className="w-full h-30" /> */}
              <div className="h-24 max-h-24">
                <div className="text-xs text-gray-600 py-2 flex items-center">
                  <p>{data.ymd.replace(/-/g, ".")}</p>
                  <p className="mx-1">|</p>
                  <p className="line-clamp-1 break-words">
                    {data.contents_type_nm}
                  </p>
                </div>
                <h1 className="text-sm font-semibold line-clamp-3 break-words">
                  {data.subject}
                </h1>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export function Card(props) {
//   const { data, pass } = props;
//   const datas = data.list;

//   return (
//     <>
//       {datas.map((data, index) => (
//         <Link href={`/${pass}/${data.slug}`} key={index}>
//           <a>
//             <div>
//               <Image
//                 // src={data.ext_col_01.url}
//                 src="/img/1s.jpg"
//                 alt="blogIMG"
//                 width={300}
//                 height={220}
//                 // width={28}
//                 // height={28}
//                 loading="eager"
//                 priority
//                 objectFit="cover"
//               />
//               {/* <img src={data.ext_col_01.url} alt="" className="w-full h-30" /> */}
//               <div className="h-24 max-h-24">
//                 <div className="text-xs text-gray-600 py-2 flex items-center">
//                   <p>{data.ymd.replace(/-/g, ".")}</p>
//                   <p className="mx-1">|</p>
//                   <p className="line-clamp-1 break-words">
//                     {data.contents_type_nm}
//                   </p>
//                 </div>
//                 <h1 className="text-sm font-semibold line-clamp-3 break-words">
//                   {data.subject}
//                 </h1>
//               </div>
//             </div>
//           </a>
//         </Link>
//       ))}
//     </>
//   );
// }
