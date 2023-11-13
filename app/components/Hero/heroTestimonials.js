import { Carousel } from "antd";
import React from "react";
import styles from "./Hero.module.scss";

const data = [
  {
    index: 1,
    name: "Haider",
    text: "Pinochio Is Awesome",
    position: "CEO at Pinochio",
  },
  {
    index: 2,
    name: "Abdullah",
    text: "Pinochio is the best",
    position: "CTO at Pinocchio",
  },
  {
    index: 3,
    name: "Abdul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni soluta dolorem voluptatum, reprehenderit natus nisi repudiandae itaque consequatur repellat?",
  },
];

const HeroTestimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h1 className="m-8 text-center text-9xl md:text-6xl">Testimonials</h1>
      <p className="my-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut
        nostrum aperiam fugiat repudiandae tempora fuga adipisci perferendis,
        quibusdam obcaecati.
      </p>
      <Carousel autoplay autoplaySpeed={5000} dots={false}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-center ">
              <section className="m-12 h-auto w-1/2 rounded-3xl border bg-white p-4 shadow-xl">
                <div className="mx-auto my-8 px-4 py-8 text-center">
                  <figure className="mx-auto max-w-screen-md">
                    <svg
                      className="mx-auto mb-3 h-12 text-gray-400"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="text-9xl font-medium text-gray-900 md:text-4xl">
                        {item.text}
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-3">
                      <img
                        className="h-16 w-16 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500">
                        <div className="pr-3 text-8xl font-medium text-gray-900 md:text-3xl">
                          {item.name}
                        </div>
                        <div className="pl-3 text-7xl font-light text-gray-500 md:text-lg">
                          {item.position}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex flex-row justify-center">
        <button className={styles.button}>View All</button>
      </div>
    </div>
  );
};

export default HeroTestimonials;
