<template>
  <div>
    <Header
      title="Stundenplan"
      description="Für Donnerstag (Berufsschule)"
    ></Header>

    <MenuButton></MenuButton>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-b border-gray-700 shadow sm:rounded-lg"
          >
            <table class="divide-y divide-gray-200 table-fixed ">
              <thead class="bg-gray-900">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase w-1/8"
                  >
                    Zeiten
                  </th>
                  <th
                    scope="col"
                    class="w-1/2 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Fach
                  </th>
                  <th
                    scope="col"
                    class="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Zimmer
                  </th>
                  <th
                    scope="col"
                    class="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Lehrer
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Weitere Infos</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-800 divide-y divide-gray-200">
                <tr v-for="subject in subjects" :key="subject.name">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-white">
                      {{ subject.startTime }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ subject.endTime }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-1">
                        <div class="text-sm font-medium text-white">
                          {{ subject.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ subject.subName }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >
                      {{ subject.room }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-white whitespace-nowrap">
                    {{ subject.teacher }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                  >
                    <a v-show="subject.test == true" href="#" class="text-red-500 hover:text-red-800"
                      >Test</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import subjects from "../../data/subjects.js";
import MenuButton from "../../components/lib/MenuButton";

export default {
    name: 'Timetable',
    title: 'Stundenplan',
    data() {
        return {
        subjects,
        };
    },
    components: {
        Header,
        MenuButton
    },
};
</script>
