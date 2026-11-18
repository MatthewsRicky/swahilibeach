import Image from "next/image";
import Link from "next/link";

import MainNavigation from "@/components/layout/MainNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Button from "@/components/ui/Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95">
      <div className="container relative flex h-[84px] items-center justify-between gap-6">
        {/* Resort Logo */}
        <Link
          href="/"
          aria-label="Swahili Beach Resort home"
          className="relative z-[60] flex shrink-0 items-center"
        >
          <Image
            src="/images/Header-Logo-wepb.webp"
            alt="Swahili Beach Resort"
            width={190}
            height={64}
            priority
            className="h-auto w-[145px] sm:w-[165px] lg:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex flex-1 justify-center">
          <MainNavigation />
        </div>

        {/* Desktop Booking Action */}
        <div className="hidden shrink-0 lg:block">
          <Button href="/rooms" variant="primary" arrow>
            Book Your Stay
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
}
