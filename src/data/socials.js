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
    name: "Email",
    url: "mailto:me@abbeynox.com",
    icon: "fas fa-envelope",
    isEmail: true
  },
  {
    id: uniqueId("social-"),
    name: "Twitter",
    url: "/twitter",
    icon: "fab fa-twitter",
  },
  {
    id: uniqueId("social-"),
    name: "Instagram",
    url: "/instagram",
    icon: "fab fa-instagram",
  },
  
];
export default data;
