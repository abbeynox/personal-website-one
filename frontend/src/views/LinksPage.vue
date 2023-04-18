<template>
  <div>
    <div class="container content-center px-5 pt-10 pb-10 mx-auto">
      <div class="flex flex-col content-center w-full text-center md:m-1">
        <img
          class="w-40 h-40 p-1 m-5 mx-auto text-white bg-purple-500 rounded-full"
          alt="hero"
          src="https://avatars.githubusercontent.com/u/74461477"
        /> 
        <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">
          {{ name }}
        </h1>
        <p class="text-xl text-purple-500 font-semibold mb-4">
            <span class="inline-block border-b-2 border-purple-500">he/him</span>
        </p>
      </div>
    </div>

    <div class="container mx-auto mb-10">
      <div v-for="link in links" :key="link.id" class="flex flex-wrap m-2">
        <LinkCard
          :name="link.name"
          :url="link.url"
          :icon="link.icon"
          :toColor="link.toColor"
          :fromColor="link.fromColor"
          :viaColor="link.viaColor"
        ></LinkCard>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import LinkCard from "../components/cards/LinkCard.vue";
import Notification from "../components/lib/Notification.vue";

export default {
  name: "LinksPage",
  title: "Links",
  data: function () {
    return {
      links: [],
      name: "",
    };
  },
  created() {
    this.getInfo();
    this.fetchLinks();
  },
  components: {
    LinkCard,
    Notification,
  },
  methods: {
    getInfo() {
      if (this.$domain == "abbeynox.com") {
        this.name = "Abbey Nox";
      } else {
        this.name = "Yao Kaiser";
      }
      return this.name;
    },
    async fetchLinks() {
      try {
        const response = await fetch("/api/links");
        if (!response.ok) {
          throw new Error("Failed to fetch links");
        }
        const data = await response.json();
        this.links = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
