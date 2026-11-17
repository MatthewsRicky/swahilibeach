"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Button from "@/components/ui/Button";

import type { NavigationItem } from "@/data/navigation";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isActiveItem(pathname: string, item: NavigationItem) {
  return (
    isActivePath(pathname, item.href) ||
    Boolean(item.children?.some((child) => isActivePath(pathname, child.href)))
  );
}

export default function MobileNavigation() {
  
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setExpandedItem(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function toggleItem(label: string) {
    setExpandedItem((current) => (current === label ? null : label));
  }

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-[60] flex size-11 items-center justify-center text-ocean transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
      >
        {isOpen ? (
          <X size={25} strokeWidth={1.5} />
        ) : (
          <Menu size={25} strokeWidth={1.5} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 cursor-default bg-charcoal/35 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
              }}
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gold/30 bg-ivory shadow-[0_20px_40px_rgba(20,35,45,0.14)] lg:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="px-6 py-5">
                <ul className="flex flex-col">
                  {navigationItems.map((item) => {
                    const active = isActivePath(pathname, item.href);
                    const expanded = expandedItem === item.label;

                    return (
                      <li
                        key={item.label}
                        className="border-b border-charcoal/10"
                      >
                        {item.children ? (
                          <>
                            <div className="flex items-center justify-between">
                              <Link
                                href={item.href}
                                className={`flex-1 py-4 text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
                                  active ? "text-ocean" : "text-charcoal/80"
                                }`}
                              >
                                {item.label}
                              </Link>

                              <button
                                type="button"
                                aria-label={`Toggle ${item.label} submenu`}
                                aria-expanded={expanded}
                                onClick={() => toggleItem(item.label)}
                                className="flex size-11 items-center justify-center text-ocean focus-visible:outline-2 focus-visible:outline-gold"
                              >
                                <ChevronDown
                                  size={19}
                                  strokeWidth={1.5}
                                  className={`transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>

                            <AnimatePresence initial={false}>
                              {expanded && (
                                <motion.ul
                                  initial={
                                    shouldReduceMotion
                                      ? false
                                      : { height: 0, opacity: 0 }
                                  }
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: shouldReduceMotion ? 0 : 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="overflow-hidden"
                                >
                                  {item.children.map((child) => {
                                    const childActive = isActivePath(
                                      pathname,
                                      child.href,
                                    );

                                    return (
                                      <li key={child.href}>
                                        <Link
                                          href={child.href}
                                          className={`block py-3 pl-4 text-sm transition-colors hover:text-gold ${
                                            childActive
                                              ? "font-semibold text-ocean"
                                              : "text-charcoal/65"
                                          }`}
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={`block py-4 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:text-gold ${
                              active ? "text-ocean" : "text-charcoal/80"
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-6">
                  <Button
                    href="/contact-us"
                    variant="primary"
                    arrow
                    className="w-full"
                  >
                    Enquire Now
                  </Button>
                </div>

                <p className="pt-5 text-center text-[10px] uppercase tracking-[0.18em] text-charcoal/45">
                  Diani Beach · Kenya
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
