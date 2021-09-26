<template>


    <header class="text-gray-400 bg-black body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img class="w-10 h-10 text-white p-0.5 bg-purple-500 rounded-full" alt="hero" src="../assets/YaoDev.jpg"> 
          <span class="ml-3 text-xl">yao</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <router-link class="mr-5 hover:text-white" to="/">home</router-link>
          <router-link class="mr-5 hover:text-white" to="projects">projekte</router-link>
          <router-link class="mr-5 hover:text-white" to="about">über mich</router-link>
        </nav>
      </div>
    </header>




</template>
    

<script>
export default {
    name: 'TopNav',
}
</script>