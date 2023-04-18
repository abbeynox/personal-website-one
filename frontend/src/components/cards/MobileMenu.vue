<!-- Ursprüngliches Template: https://go.ywk.ch/twmobilemenu -->

<template>
  <div>
    <transition name="slide" leave-active-class="animated bounceOutRight"> 
    <div
      v-show="menuOpen" 
      class="fixed inset-x-0 bottom-0 z-40 w-full h-64 bg-gray-800 rounded-t-lg translate-y-60 md:hidden"
    >
      <div>
        <div class="grid grid-cols-3 gap-4 justify-items-center">
          <div>
            <a
              href="/frontend/public"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl fas fa-home"></i>
                <span class="block pb-2 text-xs">Home</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="/projects"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl fas fa-paint-roller"></i>
                <span class="block pb-2 text-xs">Projects</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="/about"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl fas fa-user-circle"></i>
                <span class="block pb-2 text-xs">About me</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="/links"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl fas fa-link"></i>
                <span class="block pb-2 text-xs">Links</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="/stundenplan"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl far fa-calendar-alt"></i>
                <span class="block pb-2 text-xs">Timetable</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="/mastodon"
              class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 hover:text-purple-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <i class="block pt-1 mb-1 text-2xl fab fa-mastodon"></i>
                <span class="block pb-2 text-xs">Mastodon</span>
                <span
                  class="block w-5 h-1 mx-auto rounded-full hover:bg-purple-500"
                ></span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
    </transition>

    <div class="fixed bottom-0 right-0 z-50 visible w-16 h-16 md:invisible">
      <div class="relative">
        <button
          @click="menuOpen = !menuOpen"
          v-click-outside="onClickOutside"
          class="text-gray-400 transition duration-100 ease-in-out fill-current hover:text-purple-500"
        >
          <svg
            :class="(menuOpen)?'duration-300 transform rotate-45':' duration-300 transform rotate-0'"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

export default {
  name: "mobile menu",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    onClickOutside() {
      this.menuOpen = false;

    },
  },
};

</script>

<style scoped>
.slide-leave-active {
  transition: 0.25s;
}
.slide-enter-active {
  transition: 0.25s;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}
</style>
