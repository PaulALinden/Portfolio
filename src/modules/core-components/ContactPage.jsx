import React from 'react';
import SocialMediaBar from '../small-assets/SocialMediaBar';
import { motion } from "framer-motion";

const ContactPage = ({language}) => {
  // Class name variables
  const mainClassName =
      "flex justify-center items-center flex-col h-96 space-y-8";
  const sectionClassName =
      "border-2 p-4 text-center border-slate-400 dark:border-white space-y-2";
  const headingClassName =
      "text-3xl";
  const paragraphClassName =
      "text-xl";
  const linkClassName =
      "underline";
  const headerText={
    swe:"Kontakta mig!",
    eng:"Let's Chat!"
  }
  const anchorText = {
    swe:"Skicka ett e-postmeddelande ",
    eng:"Send me an email "
  }
  const paragraphText = {
    swe:"för att diskutera möjligheter eller anslut med mig på LinkedIn.",
    eng:"to discuss opportunities or connect with me on LinkedIn"
  }

  return (
      <motion.main
          className={mainClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
      >
        <section className={sectionClassName}>
          <h1 className={headingClassName}>{headerText[language]}</h1>
          <p className={paragraphClassName}>
            <a className={linkClassName} href="mailto:linden.91.pl@gmail.com">
              {anchorText[language]}
            </a>
            {paragraphText[language]}
          </p>
        </section>

        <SocialMediaBar />
      </motion.main>
  );
};

export default ContactPage;

