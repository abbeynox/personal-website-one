<template>
  <div>
    <div class="container content-center px-5 pt-10 pb-10 mx-auto">
      <div class="flex flex-col content-center w-full text-center md:m-1">
        <img
          class="w-40 h-40 p-1 m-5 mx-auto text-white bg-red-600 rounded-full"
          alt="hero"
          src="https://avatars.githubusercontent.com/u/74461477"
        /> 
        <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">
          @abbeynox
        </h1>
        <p class="text-xl text-white font-semibold mb-4">
          <a href="https://www.youtube.com/watch?v=aGPcjzBbHuI" target="_blank">
              <span class="inline-block border-b-2 border-red-600">Make racists afraid again!</span>
          </a>
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
import LinkCard from "../components/cards/LinkCard";
import links from "../data/links.js";
import Notification from "../components/lib/Notification";

export default {
  name: "LinksPage",
  title: "Links",
  data: function () {
    return {
      links: links,
    };
  },
  components: {
    LinkCard,
    Notification,
  }
};
</script>
