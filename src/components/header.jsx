import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const LINKS = [
  { href: "top", title: "top" },
  { href: "blog", title: "blog" },
  { href: "sns", title: "sns" },
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
              {open ? (
                <Image
                  src="/img/cross.svg"
                  alt="menuIcon"
                  width={24}
                  height={24}
                  loading="eager"
                  priority
                />
              ) : (
                <Image
                  src="/img/menu.svg"
                  alt="menuIcon"
                  width={24}
                  height={24}
                  loading="eager"
                  priority
                />
              )}
            </Menu.Button>

            <Menu.Items className="bg-gray-50 w-3/6 h-screen py-4 z-10 text-center  fixed top-14 right-0  focus:outline-none lg:hidden">
              {LINKS.map((link) => (
                <Menu.Item key={link.title}>
                  {/* <Link href={link.href}> */}
                  <Link href="/">
                    <a>
                      <ul>
                        <li className="py-3">{link.title}</li>
                      </ul>
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
