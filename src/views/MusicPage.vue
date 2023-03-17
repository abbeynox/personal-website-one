<template>
  <section class="text-gray-400 bg-black body-font">
    <Header
      title="Music"
      description="All about my music."
      text="Music received a very important role in my life. Here you can learn all about my favorite genres."
    />
    <TuneCard songTitle="Songtitel" artistName="Artist name" plays="3" rank="1" songUrl="https://ywk.ch/song1"/>
  </section>
</template>
<script>
import TuneCard from "../components/cards/TuneCard";
import Header from "../components/Header";
export default {
  name: "MusicPage",
  components: {
    Header,
    TuneCard,
  },
};
</script>
<style></style>
