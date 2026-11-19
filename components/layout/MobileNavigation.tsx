"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import type { NavigationItem } from "@/data/navigation";
import Button from "@/components/ui/Button";

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
  const navigationId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent the page behind the navigation from scrolling.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close the navigation with Escape.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
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

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
            when: "beforeChildren" as const,
            delayChildren: 0.12,
            staggerChildren: 0.075,
          },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      {/* Menu toggle */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          if (isOpen) {
            closeMenu();
          } else {
            setIsOpen(true);
          }
        }}
        className={`relative z-[60] flex size-11 items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden ${
          isOpen ? "text-ivory hover:text-gold" : "text-ocean hover:text-gold"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, rotate: -45, scale: 0.8 }
            }
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, rotate: 45, scale: 0.8 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="flex"
          >
            {isOpen ? (
              <X size={25} strokeWidth={1.4} />
            ) : (
              <Menu size={25} strokeWidth={1.4} />
            )}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              onClick={closeMenu}
              className="fixed inset-0 z-40 cursor-default bg-sand backdrop-blur-[3px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
              }}
            />

            {/* Navigation panel */}
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 bottom-0 top-20 z-50 flex flex-col overflow-hidden border-t border-gold/30 bg-ocean text-ivory shadow-[0_24px_60px_rgba(10,25,35,0.3)] lg:hidden"
            >
              {/* Panel heading */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-gold">
                    Swahili Beach Resort
                  </span>
                  <span className="mt-1 block font-display text-xl text-ivory">
                    Discover the resort
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/40">
                  Menu
                </span>
              </div>

              {/* Scrollable navigation */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-4">
                <motion.ul className="flex flex-col">
                  {navigationItems.map((item, index) => {
                    const active = isActiveItem(pathname, item);
                    const expanded = expandedItem === item.label;
                    const submenuId = `${navigationId}-submenu-${index}`;

                    return (
                      <motion.li
                        key={item.label}
                        variants={itemVariants}
                        className="border-b border-white/10"
                      >
                        {item.children ? (
                          <>
                            <div className="flex items-center gap-3">
                              <Link
                                href={item.href}
                                onClick={closeMenu}
                                aria-current={active ? "page" : undefined}
                                className={`flex-1 py-5 font-display text-[1.65rem] leading-tight transition-colors duration-300 ${
                                  active
                                    ? "text-gold"
                                    : "text-ivory hover:text-gold"
                                }`}
                              >
                                {item.label}
                              </Link>

                              <button
                                type="button"
                                aria-label={`Toggle ${item.label} submenu`}
                                aria-expanded={expanded}
                                aria-controls={submenuId}
                                onClick={() => toggleItem(item.label)}
                                className="flex size-11 shrink-0 items-center justify-center text-gold transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-gold"
                              >
                                <motion.span
                                  animate={{
                                    rotate: expanded ? 180 : 0,
                                  }}
                                  transition={{
                                    duration: shouldReduceMotion ? 0 : 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="flex"
                                >
                                  <ChevronDown size={20} strokeWidth={1.3} />
                                </motion.span>
                              </button>
                            </div>

                            <AnimatePresence initial={false}>
                              {expanded && (
                                <motion.ul
                                  id={submenuId}
                                  initial={
                                    shouldReduceMotion
                                      ? false
                                      : {
                                          height: 0,
                                          opacity: 0,
                                        }
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
                                    duration: shouldReduceMotion ? 0 : 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="mb-5 ml-1 border-l border-gold/40 pl-5">
                                    {item.children.map((child) => {
                                      const childActive = isActivePath(
                                        pathname,
                                        child.href,
                                      );

                                      return (
                                        <li key={child.href}>
                                          <Link
                                            href={child.href}
                                            onClick={closeMenu}
                                            aria-current={
                                              childActive ? "page" : undefined
                                            }
                                            className={`block py-3 text-sm tracking-wide transition-colors duration-200 hover:text-gold ${
                                              childActive
                                                ? "font-semibold text-gold"
                                                : "text-ivory/65"
                                            }`}
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </div>
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            aria-current={active ? "page" : undefined}
                            className={`block py-5 font-display text-[1.65rem] leading-tight transition-colors duration-300 ${
                              active
                                ? "text-gold"
                                : "text-ivory hover:text-gold"
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>

              {/* Fixed panel footer */}
              <motion.div
                variants={itemVariants}
                className="shrink-0 border-t border-white/10 bg-[#102F44] px-6 pb-7 pt-5"
              >
                <Button
                  href="/contact-us"
                  variant="primary"
                  arrow
                  className="w-full"
                >
                  Enquire Now
                </Button>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/45">
                    Diani Beach · Kenya
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                    A coastal escape
                  </span>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
