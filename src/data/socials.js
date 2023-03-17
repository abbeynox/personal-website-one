import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("social-"),
    name: "Mastodon",
    url: "/mastodon",
    icon: "fab fa-mastodon",
  },
  {
    id: uniqueId("social-"),
    name: "Github",
    url: "/github",
    icon: "fab fa-github",
  },
  {
    id: uniqueId("social-"),
    name: "Linkedin",
    url: "/linkedin",
    icon: "fab fa-linkedin",
  },
  {
    id: uniqueId("social-"),
    name: "Email",
    url: "mailto:me@abbeynox.com",
    icon: "fas fa-envelope",
    isEmail: true
  },
  
];
export default data;
