<template>
  <div class="dropdown">
    <button class="pr-1 hover:text-white" @click="toggleDropdown" @mouseover="toggleDropdown">about me</button>
    <i class="fas fa-caret-down"></i>
    <div
      v-show="isOpen"
      @mouseleave="closeDropdown"
      ref="dropdown-items"
      class="dropdown-items absolute border border-white bg-black py-3 pl-4 pr-12 rounded mt-4 grid gap-3"
    >
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a class="hover:text-white" :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        { text: "music", href: "/music" },
        { text: "movies", href: "/movies" },
        { text: "setup", href: "/setup" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    },
    closeDropdown() {
        this.isOpen = false;
    },
  },
};
</script>
<style>
</style>