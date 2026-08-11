"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Reveal } from "@/components/reveal";

const heroTextVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.12
    }
  }
} as const;

const heroTextItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
  }
} as const;

export function MobilityHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[760px] border-b border-border pt-[72px]">
      <Image
        src="/assets/mobility/ev-tricycle-banner.jpg"
        alt="WXPE EVMobii electric cargo tricycles for commercial mobility in Malaysia"
        fill
        priority
        sizes="100vw"
        className="origin-bottom scale-[1.18] object-cover object-bottom md:scale-[1.1]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.76)_0%,rgba(9,31,55,0.48)_34%,rgba(7,17,31,0.07)_70%,rgba(7,17,31,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,rgba(238,243,246,0.94)_0%,rgba(238,243,246,0.62)_34%,rgba(238,243,246,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.12)_100%)]" />

      <div className="container relative z-10 flex min-h-[calc(84svh-72px)] items-end pb-14 pt-24 md:pb-20">
        <motion.div
          variants={reduceMotion ? undefined : heroTextVariants}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          className="max-w-[500px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]"
        >
          <motion.p
            variants={reduceMotion ? undefined : heroTextItemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/78 md:text-sm"
          >
            EVMobii
          </motion.p>
          <motion.h1
            variants={reduceMotion ? undefined : heroTextItemVariants}
            className="mt-4 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.025em] md:text-[3.1rem]"
          >
            <span className="sr-only">EVMobii: </span>
            <span className="block">Mobility in Motion</span>
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : heroTextItemVariants}
            className="mt-5 max-w-[430px] text-[0.95rem] leading-7 text-white/80 md:text-base md:leading-8"
          >
            Commercial electric mobility for Malaysian industry and logistics.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export function MobilityVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handlePlay() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    void video.play();
  }

  return (
    <section
      aria-label="EVMobii mobility video"
      className="border-b border-border bg-background py-10 md:py-20"
    >
      <div className="container">
        <Reveal className="mx-auto w-full max-w-[1120px]">
          <article className="group overflow-hidden rounded-[1.6rem] border border-[#cad8e2] bg-white p-2 shadow-[0_28px_90px_rgba(7,17,31,0.12)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_34px_105px_rgba(7,17,31,0.16)] motion-reduce:hover:translate-y-0 md:p-3">
            <div className="relative overflow-hidden rounded-[1.15rem] bg-[#07111f]">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.008]"
                controls={hasStarted}
                muted
                playsInline
                preload="metadata"
                poster="/assets/mobility/ev-tricycle-banner.jpg"
                onPlay={() => setHasStarted(true)}
              >
                <source src="/assets/mobility/ev-tricycle-video-02.mp4" type="video/mp4" />
              </video>

              {!hasStarted ? (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play EVMobii mobility video"
                  className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[rgba(7,17,31,0.58)] text-white shadow-[0_16px_46px_rgba(0,0,0,0.28)] backdrop-blur-md transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-[rgba(7,17,31,0.72)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] motion-reduce:hover:scale-100 md:size-20"
                >
                  <Play className="ml-1 size-6 fill-current md:size-7" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
              <h2 className="text-sm font-semibold text-foreground md:text-base">
                EVMobii commercial electric mobility in Malaysia
              </h2>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                EVMobii Malaysia
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
