"use client";

import { motion } from "framer-motion";
import ProjectGrid from "@/components/ProjectGrid";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main className="bg-black text-white">

      <section
        className="
          relative
          h-screen
          overflow-hidden
        "
      >

        {/* Background Video */}

        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.42 }}
          transition={{
            duration: 1.6,
            delay: 0.6,
          }}
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            grayscale
          "
        >
          <source
            src="/splash/hero-loop.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* Grain */}

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "url('/textures/grain.png')",
          }}
        />

        {/* Black Wash */}

<div className="absolute inset-0 bg-black/45" />

{/* Bottom Fade */}

<div
  className="
    absolute
    bottom-0
    left-0
    right-0
    h-72
    bg-gradient-to-b
    from-transparent
    to-black
    pointer-events-none
    z-[5]
  "
/>

{/* Content */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            items-center
            justify-center
            pt-8
            md:pt-16
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >

            <div className="flex flex-col items-center">

              <h1
                className="
                  text-6xl
                  md:text-8xl
                  uppercase
                  font-display
                  tracking-[0.08em]
                  text-center
                "
              >
                <div className="leading-[0.95]">
                  Tyler
                  <br />
                  Horton
                </div>
              </h1>

              <p
                className="
                  mt-5
                  text-[30px]
                  uppercase
                  tracking-[0.30em]
                  opacity-75
                "
              >
                Editor
              </p>

            </div>

          </motion.div>

          <motion.nav
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1.1,
    duration: 1,
  }}
  className="
    mt-30
    flex
    flex-col
    items-center
    gap-4
    text-[13px]
    tracking-[0.35em]
  "
>

<button
  onClick={() => {
    document
      .getElementById("work")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    cursor-pointer
    opacity-70
    hover:opacity-100
    transition-opacity
  "
>
  selected work
</button>

<Link
  href="/about"
  className="
    cursor-pointer
    opacity-70
    hover:opacity-100
    transition-opacity
  "
>
  contact
</Link>

</motion.nav>

  <motion.button
  onClick={() =>
    document
      .getElementById("work")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  initial={{ opacity: 0 }}
  animate={{
    opacity: 0.55,
    y: [0, 8, 0],
  }}
  transition={{
    opacity: {
      delay: 1.6,
      duration: 1,
    },
    y: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  }}
  className="
    mt-8
    cursor-pointer
    text-white/50
    hover:text-white
    transition-colors
    text-4xl
  "
>
  ↓
</motion.button>

        </div>

      </section>

     <div id="work">
    <ProjectGrid />
    </div>

    <Footer />

    </main>

  );

}