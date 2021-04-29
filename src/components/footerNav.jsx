import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/", src: "home.svg", title: "ホーム" },
  { href: "/blog", src: "diary.svg", title: "ブログ" },
  { href: "/categories", src: "map.svg", title: "カテゴリー" },
  { href: "/tags", src: "tag.svg", title: "タグ一覧" },
];

export function FooterNav() {
  return (
    <div>
      <div className="w-full h-14 px-6 flex items-center bg-white text-gray-900 text-xs border-t bottom-0 fixed">
        {LINKS.map((link, index) => (
          <Link href={link.href} key={index}>
            <a className="w-1/4 text-center">
              <Image
                src={`/img/${link.src}`}
                alt={link.title}
                width={22}
                height={22}
              />
              <p>{link.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
