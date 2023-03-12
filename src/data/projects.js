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
    name: "Zork of The Wild",
    description: "Console Game with Java, based on 'The Legends of Zelda'-Series from Nintendo.",
    status: "NEW",
    url: "https://github.com/abbeynox/ZorkOfTheWild",
    icon: "fas fa-dice",
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
    name: "TrainQuiz",
    description:
      "Random Questions about trains, based on Java Spring Boot API and MongoDB.",
    url: "https://github.com/abbeynox/trainquiz-backend",
    icon: "fas fa-train",
  },
  {
    id: uniqueId("project"),
    name: "Flightticket Generator",
    description:
      "This website allows you to generate fictitious airline tickets with PDF417 codes.",
    icon: "fas fa-plane",
    url: "https://github.com/abbeynox/pdf417-generator"
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
