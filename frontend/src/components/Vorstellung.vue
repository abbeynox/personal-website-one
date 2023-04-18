<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container flex flex-col items-center mx-auto md:flex-row">
      <div
        class="
          flex flex-col
          items-center
          mx-5
          text-lg text-left
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16 md:items-start md:mb-4
        "
      >
        <p class="text-lg">
          Hello! I'm Abbey and {{ age }} years old. Where should I begin.. I was excited about computers
          and the Internet very early. But I really started programming only in
          April 2020, exactly at the time when the exactly at the time when the
          Corona pandemic started. Besides programming I am interested in queer and net
          activism - this includes especially privacy and security on the
          internet. On this website I have concisely summarized some things
          about me. I would like to share my experiences with you and wish you a
          lot of fun on my website.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import day from "dayjs";
const birthday = day("6 June 2004");
const age = Math.abs(
  new Date(Date.now() - birthday.toDate().getTime()).getUTCFullYear() - 1970
);

export default {
  name: "Vorstellung",
  created() {
    this.age = age;
  },
};
</script>
