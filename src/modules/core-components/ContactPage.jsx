import React from 'react';
import SocialMediaBar from '../small-assets/SocialMediaBar';
import {motion} from "framer-motion";
const ContactPage = () => {
  return (
    <motion.main
        className="flex justify-center items-center flex-col h-96 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >

      <section className="border-2 p-4 text-center border-slate-400 dark:border-white space-y-2">

        <h1 className="text-3xl">Let's Chat!</h1>
        <p className="text-xl"><a className="underline" href="mailto:linden.91.pl@gmail.com">Send me an email</a> to discuss opportunities or connect with me on LinkedIn</p>

      </section>

      <SocialMediaBar />
      
    </motion.main>
  );
};
export default ContactPage;
