<template>
  <div id="app">
    <main class="mx-0 text-gray-400 bg-black md:mx-56">
      <TopNav v-show="$route.name !== 'links'"></TopNav>
      <MobileMenu/>

      <!-- Fügt Navigationsleiste ein -->
      <transition name="view" appear>
        <!-- Erstellt die "smoothe" Animation -->
        <router-view></router-view>
        <!-- Passt sich individuell an einer in Router definierten Seite an -->
      </transition>
      <Footer v-show="$route.name !== 'links'"></Footer>
    </main>
  </div>
</template>

<script type="text/javascript">
import TopNav from "./components/Navbar";
import Footer from "./components/Footer";
import MobileMenu from "./components/cards/MobileMenu";

export default {
  // Registriert Komponente
  name: "App",

  components: {
    TopNav,
    Footer,
    MobileMenu
  },
  mounted() {

  },

  /*methods: {
    init() {
      console.log(this.$route); //should return object
      console.log(this.$route.params); //should return object
      console.log(this.$route.params.id); //should return id of URL param
    },
    scrollTo() {
      if (this.$route.query.scrollto != undefined) {
        const scrollPage = document.getElementById(this.$route.query.scrollto);
        if (scrollPage != null) {
          scrollPage.ScrollIntoView({ behavior: "smooth" });
          console.log(
            "Diese Seite wird zu " +
              this.$route.query.scrollto +
              " heruntergescrollt."
          );
        } else {
          console.log(
            "Das Query stimmt gar nicht mit der ID des Komponenten überein."
          );
          this.$router.replace("/");
        }
      } else {
        console.log("Es konnte kein Query gefunden werden.");
      }
    },
  },*/
};
</script>

<style>
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
