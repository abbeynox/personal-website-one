<template>
  <div class="container mx-auto">
    <div class="flex flex-col w-full text-center">
      <Header
        title="Hey,"
        description="I'm Yao."
        :text="'I am a ' + age + ' year old software developer apprentice from Switzerland. Currently I focus on frontend development with technologies like React. On this website you can learn more about my skills, projects and free time.'"
      ></Header>
      <div class="container px-5 pb-1 mx-auto -mt-10">
        <div data-fade="6" class="flex flex-wrap gap-4 gap-y-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cloud.ywk.ch/s/cv"
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
            ><span>CV</span></a
          ><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://yao.earth/twitter"
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
              <title></title>
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              ></path></svg
            ><span>@KaiserYao</span></a
          ><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaiseryao"
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
            ><span>kaiseryao</span></a
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
import Header from "../components/Header";
import day from "dayjs";

const birthday = day("6 June 2004");
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
    setTimeout(() => (this.redirectInfo = false), 2000);
    this.age = age;
  },
};
</script>
