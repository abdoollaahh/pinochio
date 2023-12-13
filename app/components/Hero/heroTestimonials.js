import { useState, Fragment } from 'react';
import styles from './Hero.module.scss';
import { Dialog, Transition } from '@headlessui/react';

const data = [
  {
    index: 1,
    name: 'Haider',
    text: 'Penochio Is Awesome',
    position: 'CEO at Penochio',
  },
  {
    index: 2,
    name: 'Abdullah',
    text: 'Penochio is the best',
    position: 'CTO at Pinocchio',
  },
  {
    index: 3,
    name: 'Haseeb',
    text: 'Penochio changed my life',
    position: 'COO at Penochio',
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
              leaveTo="opacity-0">
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
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-fit overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-medium leading-6 text-gray-900">
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
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/QR2whWpTXbY?si=UzKOjdAAJZCIc1xA"
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
      <div className="flex h-max flex-row items-center justify-center mb-40">
        <div className="h-4/6 w-11/12 rounded-3xl  bg-slate-50 shadow-xl">
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
        </div>
      </div>
    </div>
  );
};

export default HeroTestimonials;
