"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const faqs = [
  {
    question: "Where is Swahili Beach Resort located?",
    answer: (
      <>
        Swahili Beach Resort is located on the beautiful{" "}
        <strong>Diani Beach</strong> along Kenya’s south coast, just a short
        drive from <strong>Mombasa</strong> and <strong>Ukunda Airstrip</strong>
        . Known for its white sandy beaches and turquoise waters, Diani is one
        of Africa’s top coastal destinations — making Swahili Beach a perfect
        escape for luxury and tranquillity.
      </>
    ),
  },
  {
    question:
      "What makes Swahili Beach one of the best 5-star resorts in Kenya?",
    answer: (
      <>
        Swahili Beach stands out among <strong>5 star resorts in Kenya</strong>{" "}
        for its unique blend of{" "}
        <strong>
          Swahili architecture, cultural heritage, and modern luxury
        </strong>
        . The resort combines sustainability, world-class dining, and
        exceptional service — offering an authentic Kenyan experience unlike any
        other on the coast.
      </>
    ),
  },
  {
    question: "What accommodation options are available at Swahili Beach?",
    answer: (
      <>
        Guests can choose from elegantly designed{" "}
        <Link
          href="/rooms/"
          className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
        >
          rooms and suites
        </Link>{" "}
        featuring private balconies, ensuite bathrooms, and views of lush
        gardens or cascading pools. Each room reflects Swahili-inspired design
        with all the comforts expected of a{" "}
        <strong>five-star hotel in Kenya</strong>.
      </>
    ),
  },
  {
    question: "What activities can guests enjoy during their stay?",
    answer: (
      <>
        From relaxing by the pool to thrilling adventures, Swahili Beach offers
        a variety of{" "}
        <Link
          href="/activities/"
          className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
        >
          activities
        </Link>
        . Guests can try <strong>scuba diving in Mombasa, Kenya</strong>,{" "}
        <strong>skydiving in Diani</strong>, deep-sea fishing, spa treatments,
        and cultural tours — ensuring every stay is as exciting or relaxing as
        you wish.
      </>
    ),
  },
  {
    question: "Can I host my wedding or special event at Swahili Beach Resort?",
    answer: (
      <>
        Yes! Swahili Beach is one of the most romantic{" "}
        <Link
          href="/wedding/"
          className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
        >
          hotels in Diani for weddings
        </Link>
        . Whether it’s a beachfront ceremony, intimate vow renewal, or a grand
        celebration, our dedicated event planners ensure your special day is
        unforgettable, set against the stunning backdrop of the Indian Ocean.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <FadeUp>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Frequently Asked Questions
              </span>

              <h2 className="max-w-lg text-4xl leading-[1.08] text-ocean md:text-5xl lg:text-6xl">
                Everything you need to know before you arrive.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-charcoal/70 md:text-base">
                Planning your stay at Swahili Beach Resort? Find answers to some
                of the questions guests commonly ask about our location,
                accommodation, experiences, and events.
              </p>

              <Link
                href="/contact-us/"
                className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-sm font-medium text-ocean transition-colors hover:text-gold"
              >
                Still have a question?
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </FadeUp>

          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const triggerId = `${sectionId}-trigger-${index}`;
              const answerId = `${sectionId}-answer-${index}`;

              return (
                <FadeUp key={faq.question} delay={index * 0.06}>
                  <div className="py-6 md:py-8">
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
                    >
                      <span className="flex items-start gap-5">
                        <span className="pt-1 text-xs tracking-widest text-gold">
                          0{index + 1}
                        </span>

                        <span className="font-display text-xl leading-snug text-ocean md:text-2xl">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-gold bg-gold text-white"
                            : "border-charcoal/15 text-ocean"
                        }`}
                      >
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex"
                        >
                          <ChevronDown size={17} strokeWidth={1.5} />
                        </motion.span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          role="region"
                          aria-labelledby={triggerId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.45,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                              duration: 0.25,
                              ease: "easeOut",
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-10 max-w-2xl pb-1 pr-12 pt-5 text-sm leading-8 text-charcoal/75 md:ml-12 md:text-base">
                            {faq.answer}
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
      </Container>
    </section>
  );
}
