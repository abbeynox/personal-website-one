<template>
  <div id="app">
    <main class="text-gray-400 bg-black">
      <TopNav v-show="$route.name !== 'links'"></TopNav>
      <!-- Fügt Navigationsleiste ein -->
      <transition name="view" appear>
        <!-- Erstellt die "smoothe" Animation -->
        <router-view></router-view>
        <!-- Passt sich individuell an einer in Router definierten Seite an -->
      </transition>
    </main>
  </div>
</template>

<script type="text/javascript">

  import TopNav from './components/Navbar';
  
  export default {  // Registriert Komponente
    name: 'App',

    components: {
      TopNav
    },

  }
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
