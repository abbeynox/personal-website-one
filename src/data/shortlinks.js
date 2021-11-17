import uniqueId from "lodash.uniqueid";

const data = [
    {
    id: uniqueId("shortlink-"),
    name: "Stundenplan",
    url: "https://yao.earth/stundenplan",
    description: "Exklusiver Stundenplan für die Klassen in meiner Berufsschule.",
    todayImportant: true
    },  
  {
    id: uniqueId("shortlink-"),
    name: "Alle Links",
    url: "https://yao.earth/links",
    description: "Gelange direkt zu meinen Social Media Accounts, Kontaktmöglichkeiten oder CV.",
    todayImportant: true
    
  },
  {
    id: uniqueId("shortlink-"),
    name: "Meine Projekte",
    url: "https://yao.earth/projects",
    description: "Egal ob auf der Arbeit oder in meiner Freizeit. Ein Projekt habe ich immer am laufen. Hier eine Liste an Projekten, die ich selbst gestartet habe.",
    todayImportant: true,
    
  }, 
  {
    id: uniqueId("shortlink-"),
    name: "Über mich",
    url: "https://yao.earth/about",
    description: "Du hast vielleicht schon bereits etwas über mich gelesen. Ich möchte mich gerne vorstellen, damit ihr mich besser kennenlernt.",
    todayImportant: true
    
  }, 
];
export default data;
