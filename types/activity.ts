export type Activity = {
  number: string;
  name: string;
  description: string;
};

export type ActivityCategory = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  activities: Activity[];
};
