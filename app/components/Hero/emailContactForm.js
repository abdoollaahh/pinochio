import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../Hero/Hero.module.scss';

const EmailContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setIsSubmitting(true); // disable the button

    emailjs
      .sendForm(
        'service_y4pyf7k',
        'template_buh969c',
        form.current,
        'e6JfrBzPrZRN1bI1N'
      )
      .then(
        (result) => {
          window.alert('Your message has been sent successfully');
          setIsSubmitting(false); // re-enable the button
        },
        (error) => {
          // show the user an error
          setIsSubmitting(false); // re-enable the button
        }
      );
  };

  return (
    <div className="bg-[url('/images/contactBG.png')] bg-cover">
      <div className="h-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-screen md:h-screen md:w-1/3 md:mx-20 flex flex-col justify-center items-center">
            <h1 className="text-[20rem] md:text-9xl mb-10 font-bold">
              LET'S TALK
            </h1>
            <p className="text-8xl md:text-4xl text-center">
              If you are interested in getting your videos
              <br /> produced or just want to get a quote, contact us through
              <br /> here and we will get back to you.
            </p>
          </div>
          <div className="flex w-full md:w-2/3 flex-col md:flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="m-20 w-10/12 rounded-3xl bg-white/60 p-28  shadow-xl">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-row w-full">
                      <div className="w-1/2 pr-2">
                        <label for="name" className="mb-2 block font-medium">
                          First Name
                        </label>
                        <input
                          placeholder="Enter your first name"
                          type="text"
                          name="user_first_name"
                          id="user_first_name"
                          className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="w-1/2 pl-2">
                        <label for="name" className="mb-2 block font-medium">
                          Last Name
                        </label>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          name="user_last_name"
                          id="user_last_name"
                          className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label for="email" class="mb-2 block font-medium ">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                        placeholder="name@penochiostudios.com"
                        required
                      />
                    </div>
                    <p>What Platform you want videos for</p>

                    <ul className="flex flex-row flex-wrap w-full gap-6 grid-cols-3 my-4">
                      <li>
                        <input
                          type="checkbox"
                          id="facebook"
                          value="facebook"
                          class="hidden peer"
                          name="option"
                        />
                        <label
                          htmlFor="facebook"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-blue-500"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512">
                              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                            </svg>
                            <div class="md:text-2xl">Facebook</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="linkedin"
                          value="linkedin"
                          class="hidden peer"
                          name="option"
                        />
                        <label
                          htmlFor="linkedin"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-sky-500"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512">
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                            <div class="md:text-2xl">LinkedIn</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="tiktok"
                          value="tiktok"
                          class="hidden peer"
                          name="option"
                        />
                        <label
                          htmlFor="tiktok"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-black"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512">
                              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                            </svg>
                            <div class="md:text-2xl">Tiktok</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="youtube"
                          value="youtube"
                          class="hidden peer"
                          name="option"
                        />
                        <label
                          htmlFor="youtube"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-red-500"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="25"
                              viewBox="0 0 448 512">
                              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                            <div class="md:text-2xl">Youtube</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="instagram"
                          value="instagram"
                          class="hidden peer"
                          required=""
                          name="option"
                        />
                        <label
                          htmlFor="instagram"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-orange-700"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512">
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                            <div class="md:text-2xl">Instagram</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="twitter"
                          value="twitter"
                          class="hidden peer"
                          name="option"
                        />
                        <label
                          htmlFor="twitter"
                          className="inline-flex justify-center w-100 p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer   peer-checked:border-purple-300 hover:text-gray-600  peer-checked:text-gray-600 hover:shadow-md transition ease-in duration-150">
                          <div class="flex flex-row justify-center items-center">
                            <svg
                              className="mr-2 text-black"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512">
                              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                            </svg>
                            <div class="md:text-2xl">Twitter / X</div>
                          </div>
                        </label>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <div className="m-1 mb-6">
                        <label for="message" class="mb-2 block font-medium">
                          Brief of the content you want us to produce
                        </label>
                        <textarea
                          name="content_brief"
                          id="message"
                          rows="4"
                          class="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Leave a comment..."></textarea>
                      </div>
                      <div className="m-1 mb-6">
                        <label for="message" class="mb-2 block font-medium">
                          Please mention your social media account handles
                        </label>
                        <textarea
                          name="social_media_handles"
                          id="message"
                          rows="4"
                          class="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Leave a comment..."></textarea>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="dropdown"
                        className="mb-2 mt-10 block font-medium">
                        Your budget for the first month
                      </label>
                      <select
                        className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                        id="dropdown"
                        name="dropdown">
                        <option value="500-1000">$ 500- $ 1000</option>
                        <option value="1000-2000">$ 1000- $ 2000</option>
                        <option value="2000-5000">$ 2000- $ 5000</option>
                        <option value="5000+">$ 5000+</option>
                        <option value="Not Sure">I'm not sure</option>
                      </select>
                    </div>
                    <div className="m-4 flex flex-row justify-center">
                      <input
                        className={styles.button}
                        type="submit"
                        value="Send"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContactForm;
