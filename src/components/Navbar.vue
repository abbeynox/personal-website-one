<template>
  <div>
    <header class="text-gray-400 bg-black body-font">
      <div
        class="
          container
          flex flex-col flex-wrap
          items-center
          p-5
          mx-auto
          md:flex-row
        "
      >
        <a
          class="
            flex
            items-center
            mb-4
            font-medium
            text-white
            title-font
            md:mb-0
          "
        >
          <img
            class="w-10 h-10 text-white p-0.5 bg-red-600 rounded-full"
            src="../assets/abbey-large.png"
          /> 
          
          <span class="ml-3 text-xl">abbeynox</span>
        </a>

        <nav
          class="
            flex flex-wrap
            items-center
            justify-center
            text-base
            md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700
          "
        >
          <router-link class="mr-5 hover:text-red-600" to="/">home</router-link>
          <router-link class="mr-5 hover:text-red-600" to="projects">projects</router-link
          >
          <router-link class="mr-5 hover:text-red-600" to="links">links</router-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import AnimatedRainbow from './lib/pride/AnimatedRainbow.vue';
export default {
  name: "TopNav",
  components: {
    AnimatedRainbow
  },
};
</script>
