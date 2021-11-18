<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container mx-auto mb-12">
      <Header title="Schnellzugriffe" description="Aktuelle Schnellzugriffe." titleColor="text-green-400"></Header>
      <div class="justify-center">

        <div v-if="showLess">
          <div class="flex flex-col gap-5 mx-5 outline-none min-w-screen animated fadeIn faster focus:outline-none">
            <div v-for="shortlink in shortlinks.slice(0, 3)" :key="shortlink.id">
              <div v-show="shortlink.todayImportant == true">
                <ShortLinkCard :name="shortlink.name" :icon="shortlink.icon" :url="shortlink.url" :description="shortlink.description" :todayImportant="shortlink.todayImportant"></ShortLinkCard>
              </div>
            </div>
          </div>
        </div>

        <div v-else> 
          <div class="flex flex-col gap-5 mx-5 outline-none min-w-screen animated fadeIn faster focus:outline-none">
            <div v-for="shortlink in shortlinks" :key="shortlink.id">
              <div v-show="shortlink.todayImportant == true">
                <ShortLinkCard :name="shortlink.name" :icon="shortlink.icon" :url="shortlink.url" :description="shortlink.description"></ShortLinkCard>
              </div>
            </div>
          </div>
        </div> 

        <button
          class="inline-flex items-center justify-center mx-6 mt-3 text-center text-purple-400"
          @click="showLess = false; showButton = false;"
          v-show="showButton == true"
          >Mehr Links anzeigen
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>

import Header from './Header';
import shortlinks from '../data/shortlinks.js';
import ShortLinkCard from './cards/ShortLinkCard'

export default {

  name: "Features",
  
  data: function() {
    return {
        shortlinks: shortlinks,
        showLess: true,
        showButton: true,
    };
  },
  
  components: {
    Header,
    ShortLinkCard
  }
};
</script>
