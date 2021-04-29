import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="w-full h-14 px-6 bg-white font-mono font-black">
        <Link href="/">
          <a className="h-14 flex inline-flex items-center">
            <Image
              src="/img/catface.png"
              alt="headerIcon"
              width={20}
              height={20}
            />
            <div className="pl-2 text-lg">Cat's Soliloquy</div>
          </a>
        </Link>
      </div>
    </>
  );
}
