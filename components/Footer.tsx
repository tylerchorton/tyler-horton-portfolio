"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-full
        bg-black
        px-8
        md:px-16
        pt-0
        pb-8
      "
    >
      <div
        className="
          max-w-[1700px]
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >

        <div
          className="
            flex
            gap-6
            text-sm
            tracking-[0.22em]
          "
        >
          <a
            href="https://instagram.com/tylerchorton"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            IG
          </a>

          <a
            href="https://uppercutedit.com"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            UPPERCUT
          </a>

          <a
            href="mailto:tyler@uppercutedit.com"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            EMAIL
          </a>
        </div>

        <p
          className="
            text-[11px]
            tracking-[0.28em]
            uppercase
            opacity-40
          "
        >
          © Tyler Horton 2026
        </p>

      </div>

    </motion.footer>
  );
}