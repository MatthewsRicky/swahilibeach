"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type ExperienceFAQProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: FAQItem[];
};

export default function ExperienceFAQ({
  eyebrow,
  title,
  description,
  items,
}: ExperienceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-eyebrow">{eyebrow}</span>

            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] text-ocean sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            {description && (
              <p className="mt-6 max-w-md text-sm leading-7 text-charcoal/70">
                {description}
              </p>
            )}
          </div>

          <div className="border-t border-charcoal/15">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const triggerId = `${id}-trigger-${index}`;
              const panelId = `${id}-panel-${index}`;

              return (
                <div
                  key={item.question}
                  className="border-b border-charcoal/15"
                >
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <span className="flex items-start gap-5">
                      <span className="pt-1 font-sans text-xs tracking-widest text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-xl leading-snug text-ocean transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-gold text-white rounded-full"
                          : "bg-transparent text-gold rounded-full"
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
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-9 text-sm leading-7 text-charcoal/70 sm:pl-10">
                          {item.answer}
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
