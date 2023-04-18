import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("link-"),
    name: "My Website",
    url: "/",
    icon: "fas fa-globe-americas",
    fromColor: "purple-600",
    toColor: "purple-900",
  },
  {
    id: uniqueId("link-"),
    name: "Threema ID",
    url: "/threema",
    icon: "fas fa-user-shield",
    fromColor: "gray-700",
    toColor: "gray-800"
  },
  {
    id: uniqueId("link-"),
    name: "Mastodon",
    url: "/mastodon",
    icon: "fab fa-mastodon",
    fromColor: "blue-400",
    toColor: "blue-700"
  },
  {
    id: uniqueId("link-"),
    name: "Linkedin",
    url: "/linkedin",
    icon: "fab fa-linkedin",
    fromColor: "blue-600",
    toColor: "blue-800"
  },
  {
    id: uniqueId("link-"),
    name: "GitHub",
    url: "/github",
    icon: "fab fa-github",
    fromColor: "gray-800",
    toColor: "gray-900"
  },

];
export default data;
 