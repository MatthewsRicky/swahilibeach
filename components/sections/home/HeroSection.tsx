"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 24 };

  const visible = { opacity: 1, y: 0 };

  const transition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="relative isolate min-h-[calc(100svh-84px)] overflow-hidden bg-ocean text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Swahili Beach Resort in Diani Beach, Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102b3c]/85 via-[#102b3c]/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102b3c]/45 via-transparent to-black/10" />

      {/* Hero content */}
      <div className="container flex min-h-[calc(100svh-84px)] items-center py-24 sm:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={initial}
            animate={visible}
            transition={{ ...transition, delay: 0.2 }}
            className="mb-7 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-eyebrow text-white/90">
              Diani Beach · Kenya
            </span>
          </motion.div>

          <motion.h1
            initial={initial}
            animate={visible}
            transition={{ ...transition, delay: 0.4 }}
            className="max-w-3xl font-display text-6xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.5rem]"
          >
            A timeless escape
            <span className="block text-[#d9c19a]">by the Indian Ocean.</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={visible}
            transition={{ ...transition, delay: 0.6 }}
            className="mt-8 max-w-xl text-sm leading-8 text-white/85 sm:text-base"
          >
            Discover a distinctive coastal retreat where Swahili heritage,
            striking architecture and the beauty of the Indian Ocean come
            together.
          </motion.p>

          <motion.div
            initial={initial}
            animate={visible}
            transition={{ ...transition, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/about-us"
              className="group inline-flex min-h-[54px] items-center gap-4 bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#8d6d3f]"
            >
              Discover the resort
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/rooms"
              className="group inline-flex min-h-[54px] items-center gap-3 border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ocean"
            >
              Explore accommodation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-[var(--container-padding)] hidden items-center gap-3 text-white/75 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll to discover
        </span>
        <ArrowDown size={15} />
      </div>
    </section>
  );
}
