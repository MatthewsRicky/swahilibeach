"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/navigation";

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

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden items-center lg:flex">
      <ul className="flex items-center gap-5 xl:gap-8">
        {navigationItems.map((item) => {
          const active = isActiveItem(pathname, item);

          return (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="nav-link relative inline-flex items-center gap-1.5 py-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal/80 transition-colors duration-300 hover:text-ocean focus-visible:text-ocean"
              >
                {item.label}

                {item.children && (
                  <ChevronDown
                    size={13}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                )}

                <span
                  aria-hidden="true"
                  className={`nav-underline ${active ? "nav-underline-active" : ""}`}
                />
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 border-t border-gold bg-white py-3 opacity-0 shadow-[0_16px_40px_rgba(20,35,45,0.12)] transition-all duration-300 ease-[var(--ease-luxury)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="flex flex-col">
                    {item.children.map((child) => {
                      const childActive = isActivePath(pathname, child.href);

                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`block px-5 py-3 text-xs transition-colors duration-200 hover:bg-ivory hover:text-ocean focus-visible:bg-ivory focus-visible:text-ocean ${
                              childActive
                                ? "font-semibold text-ocean"
                                : "text-charcoal/75"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
