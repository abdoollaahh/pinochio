import { Carousel } from "antd";
import { useState, Fragment } from "react";
import styles from "./Hero.module.scss";
import { Dialog, Transition } from "@headlessui/react";

const data = [
  {
    index: 1,
    name: "Haider",
    text: "Penochio Is Awesome",
    position: "CEO at Penochio",
  },
  {
    index: 2,
    name: "Abdullah",
    text: "Penochio is the best",
    position: "CTO at Pinocchio",
  },
  {
    index: 3,
    name: "Haseeb",
    text: "Penochio changed my life",
    position: "COO at Penochio",
  },
];

const HeroTestimonials = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-fit overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-medium leading-6 text-gray-900"
                    >
                      <div className="flex flex-col justify-center">
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/vUJOlTvgkBQ?si=ewE_10nwTbIDyGRv"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/svj-hHR8lu8?si=YOaiRe5lu11dYCZA"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
                    </Dialog.Title>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="flex h-screen flex-row items-center justify-center">
        <div className="h-5/6 w-11/12 rounded-3xl  bg-slate-50 shadow-xl">
          <div className="m-12 flex flex-col justify-between md:flex-row">
            <div>
              <h2 className="text-9xl md:text-7xl">Testimonials</h2>
              <p className="mt-10 text-4xl">
                Stories from Our Clients Who Transformed Their Vision with Us
              </p>
              <div>
                <button onClick={openModal} className={styles.button}>
                  View All
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-center">
                <iframe
                  className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/vUJOlTvgkBQ?si=ewE_10nwTbIDyGRv"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          </div>
          <div>
            <Carousel autoplay autoplaySpeed={5000} dots={false}>
              {data.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-center ">
                    <section className="m-12 h-auto w-2/6 rounded-3xl border bg-white p-4 shadow-xl">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTestimonials;
