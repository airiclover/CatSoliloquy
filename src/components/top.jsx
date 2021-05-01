import Image from "next/image";

export function Top() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="py-8 px-1 mb-12 text-center bg-gray-200 sm:px-20 lg:px-72 lg:py-20">
          <p className="text-5xl font-extrabold tracking-tight text-left">
            Done is better
          </p>
          <div className="pt-4">
            <div className="-mb-5 pr-2">
              <Image
                src={`/img/catwalk.svg`}
                alt="walkCatIcon"
                width={38}
                height={38}
                loading="eager" //ページ遷移時にローディング開始(プリロード)される。
                priority //"eager"は通常パフォーマンスが低下するため、priority=trueにする事で画像が適切に読み込まれる。
              />
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
            <Image
              src="/img/globe.svg"
              alt="globeIcon"
              width={130}
              height={130}
              loading="eager"
              priority
              // className="animate-spin-slow"
            />
          </div>
          <p className="text-5xl font-extrabold tracking-tight text-right">
            than perfect.
          </p>
        </div>
      </div>
    </>
  );
}
