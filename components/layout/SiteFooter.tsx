import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import CurrentYear from "@/components/shared/CurrentYear";

const footerNavigation = [
  {
    heading: "Discover",
    links: [
      { label: "About the Resort", href: "/about-us" },
      { label: "Rooms & Suites", href: "/rooms" },
      { label: "Dining", href: "/culinary-finds" },
      { label: "Experiences", href: "/things-to-do" },
      { label: "Discover Diani", href: "/diani-beach" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Special Offers", href: "/offers" },
      { label: "Weddings", href: "/weddings" },
      { label: "Conferences", href: "/conference" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Our Location", href: "/location" },
    ],
  },
];

export default function SiteFooter() {


    
  
  return (
    <footer className="bg-ocean text-white">
      {/* Main footer */}
      <div className="container py-20 lg:py-24">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-12 lg:gap-10">
          {/* Resort identity */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Swahili Beach Resort home"
              className="inline-flex"
            >
              <Image
                src="/images/Header-Logo-wepb.webp"
                alt="Swahili Beach Resort"
                width={200}
                height={75}
                className="h-auto w-[180px] brightness-0 invert"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-white/70">
              A distinctive coastal retreat where Swahili heritage, thoughtful
              hospitality and the beauty of the Indian Ocean come together.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center border border-white/20 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center border border-white/20 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center border border-white/20 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <FaLinkedin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          {footerNavigation.map((group) => (
            <div key={group.heading} className="lg:col-span-2">
              <h3 className="mb-7 font-display text-2xl text-white">
                {group.heading}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-7 font-display text-2xl text-white">
              Get in touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 shrink-0 text-gold" />
                <p className="text-sm leading-7 text-white/70">
                  Diani Beach, South Coast,
                  <br />
                  Kenya
                </p>
              </div>

              <a
                href="tel:+254"
                className="flex items-center gap-4 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone size={17} className="shrink-0 text-gold" />
                Contact the resort
              </a>

              <a
                href="mailto:"
                className="flex items-center gap-4 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-gold" />
                Email the resort
              </a>
            </div>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-gold"
            >
              Contact us
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          
            <p>
              © {<CurrentYear />} Swahili Beach Resort. All rights
              reserved.
            </p>
          

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
