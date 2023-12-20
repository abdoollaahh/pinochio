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
          <div className="w-full h-screen md:h-screen md:w-1/3 mx-20 flex flex-col justify-center items-center">
            <h2 className="text-9xl mb-10 font-bold">LET'S TALK</h2>
            <p className="text-4xl text-center">
              If you are interested in getting your videos produced or just want
              to get a quote, contact us through here and we will get back to
              you.
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
                    <div>
                      <input
                        type="checkbox"
                        id="linkedin"
                        name="option"
                        value="linkedin"
                      />
                      <label className="mx-4" htmlFor="option1">
                        LinkedIn
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="facebook"
                        name="option"
                        value="facebook"
                      />
                      <label className="mx-4" htmlFor="option1">
                        Facebook
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tiktok"
                        name="option"
                        value="tiktok"
                      />
                      <label className="mx-4" htmlFor="option1">
                        Tiktok
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="youtube"
                        name="option"
                        value="youtube"
                      />
                      <label className="mx-4" htmlFor="option1">
                        Youtube
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="instagram"
                        name="option"
                        value="instagram"
                      />
                      <label className="mx-4" htmlFor="option1">
                        Instagram
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="twitter"
                        name="option"
                        value="twitter"
                      />
                      <label className="mx-4" htmlFor="option2">
                        X/Twitter
                      </label>
                    </div>

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
