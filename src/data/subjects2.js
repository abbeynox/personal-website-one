import uniqueId from "lodash.uniqueid";

const data = [
  
  {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "W&R",
      startTime: "7:35",
      endTime: "8:20",
      room: "A312",
      teacher: "DoOe",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "W&R",
      startTime: "8:25",
      endTime: "9:10",
      room: "A312",
      teacher: "DoOe",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Französisch",
      startTime: "9:15",
      endTime: "10:00",
      room: "A312",
      teacher: "LiGi",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Mathe",
      startTime: "10:20",
      endTime: "11:05",
      room: "A312",
      teacher: "BuLa",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Mathe",
      startTime: "11:10",
      endTime: "11:55",
      room: "A312",
      teacher: "BuLa",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Mittagspause",
      startTime: "12:00",
      endTime: "12:45",
      teacher: "",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Deutsch",
      subName: "",
      startTime: "12:55",
      endTime: "13:40",
      room: "A312",
      teacher: "SoMe",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Deutsch",
      startTime: "13:45",
      endTime: "14:30",
      room: "A312",
      teacher: "SoMe",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Englisch",
      startTime: "14:35",
      endTime: "15:20",
      room: "A312",
      teacher: "FiEs",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Englisch",
      startTime: "15:35",
      endTime: "16:20",
      room: "A312",
      teacher: "FiEs",
      test: false
    },
    {
      id: uniqueId("subject-"),
      day: "Freitag",
      name: "Mathe Workshop",
      startTime: "16:25",
      endTime: "17:10",
      room: "A312",
      teacher: "KlJü",
      test: false
    }
]; 

export default data;
