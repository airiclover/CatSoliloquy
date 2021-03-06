import Image from "next/image";
import { useTheme } from "next-themes";

const SNSES = [
  {
    name: "twitter",
    href: "https://twitter.com/cloverlovexxx",
    src: "twitter.svg",
    darksrc: "twitterWhite.svg",
  },
  {
    name: "github",
    href: "https://github.com/airiclover",
    src: "github.svg",
    darksrc: "githubWhite.svg",
  },
];

export function Profile() {
  const { theme } = useTheme();

  return (
    <div className="py-10 px-6 bg-gray-200 text-center dark:bg-gray-500">
      <Image
        src="/img/clover.jpeg"
        alt="blogIMG"
        width={120}
        height={120}
        objectFit="cover"
        className="rounded-full"
      />

      <div className="my-2">
        <div className="text-3xl font-bold tracking-wider">airi</div>
        <div>
          {SNSES.map((sns) => (
            <a
              key={sns.name}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-1"
            >
              {theme === "light" ? (
                <Image
                  src={`/img/${sns.src}`}
                  alt={sns.src}
                  width={28}
                  height={28}
                />
              ) : (
                <Image
                  src={`/img/${sns.darksrc}`}
                  alt={sns.src}
                  width={28}
                  height={28}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto w-5/6 text-sm text-left sm:max-w-xs">
        フロントエンド学習者です。プログラミングの学習記録や趣味について気まぐれに書いています。
        <br />
        猫が大好き。趣味は海外旅行です。
        <br />
        ご連絡はTwitterDMにてお願い致します。
      </p>
    </div>
  );
}
