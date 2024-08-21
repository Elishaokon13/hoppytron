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
    <h1 key="title" className="text-3xl sm:text-5xl font-permanentMarker mt-[200px] font-bold mb-8">What is $HOPPY?</h1>,
    <p key="description" className="max-w-4xl text-[#9fa91b] font-hanaleiFill mx-auto text-lg leading-relaxed mb-8">
      Hoppy is an anthropomorphic frog character based on the famous comic book «The Night Riders», published in 2012 by artist and illustrator Matt Furie. Today, this is one of the few characters of Matt Furie that can truly be considered unique.<br/>

Hoppy began his memetic revolution through countless iterations of memes cementing his iconic status, mastering every form with his unparalleled power. With its roots in internet culture, Hoppy infuses humour and meme magic into the world, fostering a movement that unites and makes everyone happy
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
      <div className="bg-cover bg-center bg-red-700 bg-no-repeat " style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="relative w-full text-white p-8">
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