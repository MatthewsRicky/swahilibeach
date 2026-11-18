"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const faqs = [
  {
    question:
      "What is the difference between Standard Rooms and Superior Rooms?",
    answer: (
      <>
        Standard Rooms offer a spacious 59 m² layout with a king or twin bed and
        a private balcony, while Superior Rooms are larger at 66 m² and include
        additional Baraza beds, making them ideal for families with children.
      </>
    ),
  },
  {
    question: "What extra benefits do Club Rooms include?",
    answer: (
      <>
        Guests staying in Club Rooms enjoy complimentary daily access to the
        adults-only Beach Club, discounts on{" "}
        <Link
          href="/features/"
          className="font-medium text-gold underline underline-offset-4 transition-colors hover:text-ocean"
        >
          spa treatments
        </Link>{" "}
        and shopping, dedicated concierge service, and lifetime Beach Club
        membership (terms and conditions apply).
      </>
    ),
  },
  {
    question: "What amenities are available in Club Suites?",
    answer: (
      <>
        Club Suites feature 125 m² of space with a separate lounge, kitchenette,
        minibar on request, private balcony, and a complimentary pressing
        service, offering added comfort and privacy.
      </>
    ),
  },
  {
    question: "How are Executive Suites different from other room categories?",
    answer: (
      <>
        Executive Suites provide 134 m² of luxury living space, including a
        lounge, dining area, walk-in wardrobe, private kitchenette, additional
        guest toilet, and Baraza beds, along with exclusive Club-level benefits.
      </>
    ),
  },
  {
    question: "What exclusive benefits do Executive Suite guests enjoy?",
    answer: (
      <>
        Guests enjoy early check-in or late check-out (subject to availability),
        a private dinner experience every four nights, daily high tea in a
        private location, Beach Club access, spa and shopping discounts, and
        dedicated concierge service.
      </>
    ),
  },
];

export default function RoomsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Editorial introduction */}
          <FadeUp>
            <div className="lg:sticky lg:top-32">
              <p className="text-eyebrow mb-5 text-gold">
                A little more to know
              </p>

              <h2 className="max-w-md font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl lg:text-6xl">
                Your stay, thoughtfully considered.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-foreground-muted md:text-base">
                From choosing the right room to understanding the privileges
                that come with your stay, find answers to some of the questions
                guests ask most often.
              </p>

              <div className="mt-9">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-gold"
                >
                  Still have a question?
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* FAQ accordion */}
          <div className="border-t border-charcoal/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `rooms-faq-answer-${index}`;

              return (
                <FadeUp key={faq.question} delay={index * 0.04}>
                  <div className="border-b border-charcoal/15">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
                    >
                      <span className="flex items-start gap-5">
                        <span className="pt-1 text-xs tracking-wider text-gold">
                          0{index + 1}
                        </span>

                        <span className="font-display text-xl font-medium leading-snug text-charcoal transition-colors md:text-2xl">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-gold bg-gold text-white"
                            : "border-charcoal/20 text-charcoal"
                        }`}
                      >
                        <ChevronDown size={17} strokeWidth={1.5} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          initial={
                            shouldReduceMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10 pr-12 md:pb-9 md:pl-[3.25rem]">
                            <div className="max-w-xl text-sm leading-8 text-foreground-muted md:text-base">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
