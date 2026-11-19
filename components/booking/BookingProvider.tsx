"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { BookingContext } from "@/types/booking";

type BookingContextValue = {
  isOpen: boolean;
  bookingContext: BookingContext;
  openBooking: (context?: BookingContext) => void;
  closeBooking: () => void;
};

const BookingContextProvider = createContext<BookingContextValue | null>(null);

type BookingProviderProps = {
  children: ReactNode;
};

export function BookingProvider({ children }: BookingProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState<BookingContext>({
    type: "stay",
  });

  const openBooking = useCallback((context: BookingContext = {}) => {
    setBookingContext({
      type: context.type ?? "stay",
      itemName: context.itemName ?? "",
      source: context.source ?? "",
    });

    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      bookingContext,
      openBooking,
      closeBooking,
    }),
    [isOpen, bookingContext, openBooking, closeBooking],
  );

  return (
    <BookingContextProvider.Provider value={value}>
      {children}
    </BookingContextProvider.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContextProvider);

  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider.");
  }

  return context;
}
