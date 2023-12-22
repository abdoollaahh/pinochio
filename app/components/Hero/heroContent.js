import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const HeroContent = () => {
  const [text, setText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText((prevText) => !prevText);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className={styles.services}>
      <div className=" flex h-screen flex-col p-2 md:h-screen md:flex-row lg:flex-row">
        <div className="flex h-screen flex-col md:w-1/2">
          <div className="flex basis-1/3 flex-col justify-center border p-16 md:justify-end">
            <div className="text-center text-9xl md:text-start md:text-5xl">
              Learn more about our offerings here
            </div>
            <div className="flex flex-row justify-center md:justify-end">
              <Link href="/services">
                <button className={styles.button}>All Services</button>
              </Link>
            </div>
          </div>
          <div className="basis-2/3 bg-slate-100">
            <Image
              className="h-full w-full object-cover"
              src="/images/videoEditing.jpeg"
              alt="Picture of the author"
              width={500}
              height={300}
              blurDataURL="/images/services.jpeg"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex h-screen flex-row flex-wrap md:w-1/2">
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                VIDEO
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 bg-clip-text font-bold text-transparent">
                  EDITING
                </span>
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              ''
            ) : (
              <span className="text-center">
                SOCIAL MEDIA
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  GROWTH
                </span>
              </span>
            )}
          </div>
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              ''
            ) : (
              <span className="text-center">
                SOCIAL MEDIA
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  MANAGEMENT
                </span>
              </span>
            )}
          </div>
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  MOTION
                </span>
                <br />
                GRAPHICS
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                CONTENT
                <br />
                <span className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text font-bold text-transparent">
                  CREATION
                </span>
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="flex w-1/2 h-1/3 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              ''
            ) : (
              <span className="text-center">
                CHANNEL
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  OPTIMIZATION
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
