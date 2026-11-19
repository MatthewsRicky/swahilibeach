"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question:
      "What dining options are available at Swahili Beach Resort restaurants?",
    answer:
      "Swahili Beach Resort offers multiple dining experiences including buffet dining, à la carte beachfront restaurants, pan-Asian cuisine, Swahili and international dishes, and themed culinary experiences.",
  },
  {
    question: "What is Majilis Restaurant at Swahili Beach?",
    answer:
      "Majilis is the main dining restaurant at Swahili Beach Resort, offering daily buffet meals with a variety of cuisines including Swahili, Indian, Italian, and international dishes in a stylish setting.",
  },
  {
    question: "Does Swahili Beach have a beachfront restaurant?",
    answer:
      "Yes, Barharini Beach Bar & Restaurant offers beachfront dining with fresh seafood, grills, burgers, and light meals served in a relaxed oceanfront atmosphere.",
  },
  {
    question:
      "Are there fine dining or specialty restaurants at Swahili Beach Resort?",
    answer:
      "Yes, guests can enjoy specialty dining such as Spice Route for Indian fusion cuisine, Zanzibar Restaurant for pan-Asian dishes and teppanyaki, and Kahawa Lounge for light snacks and coffee.",
  },
  {
    question: "Do Swahili Beach restaurants cater to dietary preferences?",
    answer:
      "Yes, the resort’s restaurants offer a wide variety of menu options and can accommodate different dietary preferences upon request, ensuring a personalised dining experience for all guests.",
  },
];

export default function CulinaryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-ivory">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="max-w-md">
          <span className="text-eyebrow">Good to know</span>

          <h2 className="mt-5 font-display text-4xl leading-tight text-ocean sm:text-5xl">
            Your dining questions, answered.
          </h2>

          <p className="mt-6 text-base leading-8 text-charcoal/70">
            A few details to help you make the most of the dining experiences
            available at Swahili Beach Resort.
          </p>
        </div>

        <div className="border-t border-charcoal/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-charcoal/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl leading-snug text-ocean sm:text-2xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-gold text-white rounded-full" : "bg-transparent text-gold rounded-full"
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-charcoal/70 sm:text-base">
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
    </section>
  );
}
