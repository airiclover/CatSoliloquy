import Link from "next/link";

const LINKS = [
  {
    href: "/",
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 26 26"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "ホーム",
  },
  {
    href: "/blog",
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 26 26"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    title: "ブログ",
  },
  {
    href: "/categories",
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 26 26"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "カテゴリー",
  },
  {
    href: "/tags",
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 26 26"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    title: "タグ一覧",
  },
];

export function NavLinks() {
  return (
    <>
      {LINKS.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="w-1/4 text-center lg:w-24 lg:text-xs">
            {link.src}
            <p>{link.title}</p>
          </a>
        </Link>
      ))}
    </>
  );
}
