"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section
        className="
          max-w-[1400px]
          mx-auto
          px-8
          md:px-16
          py-32
        "
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

              <Link
    href="/"
    className="
      mb-20
      text-[13px]
      tracking-[0.35em]
      opacity-70
      hover:opacity-100
      transition-opacity
      cursor-pointer
    "
  >
    HOME
  </Link>

          {/* Portrait */}

          <img
            src="/images/portrait.jpg"
            alt="Tyler Horton"
            className="
              w-[800px]
              md:w-[540px]
              object-cover
              grayscale
            "
          />

          {/* Title */}

          <p
            className="
              mt-15
              text-[12px]
              md:text-[15px]
              font-display
              tracking-[0.05em]
              opacity-70
            "
          >
            Emmy award winning editor based in NYC. Partner at Uppercut. Lets make something special together.
          </p>

          {/* Links */}

          <div
            className="
              mt-14
              flex
              flex-col
              gap-5
              text-[13px]
              uppercase
              tracking-[0.25em]
            "
          >

            <a
              href="mailto:tylerchorton1@gmail.com"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Personal Email
            </a>

            <a
              href="mailto:tyler@uppercutedit.com"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Uppercut Email
            </a>

            <a
              href="https://instagram.com/tylerchorton"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>

            <a
              href="https://uppercutedit.com"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Uppercut
            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}