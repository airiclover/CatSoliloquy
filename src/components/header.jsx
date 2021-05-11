import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "src/components/navLinks";
import { ThemaButton } from "src/components/themaButton";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex px-6">
        <div className="w-full h-14 bg-white text-gray-900 font-mono font-black flex justify-between lg:h-16 lg:flex dark:bg-gray-700 dark:text-white">
          <Link href="/">
            <a className="h-14 flex inline-flex items-center lg:h-16">
              <Image
                src={
                  theme === "light"
                    ? "/img/catface.svg"
                    : "/img/catfaceWhite.svg"
                }
                alt="headerIcon"
                width={20}
                height={20}
                loading="eager"
                priority
              />
              <div className="pl-2 text-lg">Cat's Soliloquy</div>
            </a>
          </Link>

          <div className="invisible w-0 lg:w-96 lg:visible lg:h-16 lg:flex lg:items-center">
            <NavLinks />
          </div>
        </div>
        <div className="flex">
          <ThemaButton theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
}
