export interface boxProps {
  heading: string;
}
export interface boxTimeline {
  name: string;
  date: string;
  desc: string;
  active: boolean;
}
export const workExpTabs: boxTimeline[] = [
  {
    name: "CodeQuotient",
    date: "April 24 - May 24",
    desc: "Frontend developer Intern",
    active: false,
  },
];
export const educationTabs: boxTimeline[] = [
  {
    name: "Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT) Raipur",
    date: "July 21 - Present",
    desc: "Btech - Computer Science",
    active: true,
  },
  {
    name: "S.N.S College Hajipur, Vaishali",
    date: "April 2019 - Feburary 2021",
    desc: "12th Standard",
    active: false,
  },
  {
    name: "R.k High School Chandpura, Hajipur",
    date: "April 2018 - March 2019",
    desc: "10th Standard",
    active: false,
  },
];
