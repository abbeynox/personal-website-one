<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container mx-auto">
      <div class="mb-20">
        <Header
          title="Skills"
          description="My favorite technologies."
          text="I use many different tools for my projects, here I have listed some of them."
          titleColor="text-blue-400"
        ></Header>

        <div class="grid grid-cols-1 m-4 md:gap-5 md:grid-cols-3 md:m-auto">
          <div v-for="skill in skills" :key="skill.id">
            <SkillCard
              :name="skill.name"
              :icon="skill.icon"
              :rate="skill.rate"
              :starsArray="skill.starsArray"
            ></SkillCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "./cards/SkillCard";
import skills from "../data/skills.js";
import Header from "./Header";

export default {
  name: "Skills",
  data: function () {
    return {
      skills: skills,
    };
  },
  components: {
    SkillCard,
    Header,
  },
};
</script>
