<template>
    <div class="relative h-auto my-3 tracking-wide bg-transparent border-2 border-gray-800 rounded-lg md:my-5 animate-pulse md:mx-1 md:w-2/3 justify-items-stretch md:mb-14 hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500">
      <a v-if="link != null" :href="link" target="_blank">
        <div class="absolute w-1 h-20 bg-orange-600 small-banner rounded-tl-md"></div>
        <div class="items-center">
          <span class="float-left pt-3 pl-4 font-mono text-4xl text-teal-800 bg-teal-100 rounded-full md:text-5xl align-center"><i :class="icon"></i></span>
          <div class="pt-3 pb-6 ml-16 md:ml-20">
            <h5 class="text-2xl font-semibold text-left text-white">{{ title }}</h5>
            <p class="text-left text-gray-400 text-md font-regular">{{ description }}</p>
          </div>
        </div>
      </a>

      <div v-else>
        <div class="absolute w-1 h-20 bg-purple-500 small-banner rounded-tl-md"></div>     
        <div class="items-center">
          <span class="float-left pt-3 pl-4 font-mono text-4xl text-teal-800 bg-teal-100 rounded-full md:text-5xl align-center"><i :class="icon"></i></span>
          <div class="pt-3 pb-6 ml-16 md:ml-20">
            <h5 class="text-2xl font-semibold text-left text-white">{{ title }}</h5>
            <p class="text-left text-gray-400 text-md font-regular">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    title: {
      type: String,
      required: true,
      default: "N/A",
    },
    description: {
      type: String,
      required: true,
      default: "N/A",
    },
    link: {
        type: String,
        required: false
    },
    icon: {
      type: String,
      required: true,
      default: "fas fa-exclamation-circle"
    }
  },
};
</script>
