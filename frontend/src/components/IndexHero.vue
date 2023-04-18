<template>
  <div class="container mx-auto">
    <div class="flex flex-col w-full text-center">
      <Header
        title="Hey,"
        :description="'I\'m ' + name + '.'"
        :text="'I am a ' + age + ' year old software developer apprentice from Switzerland. Currently I focus on backend development with Java Spring Boot or Python Flask. On this website you can learn more about my skills, projects and free time.'"
      ></Header>
      <div class="container px-5 pb-1 mx-auto -mt-10">
        <div data-fade="6" class="flex flex-wrap gap-4 gap-y-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.abbeynox.com"
            class="
              inline-flex
              items-center
              gap-1
              text-sm
              font-medium
              md:text-base
              text-gray-600
              hover:text-gray-400
              focus:outline-none
              focus-visible:ring focus-visible:ring-primary-300
              transition-colors
              cursor-newtab
            "
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="96"
                height="96"
                x="96"
                y="112"
                fill="none"
                rx="16"
                ry="16"
              ></rect>
              <path
                d="M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z"
              ></path>
              <path
                d="M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z"
              ></path></svg
            ><span>Development Docs</span></a
          ><a
            target="_blank"
            rel="me noopener noreferrer"
            href="https://mastodon.social/@abbeynox"
            class="
              inline-flex
              items-center
              gap-1
              text-sm
              font-medium
              md:text-base
              group
              text-gray-600
              hover:text-gray-400
              focus:outline-none
              focus-visible:ring focus-visible:ring-primary-300
              transition-colors
              cursor-newtab
            "
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class="shrink-0 transition-colors group-hover:text-[#1da1f2]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 17.24c2.5-.3 4.69-1.84 5-3.25a33.59 33.59 0 0 0 .4-5.42C21.33 4.23 18.48 3 18.48 3A17.64 17.64 0 0 0 12 2a17.64 17.64 0 0 0-6.48 1S2.68 4.23 2.68 8.57v3.44c.1 4.24.78 8.42 4.7 9.46A14.73 14.73 0 0 0 12 22a9.21 9.21 0 0 0 3.54-.81l-.07-1.64A11.41 11.41 0 0 1 12 20c-1.8-.06-3.71-.19-4-2.4a4.26 4.26 0 0 1 0-.63 22.68 22.68 0 0 0 4 .54 23.6 23.6 0 0 0 4-.27zm-6.54-9.8q-1.35 0-1.35 1.62v5.1H6V8.9a3.78 3.78 0 0 1 .82-2.56 2.85 2.85 0 0 1 2.23-1 2.68 2.68 0 0 1 2.4 1.23l.52.87.52-.87a2.68 2.68 0 0 1 2.4-1.23 2.85 2.85 0 0 1 2.23 1A3.78 3.78 0 0 1 18 8.9v5.26h-2.11v-5.1q0-1.62-1.35-1.62c-1 0-1.51.64-1.51 1.92v2.79H11V9.36c0-1.28-.54-1.92-1.54-1.92z"></path></svg
            ><span>abbeynox@mastodon.social</span></a
          ><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/abbeynox"
            class="
              inline-flex
              items-center
              gap-1
              text-sm
              font-medium
              md:text-base
              text-gray-600
              hover:text-gray-400
              focus:outline-none
              focus-visible:ring focus-visible:ring-primary-300
              transition-colors
              cursor-newtab
            "
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class="shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path></svg
            ><span>abbeynox</span></a
          >
        </div>
      </div>
      <transition name="view" appear>
        <p
          class="mx-auto text-lg leading-relaxed text-gray-400 lg:w-2/3"
          v-show="
            this.$route.query.redirect !== undefined &&
            this.redirectInfo == true
          "
          id="redirectInfo"
        >
          {{ "➡️Redirected from " + this.$route.query.redirect + "" }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import day from "dayjs";

const birthday = day("6 June 2004");
name = "Abbey";
const age = Math.abs(
  new Date(Date.now() - birthday.toDate().getTime()).getUTCFullYear() - 1970
);

export default {
  name: "Hero",
  components: {
    Header,
  },
  data() {
    return {
      redirectInfo: true,
    };
  },
  created() {
    this.getName();
    setTimeout(() => (this.redirectInfo = false), 2000);
    this.age = age;
    this.name = name;
  },
  methods: {
    getName() {
      if (this.$domain == "abbeynox.com") {
        name = "Abbey";
      } else {
        name = "Yao";
      }
      return this.name;
    },
  },
};
</script>
