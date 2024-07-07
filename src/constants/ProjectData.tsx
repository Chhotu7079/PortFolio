export interface projectTabsDetail {
  id: string;
  projectName: string;
  subHeading: string;
  desc: string;
  align: boolean;
  buttonTabs: buttonTabsDetail[];
  repoLink: string;
  liveLink: string;
}

export interface buttonTabsDetail {
  name: string;
}

export const projectTabs: projectTabsDetail[] = [
  {
    id: "food",
    projectName: "Food villa",
    subHeading: "Food deliverying web application",
    desc: "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    align: false,
    buttonTabs: [
      { name: "ReactJS" },
      { name: "Custom Hooks" },
      { name: "Redux" },
      { name: "Rest API" },
      { name: "Search" },
    ],
    repoLink: "https://github.com/Chhotu7079/FOODVILLA",
    liveLink: "https://food-menue.netlify.app/",
  },
  {
    id: "weather",
    projectName: "Aaj ka mousam?",
    subHeading: "Weather displaying web application",
    desc: `It is a web application displaying the current weather details and future 5 days details`,
    align: true,
    buttonTabs: [
      { name: "OpenWeatherAPI" },
      { name: "Conditional-rendering" },
      { name: "Unit changes" },
    ],
    repoLink: "https://github.com/Chhotu7079/AajKaMausam",
    liveLink: "https://aaj-ka-weather.netlify.app/",
  },
  {
    id: "unsplash",
    projectName: "Unsplash Clone",
    subHeading: "Picture showing web application",
    desc: "We will delve into creating a Myntra clone using HTML, CSS, and JavaScript. We will cover the essential steps to replicate the functionality and design of this popular  e-commerce platform. ",
    align: false,
    buttonTabs: [
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    repoLink: "https://github.com/Chhotu7079/MyntraClone",
    liveLink: "https://myntra-functional.netlify.app/",
  },
  {
    id: "docs",
    projectName: "QuizApp.",
    subHeading: "Test based quiz application",
    desc: ` "Quiz-App" – We will be embarking on a journey to create a quiz application using the web development technologies of HTML, CSS, and JavaScript. `,
    align: true,
    buttonTabs: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Node js" },
    ],
    repoLink: "https://github.com/Chhotu7079/QuizApp",
    liveLink: "https://quizapp-cq.netlify.app",
  },
  {
  id: "razorpay",
  projectName: "Razorpay Clone",
  subHeading: "Supercharge your business with the all‑powerful Payment Gateway. 100+ Payment Methods.",
  desc: `Built a web application that closely mimicked design of the popular Indian payment gateway, Razor Pay, using HTML & Tailwind CSS. `,
  
  align: false,
  buttonTabs: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "TailwindCSS" },
  ],
  repoLink: "https://github.com/Chhotu7079/Razorpay-Clone",
  liveLink: "https://razorpay0clone.netlify.app/",
},
  // {
  //   id: "youtube",
  //   projectName: "YouStream",
  //   subHeading: "Video playing web application",
  //   desc: "YouStream is a cutting-edge video-sharing platform designed to revolutionize online content consumption. With an intuitive interface reminiscent of popular platforms, VidClone offers users a seamless experience for uploading, sharing, and discovering a diverse range of videos.",
  //   align: true,
  //   buttonTabs: [
  //     { name: "ReactJS" },
  //     { name: "TailwindCSS" },
  //     { name: "Redux" },
  //     { name: "Rest API" },
  //   ],
  //   repoLink: "https://github.com/Manya67/youstream",
  //   liveLink: "",
  // },
];
