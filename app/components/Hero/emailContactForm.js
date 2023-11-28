import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_seo856f",
        "template_dqt69xf",
        form.current,
        "ie1mgdblJGdFu_hmZ"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
  };

  return (
    <div>
      <div className="flex w-screen flex-col md:flex-col">
        <div className="flex flex-row items-center justify-center">
          <div className="m-20 w-10/12 rounded-3xl bg-white/10 p-28  shadow-2xl backdrop-blur-xl">
            <h1 className="text-center">LET'S TALK</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col justify-start">
                <div className="mb-6">
                  <label for="name" className="mb-2 block font-medium">
                    Your Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <div className="mb-6">
                    <label for="email" class="mb-2 block font-medium ">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="name@penochiostudios.com"
                      required
                    />
                  </div>
                  <div className="m-1 mb-6">
                    <label for="message" class="mb-2 block font-medium">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio1"
                    name="radio"
                    value="Radio 1"
                  />
                  <label htmlFor="radio1">Option 1</label>
                </div>
                <div className="mb-10">
                  <input
                    type="radio"
                    id="radio2"
                    name="radio"
                    value="Radio 2"
                  />
                  <label htmlFor="radio2">Option 2</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="option1"
                    name="option"
                    value="Option 1"
                  />
                  <label htmlFor="option1">Option 1</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="option2"
                    name="option"
                    value="Option 2"
                  />
                  <label htmlFor="option2">Option 2</label>
                </div>
                <div className="mb-10">
                  <input
                    type="checkbox"
                    id="option3"
                    name="option"
                    value="Option 3"
                  />
                  <label htmlFor="option3">Option 3</label>
                </div>
                <div>
                  <label htmlFor="dropdown" className="mb-2 block font-medium">
                    Your budget for the first month
                  </label>
                  <select
                    className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                    id="dropdown"
                    name="dropdown"
                  >
                    <option value="Option 1">$ 500- $ 1000</option>
                    <option value="Option 2">$ 1000- $ 2000</option>
                    <option value="Option 3">$ 2000- $ 5000</option>
                    <option value="Option 4">$ 5000</option>
                  </select>
                </div>
                <div className="m-4 flex flex-row justify-center">
                  <input
                    className="w-1/12 rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContactForm;
