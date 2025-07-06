import { motion } from 'framer-motion';
import React, {ChangeEvent, FormEvent, useRef, useState} from 'react'
import {styles} from "../styles";
import {slideIn} from "../utils/motion";
import {send, sendHover} from "../assets";
import emailjs from '@emailjs/browser';
import {SectionWrapper} from "../hoc";

const ContactContent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e : ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleChangeArea = (e : ChangeEvent<HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Julian',
                from_email: form.email,
                to_email: 'julianedelgado@hotmail.com',
                message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
              setLoading(false);
              alert('Thank you. I will get back to you as soon as possible.');

              setForm({
                name: '',
                email: '',
                message: '',
              });
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert('Something went wrong. Please try again.');
            }
        );
  };

  return (
      <div
          className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-jet p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-6 font-poppins">
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Your Name</span>
              <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Your Email</span>
              <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
              <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChangeArea}
                  placeholder="What's your message?"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
              />
            </label>

            <button
                type="submit"
                className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-32 sm:h-12
            w-28 h-11 rounded-[10px] bg-night
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out"
                onMouseOver={() => {
                  document
                      .querySelector('.contact-btn')
                      ?.setAttribute('src', sendHover);
                }}
                onMouseOut={() => {
                  document.querySelector('.contact-btn')?.setAttribute('src', send);
                }}>
              {loading ? 'Sending' : 'Send'}
              <img
                  src={send}
                  alt="send"
                  className="contact-btn sm:w-6 sm:h-6
              w-5 h-5 object-contain"
              />
            </button>
          </form>
        </motion.div>
      </div>
  );
};

const Contact = () => {
  return <SectionWrapper idName="contact" Component={ContactContent}/>;
}
export default Contact