export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I emphasize strong client collaboration, fostering open and transparent communication to ensure every project aligns perfectly with their vision. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1742749126/16f5f3c5-36f0-4e4b-b4ca-d8d892c3be8d_rkdiun.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },


  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "Instagram Clone - A Full-Stack Social Media App",
    des: "A fully functional Instagram clone built with Next.js, Tailwind CSS, Prisma, and Socket.io. Features include real-time messaging, authentication, post sharing, and more.",
    img: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1742709550/instagram-ds_xvaopf.webp",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/prisma.svg",
      "/socket.svg",
    ],
    link: "https://instagram-bd.vercel.app/",
  },
  {
    id: 2,
    title: "Ai Prompt selling app",
    des: "A dynamic platform where users can create, customize, and upload forms for sale. Buyers can browse, purchase, and download forms for various needs.",
    img: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1742710436/hd_nvrb4g.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pormt-selling.vercel.app/",
  },
  {
    id: 4,
    title: "Darul Ihsan Cadet Madrasa Website",
    des: "A modern and responsive Madrasa website providing admission details, academic activities, and other essential information.",
    img: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1742712033/7de5b89d-0bba-4da3-aadb-8222022d9db8_ptdybt.webp", // Replace with your actual image link
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.svg", "/prisma.svg"],
    link: "https://your-madrasa-website-link.com", // Add live link if available
  },

  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "We are absolutely delighted with the website you have created for our madrasa! It perfectly captures the essence of our institution and provides a seamless, user-friendly experience. The design is modern yet maintains the traditional values we cherish. Your hard work, attention to detail, and dedication are truly remarkable. This website will be a great asset for our students, teachers, and community. We sincerely appreciate your effort and professionalism. Thank you for delivering such an outstanding platform!",
    title: "Director of Darul Ihsan Cadet Madrasa",
    name: "Kazi Md Hafiz Uddin-Limon",
    image:
      "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741847749/483593369_1036102368327903_8000179895354208126_n_c9rkev.jpg",
  },
  {
    quote:
      "I am extremely satisfied with the software you developed for my shop! It has made managing accounts so much easier and more efficient. Tracking sales, expenses, and inventory is now seamless, saving me both time and effort. The user-friendly interface and smooth functionality have greatly improved my business operations. Your dedication and expertise truly shine through in this software. Thank you for providing such a valuable solution!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image:
      "https://res.cloudinary.com/dfng3w9jm/image/upload/v1738854193/profile/285636603_10209475645083898_8206659727678614489_n_kw8sbk.jpg",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
