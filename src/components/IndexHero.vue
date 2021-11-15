<template>
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
        <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">🌎yao.earth FTP</h1>
        <transition name="view" appear>
            <p class="mx-auto mt-2 text-lg leading-relaxed text-gray-400 lg:w-2/3" v-show="this.$route.query.redirect !== undefined && this.redirectInfo == true" id="redirectInfo">{{"➡️Weitergeleitet von " + this.$route.query.redirect + ".ch"}}</p>
        </transition>
        </div>  
    </div>
</template>

<script>

export default {
    name: 'Hero',
    data() {
        return {
            redirectInfo: true
        }
    },
    created() {
            setTimeout(() => this.redirectInfo = false, 2000);
        }
}

</script>
