import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styles from '../Hero/Hero.module.scss';
import Image from 'next/image';

const WorkCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false); // New state for the second modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false); // New state for the second modal

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  function openModal4() {
    setIsOpen4(true);
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
                          src="https://www.youtube.com/embed/1NNujhfByUk?si=aiCU1KWJmIdnrJgj"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/Yfi39PB-QeA?si=hJPS8M_OUrEGtf33"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/rLwcCKabBRk?si=q9TodqNuqBbzEC0E"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/JKfESyH_AHc?si=7AAiIHjBDPbMuBb-"
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

        <Transition appear show={isOpen2} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                          src="https://www.youtube.com/embed/1NNujhfByUk?si=aiCU1KWJmIdnrJgj"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/Yfi39PB-QeA?si=hJPS8M_OUrEGtf33"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/rLwcCKabBRk?si=q9TodqNuqBbzEC0E"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/JKfESyH_AHc?si=7AAiIHjBDPbMuBb-"
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

        <Transition appear show={isOpen3} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal3}>
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
                          src="https://www.youtube.com/embed/6YPfsE0DY40?si=JYJz47TRFgGE9MWp"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/LHYpqNAR9es?si=k60Jadd0rFc1NKKh"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/_iF46mO4jCE?si=Yc9f5-z-SmbsOk5K"
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

        <Transition appear show={isOpen4} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal4}>
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
                          src="https://www.youtube.com/embed/YDU5FRiRPWI?si=n7tQNkERw427qgl6"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="mb-5 rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/f53ozQ7Am5w?si=T4jo70PwTZ3Da3ue"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <iframe
                          className="rounded-3xl shadow-xl transition duration-500 ease-in-out hover:shadow-2xl"
                          width="853"
                          height="480"
                          src="https://www.youtube.com/embed/h01z_rFqxcs?si=j68XNI_2ZHpRMo2O"
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
              <h2 className="text-9xl md:text-7xl text-purple-800">Promos</h2>
              <div>
                <button onClick={openModal} className={styles.workbutton}>
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
                  src="https://www.youtube.com/embed/1NNujhfByUk?si=aiCU1KWJmIdnrJgj"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-max flex-row items-center justify-center mb-40">
        <div className="h-4/6 w-11/12 rounded-3xl  shadow-xl">
          <div className="m-12 flex flex-col justify-between md:flex-row">
            <div>
              <h2 className="text-9xl md:text-7xl text-purple-800">Reels</h2>
              <div>
                <button onClick={openModal2} className={styles.workbutton}>
                  View All
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-center">
                <Image width="600" height="600" src="/images/reels.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-max flex-row items-center justify-center mb-40">
        <div className="h-4/6 w-11/12 rounded-3xl  bg-slate-50 shadow-xl">
          <div className="m-12 flex flex-col justify-between md:flex-row">
            <div>
              <h2 className="text-9xl md:text-7xl text-purple-800">Youtube</h2>
              <div>
                <button onClick={openModal3} className={styles.workbutton}>
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
                  src="https://www.youtube.com/embed/6YPfsE0DY40?si=JYJz47TRFgGE9MWp"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-max flex-row items-center justify-center mb-40">
        <div className="h-4/6 w-11/12 rounded-3xl  bg-slate-50 shadow-xl">
          <div className="m-12 flex flex-col justify-between md:flex-row">
            <div>
              <h2 className="text-9xl md:text-7xl text-purple-800">Podcasts</h2>
              <div>
                <button onClick={openModal4} className={styles.workbutton}>
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
                  src="https://www.youtube.com/embed/YDU5FRiRPWI?si=n7tQNkERw427qgl6"
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

export default WorkCard;
