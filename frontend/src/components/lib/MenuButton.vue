<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex items-center justify-center px-12 group">
    <div class="relative inline-block text-left dropdown">
      <span class="rounded-md shadow-sm"
        ><button
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-800 border border-gray-600 rounded-md  hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
          aria-controls="headlessui-menu-items-117"
        >
          <span>{{ activeDay }} ({{ schoolClass }})</span>
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg></button
      ></span>
      <div
        class="invisible transition-all duration-300 origin-top-right transform scale-95 -translate-y-2 opacity-0  dropdown-menu"
      >
        <div
          class="absolute right-0 w-56 mt-2 origin-top-right bg-gray-900 border border-gray-800 divide-y divide-gray-100 rounded-md shadow-lg outline-none "
          aria-labelledby="headlessui-menu-button-1"
          id="headlessui-menu-items-117"
          role="menu"
        >
          <div class="px-4 py-3">
            <p class="text-sm leading-5">{{ schoolClass }}</p>
            <p class="text-sm font-medium leading-5 text-white truncate">
              {{ activeDay }}
            </p>
          </div>
          <div class="py-1">
            <a
              v-on:click="setDay('Donnerstag')"
              tabindex="0"
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-400  hover:text-gray-200"
              role="menuitem"
              >Donnerstag</a
            >
            <a
              v-on:click="setDay('Freitag')"
              tabindex="1"
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-400  hover:text-gray-200"
              role="menuitem"
              >Freitag</a
            >
            <span
              role="menuitem"
              tabindex="-1"
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-600 opacity-50 cursor-not-allowed "
              aria-disabled="true"
              >Live Ansicht (soon)</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  methods: {
    setDay(supposedDay) {
      this.$emit("setDay", supposedDay);
    },
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
.dropdown:hover .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

.dropdown:click {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: hidden !important;
}
</style>
