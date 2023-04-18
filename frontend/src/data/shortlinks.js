import uniqueId from "lodash.uniqueid";

const data = [
    {
    id: uniqueId("shortlink-"),
    name: "BBW Stundenplan",
    url: "/stundenplan",
    description: "Exklusiver Stundenplan für die Klassen in meiner Berufsschule.",
    todayImportant: true
    },  
  {
    id: uniqueId("shortlink-"),
    name: "Blog",
    url: "https://blog.yao.earth",
    description: "Erfolgserlebnisse, meine Meinung zu neuen Technologien und Cybersecurity Tipps findest du auf meinem Blog.",
    todayImportant: true
    
  },
  {
    id: uniqueId("shortlink-"),
    name: "Über mich",
    url: "/about",
    description: "Ich möchte mich gerne vorstellen, damit ihr mich besser kennenlernt. Erfahre hier mehr über die Technologien, welche ich brauche und meinen Lieblingssongs.",
    todayImportant: true
    
  }, 
  {
    id: uniqueId("shortlink-"),
    name: "Meine Projekte",
    url: "/projects",
    description: "Egal ob auf der Arbeit oder in meiner Freizeit. Ein Projekt habe ich immer am laufen. Hier eine Liste an Projekten, die ich selbst gestartet habe.",
    todayImportant: true,
    
  }, 
];
export default data;
