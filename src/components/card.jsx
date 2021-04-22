import Link from "next/link";

export function Card(props) {
  const { data } = props;
  const lists = data.list;
  console.log(lists);

  return (
    <>
      {lists.map((list, index) => (
        <Link href="/" key={index}>
          <a>
            <div>
              <img src="/img/clover.jpeg" alt="headerIcon" />
              <div className="h-24 max-h-24">
                <div className="text-xs text-gray-600 py-2 flex">
                  {/* <p>2021.4.18</p> */}
                  <p>{list.ymd}</p>
                  <p className="mx-1.5">|</p>
                  <p className="line-clamp-1 break-words">Programming</p>
                </div>
                <h1 className="text-sm font-semibold line-clamp-3 break-words">
                  {list.subject}
                </h1>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}
