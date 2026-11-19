export type BookingType =
  | "stay"
  | "offer"
  | "wedding"
  | "conference"
  | "dining"
  | "spa"
  | "general";

export type BookingContext = {
  type?: BookingType;
  itemName?: string;
  source?: string;
};

export type BookingFormValues = {
  type: BookingType;
  itemName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  preferredRoom: string;
  flexibleDates: boolean;
  eventDate: string;
  guestCount: number;
  eventType: string;
  meetingSetup: string;
  duration: string;
  experience: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
};

export const defaultBookingValues: BookingFormValues = {
  type: "stay",
  itemName: "",
  checkIn: "",
  checkOut: "",
  adults: 2,
  children: 0,
  rooms: 1,
  preferredRoom: "",
  flexibleDates: false,
  eventDate: "",
  guestCount: 0,
  eventType: "",
  meetingSetup: "",
  duration: "",
  experience: "",
  partySize: 2,
  name: "",
  email: "",
  phone: "",
  message: "",
  privacyAccepted: false,
};
