"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Stephanie W",
    quote:
      "We stayed at Swahili Beach Resort during our honeymoon to Kenya. From the moment we arrived, the service was impeccable. The staff took the time to get to know us and seemed genuinely interested in our travels.",
  },
  {
    name: "Altaaf Kazi",
    quote:
      "Few places have captivated my heart like Diani Beach has in Kenya. To further supplement this place of beauty, one needed accommodation befitting of this beautiful part of the world. Swahili Beach resort offered the perfect spot. The hotel has charm and character to match the area.",
  },
  {
    name: "Sharon Bett",
    quote:
      "My stay at Swahili Beach Resort was incredible! The serene atmosphere, stunning facilities, and exceptional service made it unforgettable. The resort is very baby-friendly, and the staff went above and beyond to ensure my little one and I were comfortable.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-ocean py-24 text-white md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Words from our guests
            </span>

            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Moments that stay with you.
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <Quote
              aria-hidden="true"
              className="mx-auto mb-8 h-10 w-10 text-gold"
              strokeWidth={1.2}
            />

            <div
              className="min-h-[220px] text-center md:min-h-[190px]"
              aria-live="polite"
              aria-atomic="true"
            >
              <blockquote
                key={activeIndex}
                className="font-display text-2xl leading-relaxed text-white/90 md:text-3xl lg:text-[2.15rem]"
              >
                “{activeTestimonial.quote}”
              </blockquote>
            </div>

            <div className="mt-10 text-center">
              <div className="mx-auto mb-4 h-px w-12 bg-gold" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {activeTestimonial.name}
              </p>

              <p className="mt-2 text-xs tracking-wide text-white/50">
                Guest at Swahili Beach Resort
              </p>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ocean focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>

              <div className="flex items-center gap-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial from ${testimonial.name}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-gold"
                        : "w-1.5 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ocean focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
