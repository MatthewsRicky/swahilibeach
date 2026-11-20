"use client";

import { useState } from "react";
import {
  BedDouble,
  CalendarDays,
  Flower2,
  Heart,
  MessageCircle,
  Presentation,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";

import BookingForm from "@/components/booking/BookingForm";
import type { BookingType } from "@/types/booking";

type EnquiryCategory = {
  type: BookingType;
  title: string;
  description: string;
  icon: LucideIcon;
};

const enquiryCategories: EnquiryCategory[] = [
  {
    type: "stay",
    title: "Your stay",
    description: "Accommodation and reservations",
    icon: BedDouble,
  },
  {
    type: "offer",
    title: "Special offers",
    description: "Packages and special occasions",
    icon: Sparkles,
  },
  {
    type: "wedding",
    title: "Weddings",
    description: "Weddings and celebrations",
    icon: Heart,
  },
  {
    type: "conference",
    title: "Conferences",
    description: "Meetings and corporate events",
    icon: Presentation,
  },
  {
    type: "dining",
    title: "Dining",
    description: "Restaurants and dining experiences",
    icon: Utensils,
  },
  {
    type: "spa",
    title: "Spa & wellness",
    description: "Treatments and relaxation",
    icon: Flower2,
  },
  {
    type: "general",
    title: "General enquiry",
    description: "Anything else we can help with",
    icon: MessageCircle,
  },
];

export default function ContactEnquirySection() {
  const [selectedType, setSelectedType] = useState<BookingType>("stay");

  const selectedCategory = enquiryCategories.find(
    (category) => category.type === selectedType,
  )!;

  return (
    <section id="contact-enquiry" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto">
        {/* Section introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow text-gold">How can we help?</p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-ocean sm:text-5xl">
            Tell us what you have in mind.
          </h2>

          <p className="mt-6 text-sm leading-8 text-charcoal/60">
            From a few days by the ocean to a gathering worth remembering,
            choose the enquiry that best describes what you are planning.
          </p>
        </div>

        {/* Category selector */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {enquiryCategories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedType === category.type;

            return (
              <button
                key={category.type}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedType(category.type)}
                className={`group relative flex min-h-[112px] flex-col items-start justify-center border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:min-h-[125px] sm:p-6 ${
                  isSelected
                    ? "border-gold bg-ocean text-white shadow-lg shadow-ocean/10"
                    : "border-ocean/10 bg-ivory text-ocean hover:border-gold/60 hover:bg-sand/30"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className={
                      isSelected
                        ? "text-gold"
                        : "text-gold transition-transform duration-300 group-hover:-translate-y-0.5"
                    }
                  />

                  {isSelected && (
                    <span className="size-2 rounded-full bg-gold" />
                  )}
                </div>

                <span
                  className={`mt-4 font-display text-xl leading-tight sm:text-2xl ${
                    isSelected ? "text-white" : "text-ocean"
                  }`}
                >
                  {category.title}
                </span>

                <span
                  className={`mt-2 text-[10px] leading-5 sm:text-xs ${
                    isSelected ? "text-white/60" : "text-charcoal/50"
                  }`}
                >
                  {category.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active enquiry form */}
        <div className="mx-auto mt-10 max-w-5xl border border-ocean/10 bg-ivory p-5 sm:mt-14 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-4 border-b border-ocean/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Your enquiry
              </p>

              <h3 className="mt-3 font-display text-3xl text-ocean sm:text-4xl">
                {selectedCategory.title}
              </h3>

              <p className="mt-2 text-sm text-charcoal/55">
                {selectedCategory.description}
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-ocean">
              <span className="size-1.5 rounded-full bg-gold" />
              Selected enquiry
            </span>
          </div>

          <div className="pt-8">
            <BookingForm
              key={selectedType}
              context={{
                type: selectedType,
                source: `Contact page – ${selectedCategory.title}`,
              }}
              onClose={() => setSelectedType("stay")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
