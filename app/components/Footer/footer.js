import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 m-4 rounded-lg bg-white shadow">
      <div className="mx-auto w-full p-4 md:py-8">
        <div className="flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <span className="self-center whitespace-nowrap text-8xl font-semibold md:text-4xl">
              Pinochio Studios
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-7xl font-medium text-gray-500 md:text-2xl">
            <li>
              <a href="#" className="mx-8 hover:text-black md:mx-8">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mx-8 hover:text-black md:mx-8">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mx-8 hover:text-black md:mx-8">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="mx-8 hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-center text-6xl text-gray-500 md:text-start md:text-xl ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Pinochio Studios™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
