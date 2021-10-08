<template>
  <tr :class="(nowLesson)?'bg-gray-600':'bg-gray-800'"> <!-- ehem bg-gray-800-->
      
      <td class="p-3">
        <div class="flex align-items-center">
          <div class="ml-3">
            <div class="">{{ startTime }}</div>
            <div class="text-gray-500">{{ endTime }}</div>
          </div>
        </div>
      </td>

      <td class="p-3">
        <div class="flex flex-initial align-items-center">
          <div class="md:mr-12">
            <div class="">{{ name }}</div>
            <div class="text-gray-500">{{ subName }}</div>
          </div>
        </div>
      </td>

      <td class="p-3">
        <span  v-show="room != undefined" class="px-2 text-green-800 bg-green-100 rounded-full">{{
          room
        }}</span>
      </td>

      <td class="p-3 font-bold">
        {{ teacher }}
      </td>

      <td class="p-3 ">
        <a v-show="test == true" class="mx-2 text-gray-400 hover:text-gray-100">
          <i class="fas fa-pen"></i>
        </a>
      </td>

  </tr>

</template>

<script>
import dayjs from 'dayjs'
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var customParseFormat = require('dayjs/plugin/customParseFormat')
var isBetween = require('dayjs/plugin/isBetween')

dayjs.extend(isBetween)
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

const now = dayjs().tz("Europe/Berlin");
var nowTime = now.format("HH:mm");
let nowLesson;


export default {

  props: {
    name: {
      type: String,
      required: true,
    },
    subName: {
      type: String,
      required: false,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: false
    },
    teacher: {
      type: String,
      required: false,
    },
    test: {
      type: Boolean,
      required: true,
      default: false,
    },
    nowLesson: {
      type: Boolean
    }
  },
  created() { // On load Funktion
  
    console.log("Es ist " + nowTime);
    if(nowTime.isBetween(this.startTime, this.endTime)){
      nowLesson = true
      console.log("Lektion wurde auf " + nowLesson + " umgestellt")
    } else if(!(nowTime.isBetween(this.startTime, this.endTime))){
      nowLesson = false
      console.log("Zurzeit findet keine Lektion statt.")
    }
    else{
      nowLesson = false
      console.log("Bei der Zeitabfrage ist ein Fehler aufgetreten.")
    }
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
