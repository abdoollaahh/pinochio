import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ItemTalentCard = ({ title, description, image }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative col-span-2 m-4 overflow-hidden rounded-md  transition hover:shadow-2xl hover:shadow-slate-600">
      <motion.div
        layout
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="absolute left-0 top-0 flex  h-full w-full cursor-pointer flex-col  justify-end gap-4  p-8 font-semibold text-white transition-all duration-200 hover:backdrop-grayscale-[0.4] "
      >
        <LayoutGroup>
          <motion.h2 className="text-9xl md:text-5xl" layout="position">
            {title}
          </motion.h2>
          <AnimatePresence mode="wait">
            {hover && (
              <motion.div
                className="hidden text-3xl font-light lg:block xl:text-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                exit={{ y: 50, opacity: 0, transition: { duration: 0.05 } }}
              >
                {description}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
      <Image
        src={image}
        width={360}
        height={480}
        placeholder="blur"
        alt="item"
        blurDataURL="https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
  );
};

export default ItemTalentCard;
