<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="mb-20 text-center">
        <h1
          class="mb-4 text-2xl font-medium text-center text-white sm:text-3xl title-font"
        >
          💻Erfahrungen
        </h1>
        <p class="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
          Ich benutze vielfältige Tools für meine Projekte, hier habe ich einige
          davon aufgelistet.
        </p>

        <br>

        <div v-for="skill in skills" :key="skill.id" class="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          <SkillCard :name="skill.name" :icon="skill.icon" :stars="skill.stars" :starsArray="skill.starsArray"></SkillCard>   
        </div> 

        <router-link
          class="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600" to="/github" tag="button">
          Mein CV herunterladen 
        </router-link>
      </div>


    </div>
  </section>
</template>

<script>
import SkillCard from "./cards/SkillCard";
import skills from '../data/skills.js'

export default {
  name: "Skills",
  data: function() {
    return {
        skills: skills
    };
  },
  components: {
    SkillCard
  },
};
</script>
