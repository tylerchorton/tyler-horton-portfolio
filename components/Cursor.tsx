"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function Cursor() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x,{
    stiffness:300,
    damping:30,
  });

  const springY = useSpring(y,{
    stiffness:300,
    damping:30,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      x.set(e.clientX);
      y.set(e.clientY);

    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, [x, y]);

  return (

    <motion.div

      style={{
        left: springX,
        top: springY,
      }}

      className="
        fixed
        z-[999]
        pointer-events-none

        w-20
        h-20

        rounded-full
        border
        border-white/25

        flex
        items-center
        justify-center

        text-[10px]
        tracking-[0.25em]
        uppercase

        text-white/70

        mix-blend-difference

        -translate-x-1/2
        -translate-y-1/2
      "
    >

      View

    </motion.div>

  );

}