import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const LINKS = [
  { href: "top", src: "home.svg", title: "top" },
  { href: "blog", src: "pencil.svg", title: "blog" },
];

const SNSES = [
  { href: "https://twitter.com/cloverlovexxx", src: "twitter.svg" },
  { href: "https://github.com/airiclover", src: "github.svg" },
];

export function Header() {
  return (
    <div className="h-16 px-3 flex justify-between items-center font-mono font-black">
      <div>
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
      </div>

      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="pt-4 pb-2 pl-3 pr-6 cursor-pointer fixed right-0 focus:outline-none">
              <Image
                src="/img/menu.svg"
                alt="menuIcon"
                width={24}
                height={24}
                loading="eager"
                priority
              />
            </Menu.Button>

            {open && (
              <div className="fixed top-0 right-0 bg-white w-3/5 h-screen z-10">
                <Menu.Button className="pt-2 pl-3 pr-6 cursor-pointer fixed top-4 right-0 focus:outline-none">
                  <Image
                    src="/img/cross.svg"
                    alt="menuIcon"
                    width={24}
                    height={24}
                    loading="eager"
                    priority
                  />
                </Menu.Button>
                <Menu.Items className="my-20 ml-10 mr-5 focus:outline-none">
                  {LINKS.map((link) => (
                    <Menu.Item key={link.title}>
                      {/* <Link href={link.href}> */}
                      <Link href="/">
                        <a>
                          <ul>
                            <li className="py-2 my-2">
                              <img
                                src={`/img/${link.src}`}
                                alt={link.src}
                                className="w-7 h-7 inline-block pr-2"
                              />
                              {link.title}
                            </li>
                          </ul>
                        </a>
                      </Link>
                    </Menu.Item>
                  ))}

                  <div className="my-6">
                    {SNSES.map((sns) => (
                      <a
                        href="/"
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
                </Menu.Items>
              </div>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}
