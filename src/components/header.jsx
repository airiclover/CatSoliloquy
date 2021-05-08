import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "src/components/navLinks";
import { ThemaButton } from "src/components/themaButton";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
                loading="eager" //ページ遷移時にローディング開始(プリロード)される。
                priority //"eager"は通常パフォーマンスが低下するため、priority=trueにする事で画像が適切に読み込まれる。
              />
              <div className="pl-2 text-lg">Cat's Soliloquy</div>
            </a>
          </Link>

          <div className="invisible lg:visible lg:h-16 lg:flex lg:items-center">
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
