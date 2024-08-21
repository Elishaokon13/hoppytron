// components/InfoComponent.js

import React from 'react';
import { useTrail, animated } from 'react-spring';

const InfoComponent = () => {
  const steps = [
    { number: 1, title: "CREATE A WALLET", description: "Download TronLink or your wallet of choice from the app store or Google Play store. Desktop users, download the Chrome extension by visiting the TronLink website." },
    { number: 2, title: "GET SOME TRX", description: "Have TRX in your wallet to switch to $HOPPY. If you don't have any TRX, you can buy TRX from an exchange or cross-chain swap and send it to your wallet." },
    { number: 3, title: "GO TO SunSwap", description: "Connect to SunSwap. Go to SunSwap.io in your browser inside your TronLink app. Connect your wallet. Paste the $HOPPY token address into SunSwap and confirm the swap. When TronLink prompts you for a wallet signature, sign it." },
    { number: 4, title: "SWAP", description: "Switch TRX for $HOPPY." }
  ];

  const trail = useTrail(steps.length, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <div className="bg-purple-900 font-hanaleiFill text-white py-10 px-6 h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold mb-6">How to Buy $HOPPY</h2>
          <div className="space-y-8 font-permanentMarker">
            {trail.map((props, index) => (
              <animated.div key={index} style={props} className="flex items-start space-x-4">
                <div className="text-2xl font-bold">{steps[index].number}</div>
                <div>
                  <h3 className="text-xl font-bold">{steps[index].title}</h3>
                  <p>{steps[index].description}</p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/dj.jpeg"
            alt="HOPPY Info Graphic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;