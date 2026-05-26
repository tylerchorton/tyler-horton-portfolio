"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  director: string;
  thumbnail: string;
  hoverVideo: string;
  vimeo: string;
  featured?: boolean;
  aspectRatio?: "wide" | "classic";
  gridSpan?: "normal" | "medium" | "wide";
}
export default function ProjectCard({
  title,
  director,
  thumbnail,
  hoverVideo,
  vimeo,
  featured = false,
  aspectRatio = "wide",
  gridSpan = "normal",
}: ProjectCardProps) {
 
  const [hovered,setHovered] = useState(false);
  const [open,setOpen] = useState(false);


  return (
<motion.div

initial={{
  opacity: 0,
  y: 24,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
  amount: 0.15,
}}

transition={{
  duration: 0.7,
  ease: "easeOut",
}}

whileHover={
  open
    ? {}
    : {
        scale:1.015,
      }
}

animate={
  open
    ? { scale:1 }
    : {}
}

  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}


className={`
relative



${
  gridSpan === "wide"
    ? "md:col-span-3"
    : gridSpan === "medium"
    ? "md:col-span-2"
    : "md:col-span-2"
}
`}


>
    

      {/* B&W Thumbnail */}

{/* Media Container */}

<button
  onClick={() => setOpen(true)}
  className="
    block
    w-full
    text-left
  "
>

<div
  className={`
    relative
    overflow-hidden
    bg-black

    ${
      gridSpan === "wide"
        ? "md:col-span-2"
        : ""
    }

    ${
      aspectRatio === "classic"
        ? "aspect-[4/3]"
        : "aspect-[16/9]"
    }
  `}
>
  {/* Thumbnail */}

  <img
    src={thumbnail}
    alt={title}
    className={`
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-all
      duration-700

      transform-gpu
      will-change-transform

      ${hovered ? "grayscale-0 opacity-0" : "grayscale opacity-100"}
    `}
  />

  {/* Hover Video */}

  <video
    autoPlay
    muted
    loop
    playsInline
    disablePictureInPicture
    disableRemotePlayback
    className={`
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-opacity
      duration-700

      transform-gpu
      will-change-transform

      ${hovered ? "opacity-100" : "opacity-0"}
    `}
  >
    <source
      src={hoverVideo}
      type="video/mp4"
    />
  </video>

</div>

</button>

      <div className="mt-3">

        <h3
          className="
            font-sans
            uppercase
            text-sm
            tracking-[0.18em]
          "
        >
          {title}
        </h3>

        <motion.p
          animate={{
  opacity: hovered ? 1 : 0,
  y: hovered ? 0 : 9,
}}
          className="
            mt-1
            text-[11px]
            uppercase
            tracking-[0.22em]
            opacity-70
          "
        >
          Director — {director}
        </motion.p>

      </div>

   {open && (
  
  <div
  onClick={() => setOpen(false)}
  className="
    fixed
    inset-0
    z-[999]
    bg-black
    flex
    items-center
    justify-center
  "
>

    <button
      onClick={() => setOpen(false)}
      className="
        absolute
        top-6
        right-6
        z-20
        text-white/60
        hover:text-white
        tracking-[0.25em]
        text-xs
      "
    >
      CLOSE
    </button>

    <div
  onClick={(e) => e.stopPropagation()}
  className="
    relative
    w-[96vw]
    max-w-[1800px]
  "
>

<div
  className="
    mb-5
    flex
    items-end
    justify-between
    text-white
  "
>

<div>

<h2
  className="
    text-sm
    md:text-base
    uppercase
    tracking-[0.22em]
  "
>
  {title}
</h2>

<p
  className="
    mt-2
    text-[11px]
    uppercase
    tracking-[0.18em]
    opacity-60
  "
>
  Director — {director}
</p>

</div>

</div>

<div className="relative aspect-video">

<iframe
  src={`${vimeo}?autoplay=1&autopause=0&title=0&byline=0&portrait=0`}
  className="
    absolute
    inset-0
    h-full
    w-full
  "
  allow="
    autoplay;
    fullscreen;
    picture-in-picture
  "
  allowFullScreen
/>

</div>

</div>

  </div>
)}

    </motion.div>
  );
}