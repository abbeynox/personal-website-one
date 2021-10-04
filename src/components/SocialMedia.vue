<template>
	<div class="grid px-20 mx-auto space-y-10 place-items-center sm:my-auto">
    <div class="flex items-center justify-center space-x-3">
      <div v-for="social in socials" :key="social.id">
        <SoMediaIcon
          :tooltip="social.tooltip"
          :icon="social.icon"
          :url="social.url"
        ></SoMediaIcon>
      </div>
    </div>
  </div>
</template>

<script>
import SoMediaIcon from "./lib/SoMediaIcon.vue";
import socials from "../data/socials.js";

export default {
  name: "SocialMedia",
  data: function() {
    return {
      socials: socials,
    };
  },
  components: {
    SoMediaIcon,
  },
};
</script>
