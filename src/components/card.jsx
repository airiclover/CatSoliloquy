import Link from "next/link";

export function Card() {
  return (
    <Link href="/">
      <a>
        <div>
          <img src="/img/clover.jpeg" alt="headerIcon" />
          <div className="h-24 max-h-24">
            <p className="text-xs py-2 ">2021.4.18</p>
            <h1 className="text-sm font-semibold line-clamp-3">
              クローバー可愛いクローバー可愛いクローバー可愛いクローバー可愛い
            </h1>
          </div>
        </div>
      </a>
    </Link>
  );
}
