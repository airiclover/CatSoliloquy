import Image from "next/image";
import { useTheme } from "next-themes";

export function Top() {
  const { theme } = useTheme();

  return (
    <>
      <div className="py-8 px-1 mb-12 text-center bg-gray-200 sm:px-20 lg:px-72 lg:py-20 dark:bg-gray-500">
        <p className="text-5xl font-extrabold tracking-tight text-left">
          Done is better
        </p>
        <div className="pt-4">
          <div className="-mb-5 pr-2">
            {theme === "light" ? (
              <Image
                src="/img/catwalk.svg"
                alt="stopCatIcon"
                width={38}
                height={38}
                loading="eager"
                priority
              />
            ) : (
              <Image
                src="/img/catwalkWhite.svg"
                alt="stopCatIcon"
                width={38}
                height={38}
                loading="eager"
                priority
              />
            )}
            {/* 👇setTimeOutで猫の画像切り替える処理を追加する？👇 */}
            {/* <Image
              src={`/img/catstop.svg`}
              alt="stopCatIcon"
              width={38}
              height={38}
              loading="eager"
              priority
            /> */}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-5xl font-extrabold tracking-tight text-right">
          than perfect.
        </p>
      </div>
    </>
  );
}
