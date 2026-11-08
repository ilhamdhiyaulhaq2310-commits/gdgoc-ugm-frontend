interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
interface TrackItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  skills: string[];
  what_you_do: string;
  explore_link: string;
  open: boolean;
}
interface FormatItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  cta: string;
}
interface JourneyItem {
  step: number;
  id: string;
  title: string;
  description: string;
}
interface ValueItem {
  id: string;
  title: string;
  description: string;
  color: string;
}
interface RoleItem {
  id: string;
  title: string;
  description: string;
  cta: string;
}

export type { FaqItem, TrackItem, FormatItem, JourneyItem, ValueItem, RoleItem }