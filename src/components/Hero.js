import React from "react";
import Image from "next/image";
import Tokenomix from "@/components/Tokenomic";
import { useSpring, animated } from "react-spring";
import ImageRowWithSocials from "./test";

const HeroSection = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("TBD");
    alert("Text copied to clipboard!");
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <>
      <div
        className="bg-cover bg-center bg-red-700 bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/')" }}
      >
        {/* Overlay with Text */}
        <animated.div
          style={fadeIn}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-red-700 bg-opacity-20 p-4 md:p-8 overflow-hidden"
        >
          <div className="flex items-center justify-center ">
            <Image
              src="/2.png"
              alt="Hoppy"
              width={80}
              height={80}
              className="mr-4"
            />
            <h1 className="text-[50px] sm:text-[120px] md:text-[100px] lg:text-[180px] text-shadow text-white font-permanentMarker font-extralight text-center">
              $HOPPY
            </h1>
          </div>

          <div className="mt-0 p-2 flex flex-col md:flex-row items-center justify-center font-hanaleiFill text-[#9fa91b] rounded text-sm md:text-2xl font-bold w-full max-w-3xl">
            <span className="text-center md:text-center">
              {" "}
              is on a mission to take over the meme universe. The time has come
              for Hoppy to show his greatness.
            </span>
          </div>

          <div className="flex justify-center p-8">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 font-hanaleiFill text-white bg-black rounded font-bold hover:bg-gray-700 transition-colors duration-300">
                Buy now
              </button>
            </a>
          </div>

          {/* <Tokenomix/> //replace with video */}
          <div className="flex justify-center space-x-4 md:space-x-8 pt-4">
            <a
              href="https://www.dextools.io/app/en/tron/pair-explorer/TR3K2eGn8RnRTAsbLPATRmLRr9Yf7mKZoZ?t=1724260085772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/dextools.jpeg"
                alt="Dextools"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://x.com/Hoppy_Tron?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
            </a>
            <a
              href="https://t.me/HOPPY_TRON"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg.png" alt="Telegram" width={40} height={40} />
            </a>
          </div>
          <ImageRowWithSocials key="images" />
        </animated.div>
      </div>
    </>
  );
};

export default HeroSection;
