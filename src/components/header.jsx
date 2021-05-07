import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "src/components/navLinks";

export function Header() {
  return (
    <>
      <div className="w-full h-14 px-6 bg-white text-gray-900 font-mono font-black lg:h-16 lg:flex lg:justify-between dark:bg-gray-700 dark:text-white">
        <Link href="/">
          <a className="h-14 flex inline-flex items-center lg:h-16">
            <Image
              src="/img/catface.png"
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
    </>
  );
}
