"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services are available at Swahili Beach Resort?",
    answer:
      "Swahili Beach Resort offers a wide range of luxury services including a world-class spa, multiple dining restaurants, infinity pools, water sports activities, and curated guest experiences designed for relaxation and adventure.",
  },
  {
    question: "Does Swahili Beach Resort have a spa and wellness centre?",
    answer:
      "Yes. The resort features a luxurious spa with treatment rooms, wellness therapies, and relaxation packages. Guests can enjoy rejuvenating massages and beauty treatments in a tranquil oceanfront setting.",
  },
  {
    question: "What dining options are available at Swahili Beach?",
    answer:
      "Guests can enjoy several on-site dining options offering a mix of Swahili, international, and gourmet cuisines. The resort provides both casual and fine dining experiences to suit all tastes.",
  },
  {
    question: "What activities can guests enjoy at the resort?",
    answer:
      "Swahili Beach offers a variety of activities including swimming in cascading pools, scuba diving, skydiving nearby, cultural excursions, and beachside entertainment for both adults and children.",
  },
  {
    question: "Can Swahili Beach host weddings and corporate events?",
    answer:
      "Yes. The resort is a popular destination for weddings, honeymoons, and corporate events. It provides tailored event planning, elegant venues, and beachfront settings for memorable celebrations.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-eyebrow text-gold">
              A little more clarity
            </span>

            <h2 className="mt-4 font-display text-4xl leading-tight text-ocean sm:text-5xl lg:text-6xl">
              Frequently asked questions.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-charcoal/70">
              Find answers to common questions about the services, facilities
              and experiences available at Swahili Beach Resort.
            </p>
          </div>

          <div className="border-t border-charcoal/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `services-faq-answer-${index}`;
              const questionId = `services-faq-question-${index}`;

              return (
                <div key={faq.question} className="border-b border-charcoal/15">
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <span className="flex items-start gap-5">
                      <span className="mt-1 font-sans text-xs tracking-widest text-gold">
                        0{index + 1}
                      </span>

                      <span className="font-display text-xl leading-snug text-ocean sm:text-2xl">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-gold rounded-full text-white"
                          : "bg-transparent rounded-full text-gold"
                      }`}
                    >
                      <ChevronDown
                        size={20}
                        strokeWidth={1.4}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial={
                          shouldReduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-10 text-sm leading-7 text-charcoal/70 sm:pl-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
