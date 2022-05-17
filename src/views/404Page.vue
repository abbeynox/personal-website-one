<template>
  <div>
    <Header
      v-show="this.$route.query.error == undefined"
      title="404 - Not found"
      description="This page was not found."
      text="You are in a strange place. Maybe you mistyped the URL? Check the URL and try again."
    ></Header>

    <Header
      v-show="this.$route.query.error !== undefined && this.errorInfo == true"
      id="errorInfo"
      title="404 - Not found"
      description="This page was not found."
      :text="this.$route.query.error"
    ></Header>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "404Page",
  title: "404 - Not found",
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
