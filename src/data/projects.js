import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("project-"),
    name: "yao.earth",
    description:
      "This website is also one of my projects. It was written with Vue.js and Tailwind CSS.",
    icon: "fas fa-globe-americas",
  },
  {
    id: uniqueId("project-"),
    name: "Password Generator",
    description: "On this website you can generate a secure password. Completely free of charge and uncomplicated.",
    status: "No longer supported",
    icon: "fas fa-key",
  },
    {
    id: uniqueId("project-"),
    name: "YWK Cloud",
    description: "I have set up a cloud server on Plesk using NextCloud. On this central place all project files are also stored and documents like my CV are shared.",
    url: "https://cloud.ywk.ch",
    icon: "fas fa-cloud",
  },
  {
    id: uniqueId("project-"),
    name: "SakumoBot",
    description: "A Discord administration and utility bot. Programmed with Python and the discord.py framework. It was my first bigger project.",
    icon: "fab fa-discord",
  },
  {
    id: uniqueId("project-"),
    name: "Rlnk.be",
    description: "An URL shortener website written with Node.js and Bootstrap for the user interface.",
    url: "https://rlnk.be",
    icon: "fas fa-link",
  },
  {
    id: uniqueId("project-"),
    name: "IntraGalaxia",
    description:
      "Launch your rocket and protect the earth from meteoroid swarms. A game for iOS and Android.",
    url: "https://intragalaxia.com",
    icon: "fas fa-rocket",
  },
  {
    id: uniqueId("project"),
    name: "Flightticket Generator",
    description:
      "This website allows you to generate fictitious airline tickets with PDF417 codes.",
    icon: "fas fa-plane",
    url: "https://github.com/kaiseryao/pdf417-generator"
  },
  {
    id: uniqueId("project"),
    name: "More Projects",
    description:
      "More projects are listed on my Github account.",
    url: "https://yao.earth/github"
  },
];
export default data;
