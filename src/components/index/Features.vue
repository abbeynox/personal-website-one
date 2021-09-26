<template>
    <section class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="mb-20 text-2xl font-medium text-center text-white sm:text-3xl title-font">Das alles
            <br class="hidden sm:block">findest du hier
            </h1>
            <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
            <div class="flex p-4 md:w-1/3">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="mb-2 text-lg font-medium text-white title-font">Meine Werte</h2>
                <p class="text-base leading-relaxed">Nur mit der Berücksichtigung meiner Werte komme ich meinen Zielen näher.</p>
                <router-link class="inline-flex items-center mt-3 text-purple-400" to="/about">Mehr erfahren
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </router-link>
                </div>
            </div>
            <div class="flex p-4 md:w-1/3">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="mb-2 text-lg font-medium text-white title-font">Meine Projekte</h2>
                <p class="text-base leading-relaxed">Egal ob auf der Arbeit oder in meiner Freizeit. Ein Projekt habe ich immer am laufen. Hier eine Liste an Projekten, die ich selbst gestartet habe.</p>
                <router-link class="inline-flex items-center mt-3 text-purple-400" to="/projects">Mehr erfahren
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </router-link>
                </div>
            </div>
            <div class="flex p-4 md:w-1/3">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="mb-2 text-lg font-medium text-white title-font">Über mich</h2>
                <p class="text-base leading-relaxed">Du hast vielleicht schon bereits etwas über mich gelesen. Ich möchte mich gerne vorstellen, damit ihr mich besser kennenlernt.</p>
                <router-link class="inline-flex items-center mt-3 text-purple-400" to="/about">Mehr erfahren
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </router-link>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Features"
}
</script>
