import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("project-"),
    name: "yao.earth",
    description:
      "Auch diese Website gehört zu meinen Projekten. Geschrieben wurde sie mit Vue.js und Tailwind CSS.",
    icon: "fas fa-globe-americas",
  },
  {
    id: uniqueId("project-"),
    name: "Passwort Generator",
    description: "Auf dieser Website kann man ein sicheres Passwort generieren lassen. Völlig kostenlos und unkompliziert.",
    url: "https://passwort.ywk.ch",
    icon: "fas fa-key",
  },
  {
    id: uniqueId("project-"),
    name: "SakumoBot",
    description: "Ein Discord Administrations- und Nützlichkeits-Bot. Programmiert mit Python mithilfe des discord.py Frameworks.",
    icon: "fab fa-discord",
  },
  {
    id: uniqueId("project-"),
    name: "Rlnk.be",
    description: "Eine URL Shortener Website, geschrieben mit Node.js.",
    url: "https://rlnk.be",
    icon: "fas fa-link",
  },
  {
    id: uniqueId("project-"),
    name: "IntraGalaxia",
    description:
      "Starte deine Rakete und schütze die Erde vor Meteoridenschwärme. Ein Spiel für iOS und Android.",
    url: "https://intragalaxia.com",
    icon: "fas fa-rocket",
  },
  {
    id: uniqueId("project"),
    name: "Shortcut Practicer",
    description:
      "Eine Plattform, auf der man wichtige Tastaturkürzel üben kann.",
    icon: "fas fa-keyboard",
    status: "in Planung",
  },
  {
    id: uniqueId("project"),
    name: "Mehr Projekte",
    description:
      "Weitere Projekte sind auf meinem Github Account aufgeführt",
    url: "https://yao.earth/github"
  },
];
export default data;
