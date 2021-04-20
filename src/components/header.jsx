import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const LINKS = [
  { href: "top", src: "home.svg", title: "top" },
  { href: "blog", src: "pencil.svg", title: "blog" },
];

const CATEGORIES = [
  { href: "programming", title: "programming" },
  { href: "travel", title: "travel" },
  { href: "nomal", title: "diary" },
];

const SNSES = [
  { href: "https://twitter.com/cloverlovexxx", src: "twitter.svg" },
  { href: "https://github.com/airiclover", src: "github.svg" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-16 px-3 flex justify-between items-center font-mono font-black">
        <Link href="/">
          <a className="flex">
            <div className="p-3 flex items-center">
              <Image
                src="/img/catface.png"
                alt="headerIcon"
                width={20}
                height={20}
                loading="eager"
                priority
              />
              <div className="pl-2 text-lg">Cat's Soliloquy</div>
            </div>
          </a>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="pt-4 pb-2 pl-3 pr-6 cursor-pointer fixed right-0 focus:outline-none"
        >
          <Image
            src="/img/menu.svg"
            alt="menuIcon"
            width={24}
            height={24}
            loading="eager"
            priority
          />
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="font-mono font-black"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="fixed top-0 right-0 bg-white w-3/5 h-screen ">
          <button
            onClick={() => setIsOpen(false)}
            className="pt-2 pl-3 pr-6 cursor-pointer fixed top-4 right-0 focus:outline-none"
          >
            <Image
              src="/img/cross.svg"
              alt="menuIcon"
              width={24}
              height={24}
              loading="eager"
              priority
            />
          </button>

          <div className="my-20 ml-10 mr-5 focus:outline-none">
            {LINKS.map((link) => (
              <div key={link.title}>
                {/* <Link href={link.href}> */}
                <Link href="/">
                  <a className="flex items-center py-2 my-2">
                    <img
                      src={`/img/${link.src}`}
                      alt={link.src}
                      className="w-7 h-7 inline-block pr-2"
                    />
                    {link.title}
                  </a>
                </Link>
              </div>
            ))}

            {CATEGORIES.map((category) => (
              <Link href="/" key={category.href}>
                <a className="ml-6 text-xs block py-1 my-1">{category.title}</a>
              </Link>
            ))}

            <div className="mt-10">
              {SNSES.map((sns) => (
                <a
                  href={sns.href}
                  key={sns.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3"
                >
                  <Image
                    src={`/img/${sns.src}`}
                    alt={sns.src}
                    width={28}
                    height={28}
                    loading="eager"
                    priority
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
