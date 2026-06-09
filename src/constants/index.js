const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
];

const counterItems = [
  { value: 30, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Technologies Learned" },
  { value: 4, suffix: "+", label: "Hours of Coding" },
  { value: 80, suffix: "%", label: "Problems Solved" },
];

const logoIconsList = [
  {
    imgPath: "images/logos/company-logo-1.png",
  },
  {
    imgPath: "images/logos/company-logo-2.png",
  },
  {
    imgPath: "images/logos/company-logo-3.png",
  },
  {
    imgPath: "images/logos/company-logo-4.png",
  },
  {
    imgPath: "images/logos/company-logo-5.png",
  },
  {
    imgPath: "images/logos/company-logo-6.png",
  },
  {
    imgPath: "images/logos/company-logo-7.png",
  },
  {
    imgPath: "images/logos/company-logo-8.png",
  },
  {
    imgPath: "images/logos/company-logo-9.png",
  },
  {
    imgPath: "images/logos/company-logo-10.png",
  },
  {
    imgPath: "images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "images/logos/react.png",
  },
  {
    name: "PHP Developer",
    imgPath: "images/logos/php.png",
  },
  {
    name: "Backend Developer",
    imgPath: "images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "images/logos/vue.png",
  },
  {
    name: "Project Manager",
    imgPath: "images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "React is my primary frontend framework for building responsive and interactive web applications. I use component-based architecture, hooks, and modern development practices to create clean and maintainable user interfaces.",
    imgPath: "images/exp1.png",
    logoPath: "images/logo1.png",
    title: "Frontend Developer",
    date: "🗓️ May 2026 - Present",
    responsibilities: [
      "Built reusable and scalable UI components using React.",
      "Managed application state with modern React hooks.",
      "Integrated REST APIs and dynamic data into frontend interfaces.",
    ],
  },
  {
    review:
      "Laravel is the framework I use to build the backend of web applications. It helps me create secure, organized, and reliable systems for handling data, users, and website functionality.",
    imgPath: "images/exp2.png",
    logoPath: "images/logo2.png",
    title: "Backend Developer",
    date: "🗓️ November 2025 - Present",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "I use MySQL to design and manage databases for web applications. It allows me to store, retrieve, and organize data in a structured and efficient way.",
    imgPath: "images/exp3.png",
    logoPath: "images/logo3.png",
    title: "Server",
    date: "🗓️ August 2025 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
