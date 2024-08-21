import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageRowWithSocials from './test';
import { useTrail, animated } from 'react-spring';

const AboutSection = () => {
  const initialCount = 1624000;
  const [counter, setCounter] = useState(initialCount);
  const [power, setPower] = useState(1); // Start power from 1 to continue from initial count

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(initialCount + (2 ** 4) * power);
      setPower((prevPower) => prevPower + 1);
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [power]);

  const items = [
    <h1 key="title" className="text-3xl sm:text-5xl font-permanentMarker mt-10 font-bold mb-8">What is $HOPPY?</h1>,
    <p key="description" className="max-w-4xl font-hanaleiFill mx-auto text-lg leading-relaxed mb-8">
      Tron enthusiasts are embracing HOPPY, moving away from the frog meme trend. Since its inception, HOPPY has become a beloved icon within the crypto community, known for his laid-back and wise demeanor. Created by Matt Furie, this character finally makes its debut on the Tron blockchain. Join our vibrant community on Telegram and enjoy the ride with HOPPY!

      <br/>Together, we're unstoppable
    </p>,
    <ImageRowWithSocials key="images" />
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <>
      <div className="bg-cover bg-center bg-[#cb22f6] bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="relative min-h-screen w-full text-purple-950 p-8">
          <div className="relative text-center">
            {trail.map((props, index) => (
              <animated.div key={index} style={props}>
                {items[index]}
              </animated.div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutSection;