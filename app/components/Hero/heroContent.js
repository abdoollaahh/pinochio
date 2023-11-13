import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const HeroContent = () => {
  const [text, setText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText((prevText) => !prevText); // toggle the text state
    }, 5000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [text]);

  return (
    <div className={styles.services}>
      <div className=" flex h-screen flex-col p-2 md:h-screen md:flex-row lg:flex-row">
        <div className="flex h-screen flex-col md:w-1/2">
          <div className="basis-2/3 bg-slate-100">
            <Image
              className="h-full w-full object-cover"
              src="/images/services.jpeg"
              alt="Picture of the author"
              width={500} // replace with your desired width
              height={300}
              blurDataURL="/images/services.jpeg"
              placeholder="blur"
            />
          </div>
          <div className="flex basis-1/3 flex-col justify-center border p-16 md:justify-end">
            <div className="text-center text-9xl md:text-start md:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              <br />
              consequuntur dolor illo minus dolores id assumenda debitis illum{" "}
              <br />
              voluptatibus hic.
            </div>
            <div className="flex flex-row justify-center md:justify-end">
              <button className={styles.button}>All Services</button>
            </div>
          </div>
        </div>
        <div className="flex h-screen flex-row flex-wrap md:w-1/2">
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                VIDEO
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 bg-clip-text font-bold text-transparent">
                  PRODUCTION
                </span>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? "" : "FILMING"}
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              ""
            ) : (
              <span className="text-center">
                MOTION
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  GRAPHICS
                </span>
              </span>
            )}
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  CONCEPT
                </span>
                <br />
                DESIGN
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              <span className="text-center">
                PRE-
                <br />
                <span className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text font-bold text-transparent">
                  VISUALIZATION
                </span>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center border text-9xl md:text-5xl">
            {text ? (
              ""
            ) : (
              <span className="text-center">
                POST
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                  PRODUCTION
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
