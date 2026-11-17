"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export default function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
  aspectRatio = "4 / 5",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "center",
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
      initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={
        shouldReduceMotion ? undefined : { clipPath: "inset(0 0 0% 0)" }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition }}
      />
    </motion.div>
  );
}
