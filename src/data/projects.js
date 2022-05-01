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
    name: "YWK Cloud",
    description: "Auf Plesk habe ich mittels NextCloud einen Cloud Server aufgesetzt. Auf dieser zentralen Stelle werden auch alle Projektdateien gespeichert und Dokumente wie mein CV geteilt.",
    url: "https://cloud.ywk.ch",
    icon: "fas fa-cloud",
  },
  {
    id: uniqueId("project-"),
    name: "SakumoBot",
    description: "Ein Discord Administrations- und Nützlichkeits-Bot. Programmiert mit Python und dem discord.py Framework.",
    icon: "fab fa-discord",
  },
  {
    id: uniqueId("project-"),
    name: "Rlnk.be",
    description: "Eine URL Shortener Website, geschrieben mit Node.js und Bootstrap für das User Interface.",
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
    name: "Flightticket Generator",
    description:
      "Auf dieser Website kann man fiktive Flugtickets mit PDF417 Codes generieren.",
    icon: "fas fa-plane",
    url: "https://github.com/kaiseryao/pdf417-generator"
  },
  {
    id: uniqueId("project"),
    name: "Verben Trainer (Verbify)",
    description:
      "Eine Plattform, auf der man französische Verbformen üben kann.",
    icon: "fas fa-language",
    status: "In Entwicklung",
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
