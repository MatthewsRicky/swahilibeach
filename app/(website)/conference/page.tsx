import type { Metadata } from "next";

import EventHero from "@/components/sections/events/EventHero";
import EventEditorial from "@/components/sections/events/EventEditorial";
import EventFeatureGrid from "@/components/sections/events/EventFeatureGrid";
import EventCTA from "@/components/sections/events/EventCTA";

export const metadata: Metadata = {
  title: "Conferences & Meetings | Swahili Beach Resort",
  description:
    "Host meetings, conferences, and corporate events at Swahili Beach Resort in Diani. Explore flexible meeting spaces and delegate arrangements.",
};

const roomCapacities = [
  {
    number: "01",
    title: "Theatre setup",
    description:
      "Flexible theatre-style arrangements with capacities of up to 150 and 50 guests across the available spaces.",
  },
  {
    number: "02",
    title: "Classroom setup",
    description:
      "Classroom-style configurations accommodating up to 120 and 40 attendees across the available spaces.",
  },
  {
    number: "03",
    title: "Boardroom",
    description:
      "A more intimate setting for focused discussions and smaller meetings, accommodating up to 16 guests.",
  },
];

const packageInclusions = [
  {
    number: "01",
    title: "Meeting space",
    description:
      "A conference venue with a setup arranged to suit the event, during the stated 8am–5pm package period.",
  },
  {
    number: "02",
    title: "Refreshments",
    description:
      "A full-day refreshment station, with water provided for delegates.",
  },
  {
    number: "03",
    title: "Lunch",
    description: "A buffet luncheon with one soft drink per delegate.",
  },
  {
    number: "04",
    title: "Conference essentials",
    description:
      "Conference stationery and standard conference equipment, including a data projector.",
  },
];

export default function ConferencePage() {
  return (
    <>
      <EventHero
        breadcrumb="Conferences"
        eyebrow="Meet, connect, accomplish"
        title="Where business meets inspiration."
        description="Bring people together in a setting that encourages fresh thinking. Discover flexible meeting spaces and conference arrangements at Swahili Beach Resort, Diani."
        image="/images/conferences/conference-scaled.png"
        imageAlt="Conference and events setting at Swahili Beach Resort"
      />

      <EventEditorial
        eyebrow="Meetings & events"
        title="A different setting for productive thinking."
        description="Set along the coast of Diani Beach, Swahili Beach Resort offers a distinctive environment for business meetings, conferences, workshops, and corporate gatherings. Combine focused time together with the comfort, hospitality, and experiences of the resort."
        image="/images/conferences/Conf-20.jpg"
        imageAlt="Business meeting in a resort conference room"
      />

      <EventFeatureGrid
        eyebrow="Flexible meeting spaces"
        title="Room to bring ideas together."
        description="The resort lists three fully air-conditioned meeting rooms, with flexible configurations for different event sizes and formats."
        features={roomCapacities}
        background="white"
      />

      <EventEditorial
        eyebrow="A change of pace"
        title="More than a meeting."
        description="Give delegates the opportunity to step away from the meeting room and enjoy the resort's wider experiences. From dining and pools to spa treatments and activities around Diani, there is room to make a corporate gathering feel like a complete coastal retreat."
        image="/images/architecture/59021254-1147772736.jpg"
        imageAlt="Resort grounds and swimming pool overlooking the coast"
        link={{
          label: "Explore resort services",
          href: "/services",
        }}
        reverse
        background="ivory"
      />

      <EventFeatureGrid
        eyebrow="Delegate arrangements"
        title="Conference packages."
        description="The resort's published conference page lists three delegate packages. The following outlines the inclusions described in its standard package information; confirm the current package details and rates directly with the events team."
        features={[
          {
            number: "01",
            title: "Swahili Beach Meetings Package",
            description:
              "A conference arrangement with venue setup, refreshments, water, stationery, buffet lunch, one soft drink per delegate, and standard equipment.",
          },
          {
            number: "02",
            title: "Swahili Mombasa Package",
            description:
              "A delegate package listed alongside the resort's meeting-room facilities and conference arrangements. Contact the team for its current inclusions.",
          },
          {
            number: "03",
            title: "Swahili Diani Beach Package",
            description:
              "A further delegate package listed by the resort, with conference arrangements and inclusions to be confirmed with the events team.",
          },
        ]}
        background="white"
      />

      <EventFeatureGrid
        eyebrow="Included in the published package information"
        title="The essentials for a productive day."
        description="The resort's conference page describes the following standard package elements. Exact inclusions may vary by package and should be confirmed before booking."
        features={packageInclusions}
        background="ivory"
      />

      <EventCTA
        eyebrow="Plan your next event"
        title="Let's bring your people together."
        description="Share your event date, expected number of delegates, and preferred meeting arrangement. The team can help you discuss the available spaces and prepare an event proposal."
        buttonLabel="Enquire about conferences"
        href="mailto:stay@swahilibeach.com?subject=Conference%20Enquiry"
        email="stay@swahilibeach.com"
      />
    </>
  );
}
