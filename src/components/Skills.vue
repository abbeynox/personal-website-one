<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container mx-auto">
      <div class="mb-20">
        <Header title="Skills" description="Meine Lieblings-Technologien." text="Ich benutze vielfältige Tools für meine Projekte, hier habe ich einige davon aufgelistet." titleColor="text-blue-400"></Header>

        <div class="grid grid-cols-1 m-4 md:gap-5 md:grid-cols-3 md:m-auto">
          <div v-for="skill in skills" :key="skill.id">
            <SkillCard :name="skill.name" :icon="skill.icon" :rate="skill.rate" :starsArray="skill.starsArray"></SkillCard>   
          </div> 
        </div>

      </div>

      <div class="inline-block align-middle">
        <a
          class="px-8 py-2 mx-4 mt-16 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600" target="_blank" href="https://cloud.ywk.ch/s/aiCtgYKq8BNbrCZ" tag="button">
         <BaseIcon name="fas fa-file-download" /> Mein CV herunterladen 
        </a>
      </div>



    </div>
  </section>
</template>

<script>
import SkillCard from "./cards/SkillCard";
import skills from '../data/skills.js';
import Header from './Header';
import BaseIcon from './lib/BaseIcon.vue';

export default {
  name: "Skills",
  data: function() {
    return {
        skills: skills
    };
  },
  components: {
    SkillCard,
    Header,
    BaseIcon
  }
};
</script>
