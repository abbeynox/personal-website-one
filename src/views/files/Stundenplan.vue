<template>
  <div>
    <Header
      title="Stundenplan"
      description="Exklusiv für die Klassen 5IA21b & 6MT21k"
    ></Header>

    <MenuButton
      :schoolClass="schoolClass"
      :activeDay="activeDay"
      @setDay="setDay($event)"
    ></MenuButton>

    <div class="flex items-center justify-center min-h-screen">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="col-span-12">
            <div class="overflow-hidden lg:overflow-visible ">
              <table
                class="table space-y-6 text-sm text-gray-400 border-separate"
              >
                <thead class="text-gray-500 bg-gray-800">
                  <tr>
                    <th class="p-3 text-left">Zeiten</th>
                    <th class="p-3 text-left">Fach</th>
                    <th class="p-3 text-left">Zimmer</th>
                    <th class="p-3 text-left">Lehrer</th>
                    <th class="p-3 text-left">Weiteres</th>
                  </tr>
                </thead>
                <tbody v-for="subject in subjects" :key="subject.id">
                  <TableCard
                    :day="subject.day"
                    :name="subject.name"
                    :subName="subject.subName"
                    :startTime="subject.startTime"
                    :endTime="subject.endTime"
                    :room="subject.room"
                    :teacher="subject.teacher"
                    :test="subject.test"
                    :showModal ="subject.showModal"
                  ></TableCard>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import dayjs from 'dayjs'
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

dayjs.extend(utc)
dayjs.extend(timezone)

let now = dayjs().tz("Europe/Berlin")


import Header from "../../components/Header";
import subjects1 from "../../data/subjects.js";
import subjects2 from "../../data/subjects2.js";
import MenuButton from "../../components/lib/MenuButton";
import TableCard from "../../components/TableCard";
var subjects = null;
export default {
  name: "Timetable",
  title: "Stundenplan",
  methods: {
    setDay (supposedDay) {
      this.activeDay = supposedDay;
      //console.log("selected " + supposedDay + " sucessfully. Der activeDay ist " + this.activeDay);
      if (this.activeDay == "Donnerstag") {
        this.schoolClass = "5IA21b";
        this.subjects = subjects1;

      } else if (this.activeDay == "Freitag") {
        this.schoolClass = "6MT21k";
        this.subjects = subjects2;

      } else {
        this.schoolClass = "not found";
        console.log("Tag nicht gefunden")
      }
    }
  },
  data() {
      subjects = subjects1;
      return {
        subjects,
      };
  },
  created() { // On load Funktion
    
    this.now = now;
    let today = now.format("ddd");
    let time = now.format("HH:mm");
    console.log(today);
    console.log(time);
    if(today == "Thu"){
      this.setDay("Donnerstag");
    } else if(today == "Fri"){
      this.setDay("Freitag");
    } else{
      this.setDay("Donnerstag");
    }

    
  },
  components: {
    Header,
    MenuButton,
    TableCard,
  },
    props: {
    activeDay: {
      type: String,
      required: true,
      default: "N/A",
    },
    schoolClass: {
      type: String,
      required: true,
      default: "N/A",
    },
  },
};
</script>

<style>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
