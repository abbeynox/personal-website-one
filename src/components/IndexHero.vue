<template>
    <div class="container px-5 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
        <Header title="Hey," description="willkommen auf Yao.Earth🌎"></Header>
        <transition name="view" appear>
            <p class="mx-auto mt-2 text-lg leading-relaxed text-gray-400 lg:w-2/3" v-show="this.$route.query.redirect !== undefined && this.redirectInfo == true" id="redirectInfo">{{"➡️Weitergeleitet von " + this.$route.query.redirect + ".ch"}}</p>
        </transition>
        </div>  
    </div>
</template>

<script>
import Header from "../components/Header"

export default {
    name: 'Hero',
        components: {
        Header
    },
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
