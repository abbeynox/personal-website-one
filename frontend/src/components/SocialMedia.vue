<template>
  <div>
    <Header
      title="Social Media"
      description="Join the #Fediverse."
      text="Social Media shouldn't be centralized managed by big tech companies. You shouldn't be a product of capitalists, who don't care about your personal data. That's why I joined the Fediverse. The Fediverse (composed of 'federation' and 'universe') is an ensemble of federated (i.e. interconnected) servers that are used for web publishing (i.e. social networking, microblogging, blogging, or websites) and file hosting, but which, while independently hosted, can communicate with each other. I will soon open an separate page, to explain more about that."
      titleColor="text-pink-400"
    ></Header>
    <div class="container px-5 pb-1 mx-auto -mt-10">
      <div data-fade="6" class="flex flex-wrap gap-4 gap-y-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fediverse.info/"
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
          ><span>Learn more</span></a
        >
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://blog.yao.earth/das-fediverse-bessere-alternative-zu-herkommlichen-social-media-apps"
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
            <path
              d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"
            ></path></svg
          ><span>Read my blog post</span></a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "SocialMedia",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
