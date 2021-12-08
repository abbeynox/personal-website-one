import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("link-"),
    name: "Meine Website",
    url: "https://yao.earth",
    icon: "fas fa-globe-americas",
    fromColor: "purple-600",
    toColor: "purple-900",
  },
  {
    id: uniqueId("link-"),
    name: "CV",
    url: "https://yao.earth/cv",
    icon: "fas fa-file-pdf",
  },
  {
    id: uniqueId("link-"),
    name: "Twitter",
    url: "https://yao.earth/twitter",
    icon: "fab fa-twitter",
    fromColor: "blue-400",
    toColor: "blue-700"
  },
  {
    id: uniqueId("link-"),
    name: "Linkedin",
    url: "https://yao.earth/linkedin",
    icon: "fab fa-linkedin",
    fromColor: "blue-600",
    toColor: "blue-800"
  },
  {
    id: uniqueId("link-"),
    name: "Blog",
    url: "https://blog.yao.earth",   
    icon: "fas fa-rss",
  },
  {
    id: uniqueId("link-"),
    name: "GitHub",
    url: "https://yao.earth/github",
    icon: "fab fa-github",
    fromColor: "gray-800",
    toColor: "gray-900"
  },
  {
    id: uniqueId("link-"),
    name: "Discord",
    url: "https://yao.earth/discord",
    icon: "fab fa-discord",
    fromColor: "gray-700",
    toColor: "gray-800"
  },
];
export default data;
