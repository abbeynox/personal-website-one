import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("social-"),
    name: "Mastodon",
    url: "https://yao.earth/mastodon",
    icon: "fab fa-mastodon",
  },
  {
    id: uniqueId("social-"),
    name: "Github",
    url: "https://yao.earth/github",
    icon: "fab fa-github",
  },
  {
    id: uniqueId("social-"),
    name: "Linkedin",
    url: "https://yao.earth/linkedin",
    icon: "fab fa-linkedin",
  },
  {
    id: uniqueId("social-"),
    name: "Email",
    url: "mailto:yao@ywk.ch",
    icon: "fas fa-envelope",
    isEmail: true
  },
  
];
export default data;
