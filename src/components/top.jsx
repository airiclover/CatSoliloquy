import Image from "next/image";

export function Top() {
  return (
    <>
      <div className="py-8 px-1 mb-12 text-center bg-gray-200">
        <p className="text-5xl font-extrabold tracking-tight text-left">
          Done is better
        </p>
        <div className="pt-4 ">
          <div className="-mb-5 pr-2">
            <Image
              src="/img/catwalk.svg"
              alt="walkCatIcon"
              width={38}
              height={38}
            />
          </div>
          {/* 👇setTimeOutで猫の画像切り替える処理を追加！！！👇 */}
          <Image
            src="/img/globe.svg"
            alt="globeIcon"
            width={130}
            height={130}
            className="animate-spin-slow"
          />
        </div>
        <p className="text-5xl font-extrabold tracking-tight text-right">
          than perfect.
        </p>
      </div>
    </>
  );
}
