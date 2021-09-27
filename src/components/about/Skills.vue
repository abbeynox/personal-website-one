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

        <div v-for="skill in skills" :key="skill.id" class="flex flex-wrap">
          <SkillCard :name="skill.name" :icon="skill.icon"></SkillCard>
        </div>    

        <router-link
          class="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600" to="/github" tag="button">
          Mehr Statistken auf Github
        </router-link>
      </div>


    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard";
import uniqueId from 'lodash.uniqueid';

export default {
  name: "Skills",
  data: function() {
    return {
        skills: [
          { id: uniqueId('skill-'), name: 'Vue.js', icon: 'fab fa-vuejs' },
          { id: uniqueId('skill-'), name: 'JavaScript', icon: 'fab fa-js' },
          { id: uniqueId('skill-'), name: 'React.js', icon: 'fab fa-react' },
          { id: uniqueId('skill-'), name: 'NPM', icon: 'fab fa-npm' },
          { id: uniqueId('skill-'), name: 'Java', icon: 'fab fa-java' },
          { id: uniqueId('skill-'), name: 'Bootstrap', icon: 'fab fa-bootstrap' },
          { id: uniqueId('skill-'), name: 'Python', icon: 'fab fa-python' },
          { id: uniqueId('skill-'), name: 'HTML 5', icon: 'fab fa-html5' },
          { id: uniqueId('skill-'), name: 'Frontend' }
        ]
    };
  },
  components: {
    SkillCard,
  },
};
</script>
