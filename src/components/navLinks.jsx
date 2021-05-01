import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/", src: "home.svg", title: "ホーム" },
  { href: "/blog", src: "diary.svg", title: "ブログ" },
  { href: "/categories", src: "map.svg", title: "カテゴリー" },
  { href: "/tags", src: "tag.svg", title: "タグ一覧" },
];

export function NavLinks() {
  return (
    <>
      {LINKS.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="w-1/4 text-center lg:w-24 lg:text-xs">
            <Image
              src={`/img/${link.src}`}
              alt={link.title}
              width={22}
              height={22}
              loading="eager" //画像がチラつくため追加
              priority //画像がチラつくため追加
            />
            <p>{link.title}</p>
          </a>
        </Link>
      ))}
    </>
  );
}
