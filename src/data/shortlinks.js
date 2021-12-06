import uniqueId from "lodash.uniqueid";

const data = [
    {
    id: uniqueId("shortlink-"),
    name: "BBW Stundenplan",
    url: "https://yao.earth/stundenplan",
    description: "Exklusiver Stundenplan für die Klassen in meiner Berufsschule.",
    todayImportant: true
    },  
  {
    id: uniqueId("shortlink-"),
    name: "Alle Links",
    url: "https://yao.earth/links",
    description: "Gelange direkt zu meinen Social Media Accounts, Kontaktmöglichkeiten oder wichtigen Links.",
    todayImportant: true
    
  },
  {
    id: uniqueId("shortlink-"),
    name: "Über mich",
    url: "https://yao.earth/about",
    description: "Ich möchte mich gerne vorstellen, damit ihr mich besser kennenlernt. Erfahre hier mehr über die Technologien, welche ich brauche und meinen Lieblingssongs.",
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
    name: "CV Download",
    url: "https://yao.earth/cv",
    description: "Lade hier direkt meinen Lebenslauf herunter.",
    todayImportant: true,
    
  }, 
];
export default data;
