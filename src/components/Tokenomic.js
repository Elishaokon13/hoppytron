import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Sponsors() {
  return (
    <div className=" font-hanaleiFill py-4 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-4" >
        {/* <WordPullUp
          className="text-2xl font-bold tracking-[-0.02em] text-white dark:text-black md:text-6xl md:leading-[5rem]"
          words="Our Amazing Partners"
        /> */}
        <h2 className="text-center font-bricolage text-4xl md:text-6xl font-semibold leading-8 text-white">
          Coming soon on:
        </h2>
        <div className="w-full mt-[20px]">
          <Marquee  >
            <div className="flex space-x-[40px]" >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/mexc.png"
              alt="Mexc"
              width={158}
              height={48}
            />
            {/* <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/gate.png"
              alt="Reform"
              width={158}
              height={48}
            /> */}
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/poloniex.png"
              alt="Poloniex"
              width={158}
              height={48}
            />
            {/* <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/okx.svg"
              alt="OKX"
              width={158}
              height={48}
            /> */}
            
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
