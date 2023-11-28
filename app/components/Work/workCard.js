import styles from "./Work.module.scss";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const WorkCard = () => {
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
                  <Dialog.Panel className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-medium leading-6 text-gray-900"
                    >
                      Trailers
                    </Dialog.Title>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="m-8 flex flex-col">
          <div onClick={openModal} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className="text-9xl md:text-6xl">Trailers</h2>
              <p>Click to view More</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className="text-9xl md:text-6xl">Youtube</h2>
              <p>Click to view More</p>
            </div>
          </div>
        </div>
        <div className="m-8 flex flex-col">
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className="text-9xl md:text-6xl">Reels</h2>
              <p>Click to view More</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className="text-9xl md:text-6xl">Facebook Ads</h2>
              <p>Click to view More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
