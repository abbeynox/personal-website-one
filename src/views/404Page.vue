<template>
  <div>
    <Header
      v-show="this.$route.query.error == undefined"
      title="404 - Not found"
      description="Diese Seite wurde nicht gefunden."
      text="Du befindest dich an einem seltsamen Ort. Hast du dich eventuell vertippt? Überprüfe die URL und versuche es nochmals."
    ></Header>

    <Header
      v-show="this.$route.query.error !== undefined && this.errorInfo == true"
      id="errorInfo"
      title="404 - Not found"
      description="Diese Seite wurde nicht gefunden."
      :text="this.$route.query.error"
    ></Header>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "404Page",
  title: "404 - Nicht gefunden",
  components: {
    Header,
  },
  data() {
    return {
      errorInfo: true,
    };
  },
};
</script>
