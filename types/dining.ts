export type DiningMenuLink = {
  label: string;
  href: string;
};

export type DiningVenue = {
  number: string;
  name: string;
  title: string;
  logo: string;
  logoAlt: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  hours: string;
  additionalInfo?: string;
  menuLinks?: DiningMenuLink[];
};
