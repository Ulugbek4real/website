import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({
  isContactHidden,
  setIsContactHidden,
  enableBodyScroll,
}) => {
  console;
  const [message, setMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    setMessage(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2u5udh2",
        "template_cra0afs",
        form.current,
        "6oB41hvHrB4JvpvUK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  setTimeout(() => {
    setMessage(false);
  }, 3000);
  return (
    <>
      {" "}
      <div
        onClick={() => {
          setIsContactHidden(true);
          //  enableBodyScroll(document)
        }}
        className={`${
          !isContactHidden ? "block" : "hidden"
        }   backdrop-blur-sm bg-black/50 fixed top-0 left-0  w-full h-full z-10 `}
      ></div>
      <div
        className={`${
          !isContactHidden ? "bottom-0" : "-bottom-full"
        } transition-all duration-300 fixed left-0  z-50  w-full  bg-white dark:bg-dark2`}
      >
        <div className="form-container max-w-xl mx-auto my-0 h-full">
          <div className="form-box flex flex-col gap-10 px-6 py-8 h-full">
            <div className="contact-text ">
              <h2 className="font-bold tracking-wide mb-2 text-2xl ">
                Reach out anytime!👋
              </h2>
              <p className="sm:text-base text-sm  font-light leading-6 tracking-wide text-stone-600 dark:text-neutral-400 sm:w-96 ">
                Have any questions, feedback or want to say hi? Fill the form,
                or email me whenever convenient.
              </p>
            </div>
            <form
              ref={form}
              className="flex flex-col gap-4"
              onSubmit={sendEmail}
            >
              <div className="relative name-input">
                <label
                  className="tex-base font-light text-stone-500 tracking-wide absolute -top-4 left-3 p-1 bg-white  dark:bg-dark2 "
                  htmlFor="user_name"
                >
                  Name*
                </label>
                <input
                  className="h-12 border border-neutral-300 w-full rounded-md p-4 box-border hover:border-neutral-500 text-dark1 font-normal dark:text-neutral-200   dark:bg-dark2  dark:border-neutral-500 focus:outline-none focus:border-link-border dark:focus:border-link-border-dark dark:hover:border-neutral-100"
                  type="text"
                  name="user_name"
                  required
                ></input>
              </div>
              <div className="relative email-input">
                <label
                  className="tex-md font-light text-stone-500 tracking-wide absolute -top-4 left-3 p-1 bg-white  dark:bg-dark2 "
                  htmlFor="user_email"
                >
                  Email*
                </label>
                <input
                  className="h-12 border border-neutral-300 w-full rounded-md p-4 box-border hover:border-neutral-500 text-dark1 font-normal dark:text-neutral-200   dark:bg-dark2 dark:border-neutral-500 focus:outline-none focus:border-link-border dark:focus:border-link-border-dark dark:hover:border-neutral-100"
                  type="email"
                  name="user_email"
                  required
                ></input>
              </div>
              <div className="relative message-input">
                <label
                  className="tex-md font-light text-stone-500 tracking-wide absolute -top-4 left-3 p-1 bg-white  dark:bg-dark2 "
                  htmlFor="message"
                >
                  Message*
                </label>
                <textarea
                  className=" resize-none h-24 border border-neutral-300 rounded-md w-full p-4  dark:bg-dark2 dark:border-neutral-500  box-border hover:border-neutral-500 text-dark1 font-normal dark:text-neutral-200 focus:outline-none focus:border-link-border dark:focus:border-link-border-dark dark:hover:border-neutral-100"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                className="h-10 dark:bg-neutral-300 dark:text-dark1 bg-dark1 text-neutral-200 rounded-md text-base font-light hover:bg-violet-900 dark:hover:bg-dark-yellow"
                type="submit"
              >
                Send
              </button>
              {message && (
                <span className="text-green-500">
                  Thanks, I'll reply ASAP :)
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
