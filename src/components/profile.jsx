import Image from "next/image";

const SNSES = [
  { href: "https://twitter.com/cloverlovexxx", src: "twitter.svg" },
  { href: "https://github.com/airiclover", src: "github.svg" },
];

export function Profile() {
  return (
    <div className="py-10 px-6 bg-gray-200 text-center">
      <Image
        src="/img/clover.jpeg"
        alt="blogIMG"
        width={120}
        height={120}
        objectFit="cover"
        loading="eager"
        priority
        className="rounded-full"
      />

      <div className="my-2">
        <div className="text-3xl font-semibold tracking-widest ">airi</div>
        {SNSES.map((sns) => (
          <a
            href={sns.href}
            key={sns.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1"
          >
            <Image
              src={`/img/${sns.src}`}
              alt={sns.src}
              width={24}
              height={24}
              loading="eager"
              priority
            />
          </a>
        ))}
      </div>

      <p className="mx-auto w-5/6 text-sm text-left">
        あああああああああああああああああああああああああああああああああ。
        <br />
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
        <br />
        あああああああああああああああああああああああああああああああ。
      </p>
    </div>
  );
}
